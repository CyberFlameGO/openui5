/*
 * ! ${copyright}
 */

sap.ui.define([
	'sap/ui/mdc/util/loadModules',
	'sap/ui/mdc/valuehelp/base/ListContent',
	'sap/ui/mdc/condition/Condition',
	'sap/ui/mdc/condition/FilterConverter',
	'sap/ui/mdc/enum/ConditionValidated',
	'sap/ui/model/FilterType',
	'sap/base/Log',
	'sap/base/util/deepEqual',
	'sap/ui/mdc/util/Common',
	'sap/ui/base/ManagedObjectObserver',
	'sap/ui/model/base/ManagedObjectModel',
	'sap/m/MessageToast'
], function(
	loadModules,
	ListContent,
	Condition,
	FilterConverter,
	ConditionValidated,
	FilterType,
	Log,
	deepEqual,
	Common,
	ManagedObjectObserver,
	ManagedObjectModel,
	MessageToast
) {
	"use strict";

	var FilterableListContent = ListContent.extend("sap.ui.mdc.valuehelp.base.FilterableListContent", /** @lends sap.ui.mdc.valuehelp.base.FilterableListContent.prototype */
	{
		metadata: {
			library: "sap.ui.mdc",
			properties:	{
				/**
				 * The fields based on which the table data is filtered. For filtering the value of the <code>filterValue</code> property is used.
				 *
				 * If set to <code>$search</code> and the used binding supports search requests, a $search request is used for filtering.
				 *
				 * If set to one or more properties, the filters for these properties are used for filtering.
				 * These filters are set on the <code>ListBinding</code> used.
				 * The properties need to be separated by commas and enclosed by "*" characters. (<code>"*Property1,Property2*"</code>)
				 *
				 * If it is empty, no suggestion is available.
				 */
				filterFields: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * The path of the key field in the content binding.
				 * If a table is used as content, this is the binding path of the key of the items.
				 *
				 * If not set, the FieldPath of the assigned field is used.
				 */
				keyPath: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * The path of the description field in the content binding.
				 * If a table is used as content, this is the binding path of the description of the items.
				 */
				descriptionPath: {
					type: "string",
					defaultValue: ""
				},
				/**
				 * Internal property to allow to bind the conditions created by InParameters to content
				 */
				_inConditions: {
					type: "object",
					defaultValue: {},
					byValue: true//,
					//visibility: "hidden"
				},
				/**
				 * Internal property to allow to bind the paths used by OutParameters to content
				 */
				_outParameters: {
					type: "string[]",
					defaultValue: [],
					byValue: true//,
					//visibility: "hidden"
				}
			},
			aggregations: {
				collectiveSearchItems: {
					type: "sap.ui.core.Item",
					multiple: true,
					singularName : "collectiveSearchItem"
				},
				filterBar: {
					type: "sap.ui.mdc.filterbar.FilterBarBase",
					multiple: false
				},
				_defaultFilterBar: {
					type: "sap.ui.mdc.filterbar.FilterBarBase",
					multiple: false
				}
			},
			events: {
			}
		}
	});

	FilterableListContent.prototype.init = function() {

		ListContent.prototype.init.apply(this, arguments);

		this._oObserver.observe(this, {
			aggregations: ["_defaultFilterBar", "filterBar"],
			properties: ["_inConditions"]
		});

		this.bindProperty("_inConditions", { path: "/_inConditions", model: "$valueHelp"}); // inherit from ValueHelp
		this.bindProperty("_outParameters", { path: "/_outParameters", model: "$valueHelp"}); // inherit from ValueHelp
	};

	FilterableListContent.prototype._handleFilterValueUpdate = function (oChanges) {
		_addFilterValueToFilterBar.call(this, this._getPriorityFilterBar(), oChanges.current);
		this.applyFilters(oChanges.current);
	};

	FilterableListContent.prototype.applyFilters = function (sSearch) {

	};


	FilterableListContent.prototype._prettyPrintFilters = function (oFilter) {

		var sRes;
		if (!oFilter) {
			return "";
		}
		if (Array.isArray(oFilter)) {
			sRes = "";
			oFilter.forEach(function(oFilter, iIndex, aFilters) {
				sRes += this._prettyPrintFilters(oFilter);
				if (aFilters.length - 1 != iIndex) {
					sRes += " or ";
				}
			}, this);
			return "(" + sRes + ")";
		} else if (oFilter._bMultiFilter) {
			sRes = "";
			var bAnd = oFilter.bAnd;
			oFilter.aFilters.forEach(function(oFilter, iIndex, aFilters) {
				sRes += this._prettyPrintFilters(oFilter);
				if (aFilters.length - 1 != iIndex) {
					sRes += bAnd ? " and " : " or ";
				}
			}, this);
			return "(" + sRes + ")";
		} else {
			sRes = oFilter.sPath + " " + oFilter.sOperator + " '" + oFilter.oValue1 + "'";
			if (oFilter.sOperator === "BT") {
				sRes += "...'" + oFilter.oValue2 + "'";
			}
			return sRes;
		}
	};

	FilterableListContent.prototype._getItemFromContext = function (oBindingContext, oOptions) {

		var sKeyPath = (oOptions && oOptions.keyPath) || this.getKeyPath();
		var sDescriptionPath = (oOptions && oOptions.descriptionPath) || this.getDescriptionPath();
		var vKey;
		var sDescription;

		if (!sKeyPath) {
			throw new Error("KeyPath missing"); // as we cannot determine key without keyPath
		}

		var aInParameters = oOptions && oOptions.inParameters || [];
		if (aInParameters.length === 0) {
			for ( var sPath in this.getProperty("_inConditions")) {
				aInParameters.push(sPath);
			}
		}

		var aOutParameters = oOptions && oOptions.outParameters || this.getProperty("_outParameters");
		var oInParameters = aInParameters.length > 0 ? {} : null;
		var oOutParameters = aOutParameters.length > 0 ? {} : null;
		var sPath;

		if (oBindingContext) {
			vKey = sKeyPath ? oBindingContext.getProperty(sKeyPath) : undefined;
			sDescription = sDescriptionPath ? oBindingContext.getProperty(sDescriptionPath) : undefined;
			var i = 0;
			for (i = 0; i < aInParameters.length; i++) {
				sPath = aInParameters[i];
				oInParameters[sPath] = oBindingContext.getProperty(sPath);
			}
			for (i = 0; i < aOutParameters.length; i++) {
				sPath = aOutParameters[i];
				oOutParameters[sPath] = oBindingContext.getProperty(sPath);
			}
		}

		if (vKey === null || vKey === undefined) {
			return false;
		}

		return {key: vKey, description: sDescription, inParameters: oInParameters, outParameters: oOutParameters};
	};

	FilterableListContent.prototype._isItemSelected = function (oItem, aConditions) {

		var oContext = oItem && oItem.getBindingContext();
		var oItemData = this._getItemFromContext(oContext);

		for (var i = 0; i < aConditions.length; i++) {
			var oCondition = aConditions[i];
			if (oCondition.validated === ConditionValidated.Validated && oItemData.key === oCondition.values[0]) { // TODO: check for specific EQ operator
				//check for inParameters and outParameters
				if (oCondition.inParameters && oItemData.inParameters && !deepEqual(oCondition.inParameters, oItemData.inParameters)) {
					continue;
				}
				if (oCondition.outParameters && oItemData.outParameters && !deepEqual(oCondition.outParameters, oItemData.outParameters)) {
					continue;
				}
				return true;
			}
		}

		return false;

	};

	FilterableListContent.prototype._createDefaultFilterBar = function() {
		return loadModules([
			"sap/ui/mdc/filterbar/vh/FilterBar"
		]).then(function(aModules) {
			var FilterBar = aModules[0];
			var oFilterBar = new FilterBar(this.getId() + "-FB", {
				liveMode: false, // !oWrapper.isSuspended(), // if suspended, no live search
				showGoButton: false
			});
			this.set_defaultFilterBar(oFilterBar);
			return oFilterBar;
		}.bind(this));
	};

	FilterableListContent.prototype._assignCollectiveSearch = function(bInitializeKey) {
		bInitializeKey = typeof bInitializeKey !== "undefined" ? bInitializeKey : !this._oCollectiveSearchSelect;
		_createCollectiveSearch.call(this, bInitializeKey).then(function(oCollectiveSearchSelect) {
			var oFilterBar = this._getPriorityFilterBar();
			if (oFilterBar.setCollectiveSearch) {
				oFilterBar.setCollectiveSearch(oCollectiveSearchSelect);
			}
		}.bind(this));
	};

	function _createCollectiveSearch(bInitializeKey) {

		return loadModules([
			"sap/ui/mdc/filterbar/vh/CollectiveSearchSelect",
			"sap/ui/core/Item"
		]).then(function(aModules) {
			var CollectiveSearchSelect = aModules[0];
			var Item = aModules[1];

			_createCollectiveSearchSelect.call(this, CollectiveSearchSelect, Item);

			var aCollectiveSearchItems = this.getCollectiveSearchItems();
			if (aCollectiveSearchItems.length <= 1) {
				return null;
			} else {
				if (bInitializeKey) {
					this._oCollectiveSearchSelect.setSelectedItemKey(aCollectiveSearchItems[0].getKey());
				}
				return this._oCollectiveSearchSelect;
			}
		}.bind(this));

	}

	function _handleCollectiveSearchSelect(oEvent) {

		var sKey = oEvent.getParameter("key");
		MessageToast.show("ColSearch: " + sKey);

		this.fireRequestDelegateContent();
	}

	function _createCollectiveSearchSelect(CollectiveSearchSelect, Item) {

		if (!this._oCollectiveSearchSelect) {

			this._oObserver.observe(this, {
				properties: ["filterFields"],
				aggregations: ["collectiveSearchItems"]
			});

			this._oManagedObjectModel = new ManagedObjectModel(this);
			this.setModel(this._oManagedObjectModel, "$contenthelp");

			var oItemTemplate = new Item(this.getId() + "-collSearchItem", {
				key: "{$contenthelp>key}",
				text: "{$contenthelp>text}",
				enabled: "{$contenthelp>enabled}",
				textDirection: "{$contenthelp>textDirection}"
			});

			this._oCollectiveSearchSelect = new CollectiveSearchSelect(this.getId() + "-collSearch", {
				title: "{$i18n>COL_SEARCH_SEL_TITLE}",
				items: {path: "$contenthelp>/collectiveSearchItems", template: oItemTemplate},
				select: _handleCollectiveSearchSelect.bind(this)
			});
		}

		return this._oCollectiveSearchSelect;

	}

	FilterableListContent.prototype.onShow = function () {
		ListContent.prototype.onShow.apply(this, arguments);

		var oListBinding = this._getListBinding();
		var oListBindingInfo = this._getListBindingInfo();

		var bBindingSuspended = oListBinding && oListBinding.isSuspended();
		var bBindingWillBeSuspended = !oListBinding && oListBindingInfo && oListBindingInfo.suspended;

		if (bBindingSuspended || bBindingWillBeSuspended) {
			return;
		}

		this.applyFilters(this.get_filterValue());
	};

	FilterableListContent.prototype._formatConditions = function(aConditions) {
		// map in/outParameters to help paths

		var aInParameters = this.getModel("$valueHelp").getProperty("/inParameters");
		var aOutParameters = this.getModel("$valueHelp").getProperty("/outParameters");

		for (var i = 0; i < aConditions.length; i++) {
			var oCondition = aConditions[i];
			if (oCondition.inParameters) {
				oCondition.inParameters = _mapParametersToHelp.call(this, oCondition.inParameters, aInParameters);
			}
			if (oCondition.outParameters) {
				oCondition.outParameters = _mapParametersToHelp.call(this, oCondition.outParameters, aOutParameters);
			}
		}

		return aConditions;

	};

	function _mapParametersToHelp(oParameters, aParameters) {

		var oHelpParameters;

		if (aParameters.length > 0) {
			for (var sMyFieldPath in oParameters) {
				for (var i = 0; i < aParameters.length; i++) {
					var oParameter = aParameters[i];
					var sHelpPath = oParameter.getHelpPath();
					var sFieldPath = oParameter.getFieldPath();
					if (sFieldPath && (sFieldPath === sMyFieldPath || sFieldPath === "conditions/" + sMyFieldPath) && sHelpPath) { // support also old saved conditions without "conditions/" in name
						if (!oHelpParameters) {
							oHelpParameters = {};
						}
						oHelpParameters[sHelpPath] = oParameters[sMyFieldPath];
					}
				}
			}
		}

		return oHelpParameters;

	}

	FilterableListContent.prototype._getPriorityFilterBar = function () {
		return this.getFilterBar() || this.get_defaultFilterBar();
	};

	FilterableListContent.prototype._observeChanges = function (oChanges) {
		if (oChanges.object == this) {

			if (oChanges.name === "collectiveSearchItems") {
				this._assignCollectiveSearch(true);
			}
			if (oChanges.name === "_inConditions") {
				_addInParameterToFilterBar.call(this, this._getPriorityFilterBar(), oChanges.current);
			}

			if (["_defaultFilterBar", "filterBar"].indexOf(oChanges.name) !== -1) {
				var oFilterBar = oChanges.child;
				if (oChanges.mutation === "insert") {
					var sFilterFields =  this.getFilterFields();
					var oExistingBasicSearchField = oFilterBar.getBasicSearchField();
					if (!oExistingBasicSearchField && sFilterFields) {
						return loadModules([
							"sap/ui/mdc/FilterField"
						]).then(function (aModules){
							var FilterField = aModules[0];
							oFilterBar.setBasicSearchField(new FilterField(this.getId() + "-search", {
								conditions: "{$filters>/conditions/" + sFilterFields + "}",
								placeholder:"{$i18n>filterbar.SEARCH}",
								label:"{$i18n>filterbar.SEARCH}", // TODO: do we want a label?
								maxConditions: 1,
								width: "50%"
							}));
						}.bind(this));
					} else if (oExistingBasicSearchField) {
						oExistingBasicSearchField.setConditions([]);
					}
					this._assignCollectiveSearch();
					_addInParameterToFilterBar.call(this, oFilterBar, this.getProperty("_inConditions"));
					_addFilterValueToFilterBar.call(this, oFilterBar, this.getProperty("_filterValue"));
				}
			}
		}
		ListContent.prototype._observeChanges.apply(this, arguments);
	};

	FilterableListContent.prototype.exit = function () {

		Common.cleanup(this, [
			"_oCollectiveSearchSelect","_oManagedObjectModel"
		]);

		ListContent.prototype.exit.apply(this, arguments);
	};

	FilterableListContent.prototype.getCollectiveSearchKey = function () {
		return this._oCollectiveSearchSelect && this._oCollectiveSearchSelect.getSelectedItemKey();
	};

	FilterableListContent.prototype._getFiltersForFilterBar = function () {
		var oFilterBar = this._getPriorityFilterBar();
		var oCurrentFilterBarConditions = oFilterBar.getConditions();
		var oConditionTypes = this._getTypesForConditions(oCurrentFilterBarConditions);
		var oCreatedFBFilters = oCurrentFilterBarConditions && oConditionTypes && FilterConverter.createFilters(oCurrentFilterBarConditions, oConditionTypes, undefined, this.getCaseSensitive());
		return oCreatedFBFilters ? [].concat(oCreatedFBFilters) : [];
	};

	FilterableListContent.prototype._getListBinding = function () {
		throw new Error("FilterableListContent: Every filterable listcontent must implement this method.");
	};

	FilterableListContent.prototype._getListBindingInfo = function () {
		throw new Error("FilterableListContent: Every filterable listcontent must implement this method.");
	};

	FilterableListContent.prototype._getTypesForConditions = function (oConditions) {

		var oFilterBar = this._getPriorityFilterBar();
		var aInParameters = this.getInParameters();
		var oConditionTypes;
		var sFieldPath;

		if (oFilterBar) {
			oConditionTypes = FilterConverter.createConditionTypesMapFromFilterBar( oConditions, oFilterBar);
		} else {
			// collect condition Fieldpaths here
			oConditionTypes = {};
			for (sFieldPath in oConditions) {
				oConditionTypes[sFieldPath] = {type: null};
			}
		}

		// try to find missing type from InParameter
		for (sFieldPath in oConditionTypes) {
			if (!oConditionTypes[sFieldPath].type) {
				for (var i = 0; i < aInParameters.length; i++) {
					var oInParameter = aInParameters[i];
					if (oInParameter.getHelpPath() === sFieldPath) {
						oConditionTypes[sFieldPath].type = oInParameter.getDataType();
						break;
					}
				}
			}
		}

		return oConditionTypes;

	};

	function _addInParameterToFilterBar(oFilterBar, oInConditions) {
		if (oFilterBar) {
			// add inParameters to FilterBar
			var oConditions = oFilterBar.getInternalConditions();
			for ( var sFilterPath in oInConditions) {
				oConditions[sFilterPath] = oInConditions[sFilterPath];
			}
			oFilterBar.setInternalConditions(oConditions); // TODO: remove on hide?
		}

	}

	function _addFilterValueToFilterBar(oFilterBar, sFilterValue) {
		var sFilterFields = this.getFilterFields();

		if (oFilterBar && sFilterFields) {
			var oConditions = oFilterBar.getInternalConditions();
			var oCondition = Condition.createCondition("StartsWith", [sFilterValue], undefined, undefined, ConditionValidated.NotValidated);
			oConditions[sFilterFields] = [oCondition];
			oFilterBar.setInternalConditions(oConditions);
		}

	}

	return FilterableListContent;

});
