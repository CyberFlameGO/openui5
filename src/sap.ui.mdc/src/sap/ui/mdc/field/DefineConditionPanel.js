/*!
 * ${copyright}
 */
sap.ui.define([
	'sap/ui/core/Control',
	'sap/ui/base/ManagedObjectObserver',
	'sap/base/util/merge',
	'sap/base/util/deepEqual',
	'sap/ui/mdc/condition/Condition',
	'sap/ui/mdc/condition/FilterOperatorUtil',
	'sap/ui/mdc/condition/Operator',
	'sap/ui/mdc/enum/EditMode',
	'sap/ui/mdc/enum/FieldDisplay',
	'sap/ui/mdc/enum/BaseType',
	'sap/ui/mdc/enum/ConditionValidated',
	'sap/ui/mdc/Field',
	'sap/ui/mdc/field/ListFieldHelp',
	'sap/ui/mdc/field/ListFieldHelpItem',
	'sap/ui/model/base/ManagedObjectModel',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/resource/ResourceModel',
	'sap/ui/model/type/String',
	'sap/ui/core/library',
	'sap/ui/core/InvisibleText',
	'sap/ui/core/ListItem',
	'sap/ui/layout/Grid',
	'sap/ui/layout/GridData',
	'sap/m/library',
	'sap/m/ScrollContainer',
	'sap/m/Button',
	'sap/m/Panel'
], function(
		Control,
		ManagedObjectObserver,
		merge,
		deepEqual,
		Condition,
		FilterOperatorUtil,
		Operator,
		EditMode,
		FieldDisplay,
		BaseType,
		ConditionValidated,
		Field,
		ListFieldHelp,
		ListFieldHelpItem,
		ManagedObjectModel,
		JSONModel,
		ResourceModel,
		StringType,
		coreLibrary,
		InvisibleText,
		ListItem,
		Grid,
		GridData,
		mLibrary,
		ScrollContainer,
		Button,
		Panel
		) {
	"use strict";

	// translation utils
	var oMessageBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");
	sap.ui.getCore().attachLocalizationChanged(function() {
		oMessageBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");
	});

	var ButtonType = mLibrary.ButtonType;
	var ValueState = coreLibrary.ValueState;

	/**
	 * Constructor for a new <code>DefineConditionPanel</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * A <code>DefineConditionPanel</code> control is used inside the <code>ValueHelpPanel</code> control to enter different types
	 * of conditions.
	 *
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @alias sap.ui.mdc.field.DefineConditionPanel
	 * @since 1.58.0
	 * @abstract
	 *
	 * @private
	 * @ui5-restricted sap.ui.mdc.field.ValueHelpPanel, sap.ui.mdc.field.ConditionFieldHelp
	 */
	var DefineConditionPanel = Control.extend("sap.ui.mdc.field.DefineConditionPanel", {
		metadata: {
			library: "sap.ui.mdc",
			properties: {
				/**
				 * Sets the conditions that represent the selected values of the help.
				 *
				 * @since 1.62.0
				 */
				conditions: {
					type: "object[]",
					group: "Data",
					defaultValue: [],
					byValue: true
				},

				// TODO: better way to pass MaxConditions, Operators, ...
				/**
				 * The <code>formatOptions</code> for the <code>ConditionType</code> used to format tokens.
				 *
				 * @since 1.62.0
				 */
				formatOptions: {
					type: "object",
					defaultValue: {}
				},

				/**
				 * The <code>label</code> for the <code>DefineConditionPanel</code> used as panel headerText.
				 *
				 * @since 1.84.0
				 */
				label: {
					type: "string",
					defaultValue: ""
				}

			},
			aggregations: {
				/**
				 * Optional content that can be rendered.
				 *
				 * <b>Note:</b> Bind the value-holding property of the control to <code>'$field>/conditions'</code>
				 * using <code>sap.ui.mdc.field.ConditionsType</code> as type.
				 *
				 * If the control needs to show multiple conditions, bind its aggregation to </code>'$field>/conditions'</code>.
				 * Bind the item controls value-holding property using <code>sap.ui.mdc.field.ConditionType</code> as type.
				 *
				 * <b>Warning:</b> Only controls allowed in a </code>Form</code> are allowed to be used for this optional content.
				 * Other controls might break the layout.
				 * This means the <code>sap.ui.core.IFormContent</code> interface needs to be implemented by these controls.
				 */
				_content: {
					type: "sap.ui.core.Control",
					multiple: false,
					visibility: "hidden"
				}
			},
			events: {}
		},
		_oManagedObjectModel: null,

		renderer:{
			apiVersion: 2,
			render: function(oRm, oControl){
				oRm.openStart("section", oControl);
				oRm.class("sapUiMdcDefineConditionPanel");
				oRm.openEnd();
				oRm.renderControl(oControl.getAggregation("_content"));
				oRm.close("section");
			}
		},

		init: function() {
			sap.ui.getCore().getMessageManager().registerObject(this, true);

			Control.prototype.init.apply(this, arguments);

			this._oManagedObjectModel = new ManagedObjectModel(this);

			this._oObserver = new ManagedObjectObserver(_observeChanges.bind(this));

			this._oObserver.observe(this, {
				properties: ["conditions", "formatOptions"]
			});

			_createInnerControls.call(this);
			this.setModel(this._oManagedObjectModel, "$this");
			this.setModel(this._oManagedObjectModel, "$condition"); // TODO: better solution to have 2 bindingContexts on one control
		},

		exit: function() {
			sap.ui.getCore().getMessageManager().unregisterObject(this, true);
			this._oObserver.disconnect();
			this._oObserver = undefined;

			if (this._sConditionsTimer) {
				clearTimeout(this._sConditionsTimer);
				this._sConditionsTimer = null;
			}

			if (this._oDefaultType) {
				this._oDefaultType.destroy();
				delete this._oDefaultType;
			}

			this._oManagedObjectModel.destroy();
			delete this._oManagedObjectModel;
		},

		byId: function(sId) {
			return sap.ui.getCore().byId(this.getId() + "--" + sId);
		},

		onBeforeRendering: function() {

			if (!this.getModel("$i18n")) {
				// if ResourceModel not provided from outside create own one
				this.setModel(new ResourceModel({ bundleName: "sap/ui/mdc/messagebundle", async: false }), "$i18n");
			}

			if (this.getConditions().length === 0) {
				// as observer must not be called in the initial case
				this.updateDefineConditions();
			}

		},

		removeCondition: function(oEvent) {
			var oSource = oEvent.oSource;
			var oCondition = oSource.getBindingContext("$this").getObject();
			var aConditions = this.getConditions();
			var iIndex = FilterOperatorUtil.indexOfCondition(oCondition, aConditions);

			aConditions.splice(iIndex, 1);
			this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel
		},

		addCondition: function(oEvent) {
			var aConditions = this.getConditions();
			var oFormatOptions = this.getFormatOptions();
			var iMaxConditions = oFormatOptions.maxConditions;

			if (iMaxConditions === -1 || aConditions.length < iMaxConditions) {
				// create a new dummy condition for a new condition on the UI - must be removed later if not used or filled correct
				this.addDummyCondition(aConditions.length + 1);
				if (this.getConditions().length === iMaxConditions) {
					this._bFocusLastCondition = true; // as add-Button will disappear and focus should stay in DefineConditionPanel
				}
			}
		},

		addDummyCondition: function(index) {
			var aOperators = _getOperators.call(this);
			var oType = _getType.call(this);
			var sType = _getBaseType.call(this, oType);
			var oDefaultOperator = FilterOperatorUtil.getDefaultOperator(sType);
			var sOperator = aOperators.indexOf(oDefaultOperator.name) >= 0 ? oDefaultOperator.name : aOperators[0];
			var oCondition = Condition.createCondition(sOperator, [null], undefined, undefined, ConditionValidated.NotValidated);
			FilterOperatorUtil.updateConditionValues(oCondition);
			FilterOperatorUtil.checkConditionsEmpty(oCondition, aOperators);
			var aConditions = this.getConditions();
			if (index !== undefined) {
				aConditions.splice(index, 0, oCondition);
			} else {
				aConditions.push(oCondition);
			}
			this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel
		},

		updateDefineConditions: function() {
			var aConditions = this.getConditions().filter(function(oCondition) {
				return oCondition.validated !== ConditionValidated.Validated;
			});

			_addStaticText.call(this, aConditions, true, false);

			if (aConditions.length === 0) {
				this.addDummyCondition();
			}
		},

		// called when the user has change the value of the condition field
		onChange: function(oEvent) {
			var aOperators = _getOperators.call(this);
			var aConditions = this.getConditions();
			FilterOperatorUtil.checkConditionsEmpty(aConditions, aOperators);
			FilterOperatorUtil.updateConditionsValues(aConditions, aOperators);
			this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel

		},

		onSelectChange: function(oEvent) {
			var oField = oEvent.getSource();
			var sKey = oField.getValue();
			var sOldKey = oField._sOldKey;
			var oOperator = FilterOperatorUtil.getOperator(sKey); // operator must exist as List is created from valid operators
			var oOperatorOld = sOldKey && FilterOperatorUtil.getOperator(sOldKey);

			if (oOperator && oOperatorOld) {
				var oCondition;
				var aConditions;
				var iIndex;
				var bUpdate = false;

				if (!deepEqual(oOperator.valueTypes[0], oOperatorOld.valueTypes[0]) && oOperator.valueTypes[0] !== Operator.ValueType.Static) {
					// type changed -> remove entered value (only if changed by user in Select)
					// As Static text updated on condition change, don't delete it here.
					oCondition = oField.getBindingContext("$this").getObject();
					aConditions = this.getConditions();
					iIndex = FilterOperatorUtil.indexOfCondition(oCondition, aConditions);
					if (iIndex >= 0) {
						oCondition = aConditions[iIndex]; // to get right instance
						if (oCondition.values.length > 0 && oCondition.values[0] !== null) {
							oCondition.values[0] = null;
							bUpdate = true;
						}
						if (oCondition.values.length > 1 && oCondition.values[1] !== null) {
							oCondition.values[1] = null;
							bUpdate = true;
						}
					}
				}

				if (!oOperator.valueTypes[1] && oOperatorOld.valueTypes[1]) {
					// switch from BT to EQ -> remove second value even if filled
					if (!oCondition) { // if already read - use it
						oCondition = oField.getBindingContext("$this").getObject();
						aConditions = this.getConditions();
						iIndex = FilterOperatorUtil.indexOfCondition(oCondition, aConditions);
						oCondition = aConditions[iIndex]; // to get right instance
					}
					if (iIndex >= 0) {
							if (oCondition.values.length > 1 && oCondition.values[1]) {
							oCondition.values = oCondition.values.slice(0, 1);
							bUpdate = true;
						}
					}
				}

				if (bUpdate) {
					this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel
				}
			}

			delete oField._sOldKey;
		},

		onPaste: function(oEvent) {
			var sOriginalText;
			var oSource = oEvent.srcControl;
			var oFormatOptions = this.getFormatOptions();
			var iMaxConditions = oFormatOptions.hasOwnProperty("maxConditions") ? oFormatOptions.maxConditions : -1;
			var sConditionPath = oSource.getBindingContext("$condition").getPath(); // Path to condition of the active control
			var iIndex = parseInt(sConditionPath.split("/")[2]); // index of current condition - to remove before adding new ones

			// for the purpose to copy from column in excel and paste in MultiInput/MultiComboBox
			if (window.clipboardData) {
				//IE
				sOriginalText = window.clipboardData.getData("Text");
			} else {
				// Chrome, Firefox, Safari
				sOriginalText = oEvent.originalEvent.clipboardData.getData('text/plain');
			}
			var aSeparatedText = sOriginalText.split(/\r\n|\r|\n/g);

			if (aSeparatedText && aSeparatedText.length > 1) {
				setTimeout(function() {
					var oType = _getType.call(this);
					var sType = _getBaseType.call(this, oType);

					var iLength = aSeparatedText.length;
					var aConditions = this.getConditions();
					for (var i = 0; i < iLength; i++) {
						if (aSeparatedText[i]) {
							var sValue = aSeparatedText[i];
							var aValues = sValue.split(/\t/g); // if two values exist, use it as Between
							var oOperator;
							if (aValues.length == 2 && aValues[0] && aValues[1]) {
								oOperator = FilterOperatorUtil.getOperator("BT");
							} else {
								aValues = [sValue.trim()];
								oOperator = FilterOperatorUtil.getDefaultOperator(sType);
							}
							sValue = oOperator ? oOperator.format(Condition.createCondition(oOperator.name, aValues)) : aValues[0];

							if (oOperator) {
								var oCondition = oOperator.getCondition(sValue, oType, FieldDisplay.Value, true);
								if (oCondition) {
									oCondition.validated = ConditionValidated.NotValidated;
									if (aConditions.length > iIndex) {
										// overwrite existing condition
										aConditions.splice(iIndex, 1, oCondition);
									} else {
										// add new condition
										aConditions.push(oCondition);
									}
									iIndex++;
								}
							}
						}
					}

					if (iMaxConditions >= 0 && aConditions.length > iMaxConditions) {
						aConditions.splice(iMaxConditions, aConditions.length - iMaxConditions);
					}

					if (oSource.setDOMValue) {
						oSource.setDOMValue(""); // otherwise binding update will be ignored
					}

					FilterOperatorUtil.checkConditionsEmpty(aConditions);
					this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel

				}.bind(this), 0);
			}
		},

		cleanUp: function() {
			// of Dialog is closed all error messages and invalid input should be removed to be clean on reopening
			var oGrid = this.byId("conditions");
			var aGridContent = oGrid.getContent();
			for (var i = 0; i < aGridContent.length; i++) {
				var oField = aGridContent[i];
				if (oField instanceof Field && oField.hasOwnProperty("_iValueIndex")) {
					if (oField._bParseError) { // TODO: better was to find out parsing error
						oField.setValue(); // to remove invalid value from parsing
					}
					if (oField.getValueState() !== ValueState.None) {
						oField.setValueState(ValueState.None);
						oField.setValueStateText();
					}
				}
			}
		}

	});

	function _observeChanges(oChanges) {

		if (oChanges.name === "value") {
			// operator changed -> update controls
			_operatorChanged.call(this, oChanges.object, oChanges.current, oChanges.old);
		}

		if (oChanges.name === "formatOptions") {
			// type or maxConditions might changed -> resume ListBinding
			var aConditions = this.getConditions();
			var oOperators = oChanges.current && oChanges.current.operators;
			var oOperatorsOld = oChanges.old && oChanges.old.operators;
			var bOperatorModelUpdated = false;
			if (!deepEqual(oOperators, oOperatorsOld)) {
				// operators changed
				bOperatorModelUpdated = true;
				_updateOperatorModel.call(this);
			}

			var sType = oChanges.current && oChanges.current.valueType && oChanges.current.valueType.getMetadata().getName();
			var sTypeOld = oChanges.old && oChanges.old.valueType && oChanges.old.valueType.getMetadata().getName();
			if (sType !== sTypeOld && aConditions.length > 0) {
				// operators might be changed if type changed
				if (!bOperatorModelUpdated) { // don't do twice
					_updateOperatorModel.call(this);
				}
				this._bUpdateType = true;
				_renderConditions.call(this);
				this._bUpdateType = false;
				_addStaticText.call(this, aConditions, true, true); // static text might changed if type changed
			}
		}

		if (oChanges.name === "conditions") {
			if (this._sConditionsTimer) {
				clearTimeout(this._sConditionsTimer);
				this._sConditionsTimer = null;
			}
			this._sConditionsTimer = setTimeout(function () {
				// on multiple changes (dummy row, static text...) perform only one update
				this._sConditionsTimer = null;
				this.updateDefineConditions();
				_renderConditions.call(this);
			}.bind(this), 0);
		}

	}

	function _operatorChanged(oField, sKey, sOldKey) {

		oField._sOldKey = sOldKey; // to know in change event

		var iIndex = 0;

		// if type of operator changed -> remove binding and create it new later on
		if (sKey && sOldKey) {
			var oOperator = FilterOperatorUtil.getOperator(sKey);
			var oOperatorOld = FilterOperatorUtil.getOperator(sOldKey);
			var oGrid = oField.getParent();
			var oValue0Field;
			var oValue1Field;
			iIndex = oGrid.indexOfContent(oField);

			// find fields and initialize error state
			oValue0Field = oGrid.getContent()[iIndex + 2];
			if (oValue0Field && oValue0Field.hasOwnProperty("_iValueIndex") && oValue0Field._iValueIndex === 0) {
				if (oValue0Field instanceof Field && !oValue0Field._bParseError) { // TODO: better was to find out parsing error // TODO: handle custom controls
					// if Field is in parsing error state, don't remove error
					oValue0Field.setValueState(ValueState.None);
					oValue0Field.setValueStateText();
				}
				oValue1Field = oGrid.getContent()[iIndex + 3]; // second field only exists if first field exist
				if (oValue1Field && oValue1Field.hasOwnProperty("_iValueIndex") && oValue1Field._iValueIndex === 1) {
					if (oValue1Field instanceof Field && !oValue1Field._bParseError) { // TODO: better was to find out parsing error // TODO: handle custom controls
						// if Field is in parsing error state, don't remove error
						oValue1Field.setValueState(ValueState.None);
						oValue1Field.setValueStateText();
					}
				} else {
					oValue1Field = undefined;
				}
			} else {
				oValue0Field = undefined;
			}

			if (oOperator.createControl || oOperatorOld.createControl) {
				// custom control used -> needs to be created new
				if (oValue0Field) {
					oValue0Field.destroy();
				}
				if (oValue1Field) {
					oValue1Field.destroy();
				}
			} else {
				if (oValue0Field && oOperator.valueTypes[0] !== oOperatorOld.valueTypes[0]) {
					oValue0Field.unbindProperty("value");
				}
				if (oValue1Field && oOperator.valueTypes[1] !== oOperatorOld.valueTypes[1] && oOperatorOld.valueTypes[1]) { // 2nd Field only exist if there was a valueType defined
					oValue1Field.unbindProperty("value");
				}
			}
		}

		if (!sKey) { // TODO: remove? Because cannot longer happen as Field don't allow empty input because of used data type constraints
			// key must not be empty
			var oCondition = oField.getBindingContext("$this").getObject();
			if (oCondition) { // condition might be deleted before Field instance is deleted
				var aConditions = this.getConditions();
				iIndex = FilterOperatorUtil.indexOfCondition(oCondition, aConditions);
				if (iIndex >= 0) {
					oCondition = aConditions[iIndex]; // to get right instance
					oCondition.operator = sOldKey;
					this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel
				}
			}
		}

		// as additinalValue is not updated automatically if operator is set from outside just take it from OperatorModel
		var aOperatorsData = this.oOperatorModel.getData();
		var sDescription;
		for (var i = 0; i < aOperatorsData.length; i++) {
			var oOperatorData = aOperatorsData[i];
			if (oOperatorData.key === sKey) {
				sDescription = oOperatorData.additionalText;
				break;
			}
		}
		oField.setAdditionalValue(sDescription);

		this.onChange();

	}

	function _createControl(oCondition, iIndex, sId, oBindingContext) {

		var oOperator = FilterOperatorUtil.getOperator(oCondition.operator);
		if (!oOperator) {
			return null; // TODO: exception?
		}

		var oNullableType = _getFieldType.call(this, oOperator.name, iIndex);
		var oValueBindingContext = this._oManagedObjectModel.getContext(oBindingContext.getPath() + "values/" + iIndex + "/");

		var oControl;
		if (oOperator.createControl) {
			oControl = oOperator.createControl(oNullableType, "$this>", iIndex, sId);
		} else {
			oControl = new Field(sId, {
				delegate: _getDelegate.call(this),
				value: { path: "$this>", type: oNullableType, mode: 'TwoWay', targetType: 'raw' },
				editMode: {path: "$condition>operator", formatter: _getEditModeFromOperator},
				width: "100%"
			});
		}

		if (oControl.getMetadata().hasProperty("placeholder")) {
			if (iIndex === 0) {
				oControl.bindProperty("placeholder", {path: "$condition>operator", formatter: _getPlaceholder1ForOperator});
			} else { // from Field cannot switch placeholder
				oControl.bindProperty("placeholder", {path: "$condition>operator", formatter: _getPlaceholder2ForOperator});
			}
		}

		oControl._iValueIndex = iIndex; // to find it for update
		if (oControl.attachChange) { // custom control might not have a change event
			oControl.attachChange(this.onChange.bind(this));
		}
		oControl.onpaste = this.onPaste.bind(this);
		oControl.setLayoutData(new GridData({span: {path: "$condition>", formatter: _getSpanForValue.bind(this)}}));
		oControl.setBindingContext(oValueBindingContext, "$this");
		oControl.setBindingContext(oBindingContext, "$condition");
		// add fieldGroup to validate Condition only after both Fields are entered.
		oControl.setFieldGroupIds([oBindingContext.getPath()]); // use path to have a ID for every condition

		return oControl;

	}

	function _getFieldType(sOperator, iIndex) {

		var oDataType = _getType.call(this);
		var oOperator = FilterOperatorUtil.getOperator(sOperator);

		if (oOperator.valueTypes[iIndex] && [Operator.ValueType.Self, Operator.ValueType.Static].indexOf(oOperator.valueTypes[iIndex]) === -1) {
			oDataType = oOperator._createLocalType(oOperator.valueTypes[iIndex], oDataType);
		}

		var bStaticText = false;

		if (oOperator.valueTypes[iIndex] === Operator.ValueType.Static) {
			bStaticText = true;
			oDataType = _getDefaultType.call(this);
		}

		var sType = bStaticText ? BaseType.String : _getBaseType.call(this, oDataType);
		var oNullableType;
		var Type;
		var oFormatOptions;
		var oConstraints;

		switch (sType) {
			case BaseType.Boolean:
				// normally boolean makes no sense for DefineConditionPanel
				// in sap.ui.model.odata.type.Boolean nullable is default, if set to false try to create nullable type
				if (oDataType.oConstraints && oDataType.oConstraints.hasOwnProperty("nullable") && oDataType.oConstraints.nullable === false) {
					// "clone" type and make nullable
					Type = sap.ui.require(oDataType.getMetadata().getName().replace(/\./g, "/")); // type is already loaded because instance is provided
					oFormatOptions = merge({}, oDataType.oFormatOptions);
					oConstraints = merge(oDataType.oConstraints, { nullable: true });
					oNullableType = new Type(oFormatOptions, oConstraints);
				} else {
					// given type can be used
					oNullableType = oDataType;
				}

				break;
			case BaseType.Numeric:
				if (oDataType.oFormatOptions && oDataType.oFormatOptions.hasOwnProperty("emptyString") && oDataType.oFormatOptions.emptyString === null) {
					// given type can be used
					oNullableType = oDataType;
				} else {
					// "clone" type and make nullable
					Type = sap.ui.require(oDataType.getMetadata().getName().replace(/\./g, "/")); // type is already loaded because instance is provided
					oFormatOptions = merge(oDataType.oFormatOptions, { emptyString: null });
					//TODO oConstraints like maximum are not used inside the Double type
					oNullableType = new Type(oFormatOptions, oDataType.oConstraints);
				}

				break;
			case BaseType.Date:
			case BaseType.Time:
			case BaseType.DateTime:
				oNullableType = oDataType;

				break;
			//TODO: how to handle unit fields?
			default:
				oNullableType = oDataType; // use given type or default string type
				break;
		}

		return oNullableType;

	}

	function _getOperators() {

		var oFormatOptions = this.getFormatOptions();
		var aOperators = oFormatOptions && oFormatOptions.operators;

		if (!aOperators || aOperators.length === 0) {
			// TODO: better default
			aOperators = FilterOperatorUtil.getOperatorsForType(BaseType.String);
		}

		return aOperators;

	}

	function _hasMultipleOperatorGroups() {
		var firstGroupId;
		var aOperators = _getOperators.call(this);
		for (var i = 0; i < aOperators.length; i++) {
			var sOperator = aOperators[i];
			var oOperator = FilterOperatorUtil.getOperator(sOperator);

			if (!firstGroupId) {
				firstGroupId = oOperator.group.id;
			} else if (firstGroupId !== oOperator.group.id) {
				return true;
			}
		}
		return false;
	}

	function _updateOperatorModel() {

		if (!this.oOperatorModel) {
			return;
		}

		var oType = _getType.call(this);
		// assert(oOperatorConfig == null, "oOperatorConfig does not exist - no operators for Select control can be added");
		var aOperators = _getOperators.call(this);
		var aOperatorsData = [];

		var bHasMultipleGroups = _hasMultipleOperatorGroups.call(this);

		var sFieldHelpId = this.getId() + "--rowSelect-help";
		var oListFieldHelp = sap.ui.getCore().byId(sFieldHelpId);

		var oTemplate;
		if (bHasMultipleGroups) {
			oTemplate = new ListFieldHelpItem({key: "{om>key}", text: "{om>text}", additionalText: "{om>additionalText}", groupKey: "{om>groupId}", groupText: "{om>groupText}"});
		} else {
			oTemplate = new ListItem({key: "{om>key}", text: "{om>text}", additionalText: "{om>additionalText}"});
		}
		oListFieldHelp.bindAggregation("items", { path: 'om>/', templateShareable: false, template: oTemplate});

		for (var i = 0; i < aOperators.length; i++) {
			var sOperator = aOperators[i];
			var oOperator = FilterOperatorUtil.getOperator(sOperator);
			if (!oOperator || (oOperator.showInSuggest !== undefined && oOperator.showInSuggest == false)) {
				continue;
			}

			// try to load the operator longText which is type dependent
			var sTxtKey = oOperator.textKey || "operators." + oOperator.name + ".longText";
			var sText = oOperator.getTypeText(sTxtKey, oType.getName().toLowerCase());
			if (sText === sTxtKey) {
				// when the returned text is the key, a type dependent longText does not exist and we use the default longText for the operator
				sText = oOperator.longText;
			}

			//Update the additionalInfo text for the operator
			var sAdditionalText = oOperator.additionalInfo;
			if (sAdditionalText === undefined)  {
				if (sAdditionalText !== "" && oOperator.formatRange)  {
					sAdditionalText = oOperator.formatRange( oOperator._getRange(undefined, oType), oType);
				} else if (!bHasMultipleGroups) {
					sAdditionalText = oOperator.group.text;
				}
			}

			aOperatorsData.push({
				key: oOperator.name,
				text: sText,
				additionalText: sAdditionalText,
				groupId: oOperator.group.id,
				groupText: oOperator.group.text
			});
		}

		this.oOperatorModel.setData(aOperatorsData);

	}

	function _getType() {

		var oFormatOptions = this.getFormatOptions();
		var oType = oFormatOptions && oFormatOptions.valueType;
		if (!oType) {
			oType = _getDefaultType.call(this);
		}

		return oType;

	}

	function _getDefaultType() {

		if (!this._oDefaultType) {
			this._oDefaultType = new StringType();
		}
		return this._oDefaultType;

	}

	function _getBaseType(oType) {

		var sType = oType.getMetadata().getName();
		var oFormatOptions = oType.oFormatOptions;
		var oConstraints = oType.oConstraints;
		var oDelegate = this.getFormatOptions().delegate;
		var oPayload = this.getFormatOptions().payload;
		var sBaseType = oDelegate ? oDelegate.getTypeUtil(oPayload).getBaseType(sType, oFormatOptions, oConstraints) : BaseType.String; // if not configured use string

		if (sBaseType === BaseType.Unit) {
			sBaseType = BaseType.Numeric;
		}

		return sBaseType;

	}

	function _getDelegate() {

		var oFormatOptions = this.getFormatOptions();
		var sName = oFormatOptions.delegateName || "sap/ui/mdc/field/FieldBaseDelegate";
		var oPayload = oFormatOptions.payload;

		return {name: sName, payload: oPayload};

	}

	function _addStaticText(aConditions, bUpdateBinding, bTypeChange) {

		// for static operators add static text as value to render text control
		var oDataType = _getType.call(this);
		var aUpdate = [];
		var i = 0;
		for (i = 0; i < aConditions.length; i++) {
			var oCondition = aConditions[i];
			var oOperator = FilterOperatorUtil.getOperator(oCondition.operator);
			if (oOperator && oOperator.valueTypes[0] === Operator.ValueType.Static && (oCondition.values.length === 0 || bTypeChange)) {
				// if type changed the text needs to be new formatted (setting of type and conditions might be async.)
				if (oOperator.getStaticText) {
					var sText = oOperator.getStaticText(oDataType);
					if (oCondition.values.length > 0) {
						oCondition.values[0] = sText;
					} else {
						oCondition.values.push(sText);
					}
					aUpdate.push(i);
				}
			}
		}

		if (aUpdate.length > 0) {
			this.setProperty("conditions", aConditions, true); // do not invalidate whole DefineConditionPanel
		}

	}

	function _createInnerControls() {
		var oInvisibleOperatorText = new InvisibleText(this.getId() + "--ivtOperator", {text: "{$i18n>valuehelp.DEFINECONDITIONS_OPERATORLABEL}"});

		var oPanel = new Panel({headerText: "{$this>/label}",
			expanded: true,
			height: "100%",
			backgroundDesign: "Transparent"}
		).addStyleClass("sapMdcDefineconditionPanel");

		oPanel.addDependent(
			new ListFieldHelp(this.getId() + "--rowSelect-help", {
				filterList: false,
				useFirstMatch: true
			})
		);

		var oGrid = new Grid(this.getId() + "--conditions", {
			width: "100%",
			hSpacing: 0,
			vSpacing: 0,
			containerQuery: true}
		).addStyleClass("sapUiMdcDefineConditionGrid");

		_createRow.call(this, undefined, oGrid, 0, null, 0); // create dummy row

		oPanel.addContent(oInvisibleOperatorText);
		oPanel.addContent(oGrid);

		var oAddBtn = new Button(this.getId() + "--addBtn", {
			press: this.addCondition.bind(this),
			type: ButtonType.Default,
			text: "{$i18n>valuehelp.DEFINECONDITIONS_ADDCONDITION}",
			layoutData: new GridData({
				span: "XL2 L3 M3 S3",
				indent: "XL9 L8 M8 S7",
				linebreak: true,
				visibleS: {path: "$this>/conditions", formatter: _getAddButtonVisible.bind(this)},
				visibleM: {path: "$this>/conditions", formatter: _getAddButtonVisible.bind(this)},
				visibleL: {path: "$this>/conditions", formatter: _getAddButtonVisible.bind(this)},
				visibleXL: {path: "$this>/conditions", formatter: _getAddButtonVisible.bind(this)}})}
		);

		oGrid.addContent(oAddBtn);

		oGrid.attachValidateFieldGroup(_validateFieldGroup, this); // to validate conditions with more than one field

		this.setAggregation("_content", oPanel);

	}

	function _getAddButtonVisible(aConditions) {

		var oFormatOptions = this.getFormatOptions();
		var iMaxConditions = oFormatOptions.hasOwnProperty("maxConditions") ? oFormatOptions.maxConditions : -1;

		return iMaxConditions === -1 || aConditions.length < iMaxConditions;

	}

	function _getRemoveButtonVisible(aConditions) {

		var oFormatOptions = this.getFormatOptions();
		var iMaxConditions = oFormatOptions.hasOwnProperty("maxConditions") ? oFormatOptions.maxConditions : -1;

		// only on case of maxCondition==1 the Remove icons should be invisible
		return iMaxConditions !== 1;

	}

	function _renderConditions() {

		var aConditions = this.getConditions();
		var oGrid = this.byId("conditions");
		var aGridContent;
		var iRow = -1;
		var iIndex = 0;

		for (var i = 0; i < aConditions.length; i++) {
			var oCondition = aConditions[i];
			if (oCondition.validated !== ConditionValidated.Validated) {
				// show only validated conditions
				var oBindingContext = this._oManagedObjectModel.getContext("/conditions/" + i + "/");
				iRow++;

				if (!this.oOperatorModel) {
					// init operatorModel if first row is created (needed to check operator)
					this.oOperatorModel = new JSONModel();
					this.setModel(this.oOperatorModel, "om");
					_updateOperatorModel.call(this);
				}

				aGridContent = oGrid.getContent(); // to have current content
				if (aGridContent[iIndex] && aGridContent[iIndex].isA("sap.ui.mdc.Field")) {
					// row already exists -> update it
					iIndex = _updateRow.call(this, oCondition, oGrid, iIndex, oBindingContext, iRow);
				} else {
					// reate new row
					iIndex = _createRow.call(this, oCondition, oGrid, iIndex, oBindingContext, iRow);
				}
			}
		}

		// remove unused rows
		aGridContent = oGrid.getContent();
		while (aGridContent[iIndex] && aGridContent[iIndex] !== this.byId("addBtn")) {
			aGridContent[iIndex].destroy();
			iIndex++;
		}

		if (this._bFocusLastCondition) {
			// focus first condition, as we can be sure this is already rendered
			// TODO: focus last condition after it is rendered
			aGridContent[0].focus();
			this._bFocusLastCondition = false;
		}

	}

	function _createRow(oCondition, oGrid, iIndex, oBindingContext, iRow) {

		var sIdPrefix = this.getId() + "--" + iRow;

		if (!this._oOperatorFieldType) {
			this._oOperatorFieldType = new StringType({}, {minLength: 1});
		}

		var oOperatorField = new Field(sIdPrefix + "-operator", {
			value: {path: "$this>operator", type: this._oOperatorFieldType},
			width: "100%",
			display: "Description",
			fieldHelp: this.getId() + "--rowSelect-help",
			change: this.onSelectChange.bind(this),
			ariaLabelledBy: this.getId() + "--ivtOperator"
		})
		.setLayoutData(new GridData({span: {path: "$this>/conditions", formatter: _getSpanForOperator.bind(this)}, linebreak: true}))
		.setBindingContext(oBindingContext, "$this");
		if (oBindingContext) {
			// validate only complete condition
			oOperatorField.setFieldGroupIds([oBindingContext.getPath()]); // use path to have a ID for every condition
		}

		// as selected key can be changed by reopening dialog listen on property change not on change event
		this._oObserver.observe(oOperatorField, {
			properties: ["value"]
		});

		oGrid.insertContent(oOperatorField, iIndex); // insert as add-Button is already at the end
		iIndex++;

		var oRemoveButton = new Button(sIdPrefix + "--removeBtnSmall", {
			press: this.removeCondition.bind(this),
			type: ButtonType.Transparent,
			icon: "sap-icon://decline",
			tooltip: "{$i18n>valuehelp.DEFINECONDITIONS_REMOVECONDITION}"
		})
		.setLayoutData(new GridData({span: "XL1 L1 M1 S2",
			indent: {path: "$this>operator", formatter: _getIndentForOperator},
			visibleS: {path: "$this>/conditions", formatter: _getRemoveButtonVisible.bind(this)},
			visibleM: false,
			visibleL: false,
			visibleXL: false
		}))
		.setBindingContext(oBindingContext, "$this"); // to find condition on remove
		if (oBindingContext) {
			// as Button is between Operatot and Value don't trigger validation on tabbing between
			oRemoveButton.setFieldGroupIds([oBindingContext.getPath()]); // use path to have a ID for every condition
		}

		oGrid.insertContent(oRemoveButton, iIndex);
		iIndex++;

		if (oCondition) { // for initial dummy row don't create value fields (as we don't know the operator or type)
			for (var i = 0; i < oCondition.values.length; i++) {
				var oControl = _createControl.call(this, oCondition, i, sIdPrefix + "-values" + i, oBindingContext);
				if (oControl) {
					oGrid.insertContent(oControl, iIndex);
					iIndex++;
				}
			}
		}

		var oRemoveButton2 = new Button(sIdPrefix + "--removeBtnLarge", {
			press: this.removeCondition.bind(this),
			type: ButtonType.Transparent,
			icon: "sap-icon://decline",
			tooltip: "{$i18n>valuehelp.DEFINECONDITIONS_REMOVECONDITION}"
		})
		.setLayoutData(new GridData({span: "XL1 L1 M1 S1",
			indent: {path: "$this>operator", formatter: _getIndentForOperator},
			visibleS: false,
			visibleM: {path: "$this>/conditions", formatter: _getRemoveButtonVisible.bind(this)},
			visibleL: {path: "$this>/conditions", formatter: _getRemoveButtonVisible.bind(this)},
			visibleXL: {path: "$this>/conditions", formatter: _getRemoveButtonVisible.bind(this)}
		}))
		.setBindingContext(oBindingContext, "$this"); // to find condition on remove

		oGrid.insertContent(oRemoveButton2, iIndex);
		iIndex++;

		return iIndex;

	}

	function _getEditModeFromOperator(sOperator) {

		if (!sOperator) {
			return EditMode.Display;
		}

		var oOperator = FilterOperatorUtil.getOperator(sOperator);
		var bStaticText = false;

		if (oOperator && oOperator.valueTypes[0] === Operator.ValueType.Static) {
			bStaticText = true;
		}

		return bStaticText ? EditMode.Display : EditMode.Editable;

	}

	function _getIndentForOperator(sOperator) {

		var oOperator = sOperator && FilterOperatorUtil.getOperator(sOperator);

		if (!oOperator || !oOperator.valueTypes[0]) {
			return "XL8 L8 M8 S0";
		} else {
			return "";
		}

	}

	function _getSpanForOperator(aConditions) {
		var oFormatOptions = this.getFormatOptions();
		var iMaxConditions = oFormatOptions.hasOwnProperty("maxConditions") ? oFormatOptions.maxConditions : -1;
		var sSpan = "XL3 L3 M3 ";

		if (iMaxConditions === 1) {
			sSpan += "S12";
		} else {
			sSpan += "S10";
		}
		return sSpan;
	}

	function _getSpanForValue(oCondition) {
		var oFormatOptions = this.getFormatOptions();
		var iMaxConditions = oFormatOptions.hasOwnProperty("maxConditions") ? oFormatOptions.maxConditions : -1;

		var oOperator = oCondition && FilterOperatorUtil.getOperator(oCondition.operator);
		var sSpan = "";

		if (oOperator && oOperator.valueTypes[1]) {
			sSpan = "XL4 L4 M4 ";
		} else {
			sSpan = "XL8 L8 M8 ";
		}

		if (iMaxConditions === 1) {
			sSpan += "S12";
		} else {
			sSpan += "S10";
		}
		return sSpan;
	}

	function _getPlaceholder1ForOperator(sOperator) {

		var oOperator = sOperator && FilterOperatorUtil.getOperator(sOperator);

		if (oOperator && oOperator.aLabels) {
			return oOperator.aLabels[0];
		} else if (oOperator && oOperator.valueTypes[1]) {
			return oMessageBundle.getText("valuehelp.DEFINECONDITIONS_FROM");
		} else {
			return oMessageBundle.getText("valuehelp.DEFINECONDITIONS_VALUE");
		}

	}

	function _getPlaceholder2ForOperator(sOperator) {

		var oOperator = sOperator && FilterOperatorUtil.getOperator(sOperator);

		if (oOperator && oOperator.aLabels) {
			return oOperator.aLabels[1];
		} else if (oOperator && oOperator.valueTypes[1]) {
			return oMessageBundle.getText("valuehelp.DEFINECONDITIONS_TO");
		}
	}

	function _updateRow(oCondition, oGrid, iIndex, oBindingContext, iRow) {

		var sIdPrefix = this.getId() + "--" + iRow;
		var aGridContent = oGrid.getContent();
		var oNullableType;

		var oOperatorField = aGridContent[iIndex];
		oOperatorField.setBindingContext(oBindingContext, "$this");
		if (oBindingContext) {
			oOperatorField.setFieldGroupIds([oBindingContext.getPath()]); // use path to have a ID for every condition
		}
		iIndex++;

		var oRemoveButton = aGridContent[iIndex];
		oRemoveButton.setBindingContext(oBindingContext, "$this");
		if (oBindingContext) {
			// as Button is between Operatot and Value don't trigger validation on tabbing between
			oRemoveButton.setFieldGroupIds([oBindingContext.getPath()]); // use path to have a ID for every condition
		}
		iIndex++;

		var oValueBindingContext;
		var oValue0Field = aGridContent[iIndex];
		var oValue1Field;
		if (oValue0Field.hasOwnProperty("_iValueIndex") && oValue0Field._iValueIndex === 0) {
			var sEditMode = _getEditModeFromOperator(oCondition.operator);
			if (oCondition.values.length > 0 || sEditMode === EditMode.Display) { // as static text for display controls is created after update
				oValueBindingContext = this._oManagedObjectModel.getContext(oBindingContext.getPath() + "values/0/");
				oValue0Field.setBindingContext(oValueBindingContext, "$this");
				oValue0Field.setBindingContext(oBindingContext, "$condition");
				if (oValue0Field.getMetadata().hasProperty("value") && (this._bUpdateType || !oValue0Field.getBindingInfo("value"))) {
					oNullableType = _getFieldType.call(this, oCondition.operator, 0);
					// change type for binding
					oValue0Field.bindProperty("value", {path: "$this>", type: oNullableType});
				}
				iIndex++;

				// value[1] only possible if value[0] exist
				oValue1Field = aGridContent[iIndex];
				if (oValue1Field.hasOwnProperty("_iValueIndex") && oValue1Field._iValueIndex === 1) {
					if (oCondition.values.length > 1) {
						oValueBindingContext = this._oManagedObjectModel.getContext(oBindingContext.getPath() + "values/1/");
						oValue1Field.setBindingContext(oValueBindingContext, "$this");
						if (oValue1Field.getMetadata().hasProperty("value") && (this._bUpdateType || !oValue1Field.getBindingInfo("value"))) {
							oNullableType = _getFieldType.call(this, oCondition.operator, 1);
							// change type for binding
							oValue1Field.bindProperty("value", {path: "$this>", type: oNullableType});
						}
						iIndex++;
					} else {
						oValue1Field.destroy();
					}
				} else if (oCondition.values.length > 1) {
					// insert new field
					oValue1Field = _createControl.call(this, oCondition, 1, sIdPrefix + "-values1", oBindingContext);
					if (oValue1Field) {
						oGrid.insertContent(oValue1Field, iIndex);
						iIndex++;
					}
				}
			} else {
				oValue0Field.destroy();
				oValue0Field = undefined;
				oValue1Field = aGridContent[iIndex + 1];
				if (oValue1Field && oValue1Field.hasOwnProperty("_iValueIndex") && oValue1Field._iValueIndex === 1) {
					oValue1Field.destroy();
				}
			}
		} else if (oCondition.values.length > 0) {
			for (var i = 0; i < oCondition.values.length; i++) {
				var oControl = _createControl.call(this, oCondition, i, sIdPrefix + "-values" + i, oBindingContext);
				if (oControl) {
					oGrid.insertContent(oControl, iIndex);
					iIndex++;
				}
			}
		}

		aGridContent = oGrid.getContent(); // as field might be added or removed
		var oRemoveButton2 = aGridContent[iIndex];
		oRemoveButton2.setBindingContext(oBindingContext, "$this");
		iIndex++;

		return iIndex;

	}

	function _validateFieldGroup(oEvent) {

		// TODO: can there be FieldGroups set from outside?
		var oField = oEvent.getSource();
		while (!(oField.getParent() instanceof Grid)) {
			// event might be fired on inner control -> find Field
			oField = oField.getParent();
		}

		_validateCondition.call(this, oField);

	}

	function _validateCondition(oField) {

		var oGrid = oField.getParent();
		var iIndex = oGrid.indexOfContent(oField);
		var oBindingContext;

		if (oField.getId().endsWith("-operator")) {
			// operator field - use first value field fo validate
			oBindingContext = oField.getBindingContext("$this");
			iIndex = iIndex + 2; // as remove button is between operator an value field
			oField = oGrid.getContent()[iIndex];
		} else {
			oBindingContext = oField.getBindingContext("$condition");
		}

		var oField2; // also update second Field if exist
		var oCondition = oBindingContext.getObject();
		var oOperator = FilterOperatorUtil.getOperator(oCondition.operator);

		if (oOperator.valueTypes.length > 0 && oOperator.valueTypes[0] !== Operator.ValueType.Static) {
			// check only not static operators
			if (oOperator.valueTypes.length > 1 && oOperator.valueTypes[1]) {
				// two fields exist
				if (oField.hasOwnProperty("_iValueIndex") && oField._iValueIndex === 0) {
					oField2 = oGrid.getContent()[iIndex + 1];
				} else if (oField.hasOwnProperty("_iValueIndex") && oField._iValueIndex === 1) {
					oField2 = oGrid.getContent()[iIndex - 1];
				}
			}

			if (oField.getMetadata().getAllProperties().valueState && !oField._bParseError && (!oField2 || !oField2._bParseError)) { // TODO: better was to find out parsing error
				// if Field is in parsing error state, user entry is not transfered to condition, so validating makes no sense.
				try {
					oOperator.validate(oCondition.values, _getType.call(this));
					oField.setValueState(ValueState.None);
					oField.setValueStateText();
					if (oField2 && oField2.getMetadata().getAllProperties().valueState) {
						oField2.setValueState(ValueState.None);
						oField2.setValueStateText();
					}
				} catch (oException) {
					oField.setValueState(ValueState.Error);
					oField.setValueStateText(oException.message);
					if (oField2 && oField2.getMetadata().getAllProperties().valueState) {
						oField2.setValueState(ValueState.Error);
						oField2.setValueStateText(oException.message);
					}
				}
			}

		}

	}

	return DefineConditionPanel;

});