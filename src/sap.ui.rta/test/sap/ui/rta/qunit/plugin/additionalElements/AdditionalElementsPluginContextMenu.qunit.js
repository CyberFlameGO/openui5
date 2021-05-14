/*global QUnit*/

sap.ui.define([
	"sap/ui/rta/plugin/additionalElements/AdditionalElementsPlugin",
	"sap/ui/rta/plugin/additionalElements/AdditionalElementsAnalyzer",
	"sap/ui/rta/plugin/additionalElements/AddElementsDialog",
	"sap/ui/rta/command/CommandFactory",
	"sap/ui/thirdparty/sinon-4"
], function(
	AdditionalElementsPlugin,
	AdditionalElementsAnalyzer,
	AddElementsDialog,
	CommandFactory,
	sinon
) {
	"use strict";

	var sandbox = sinon.sandbox.create();

	/**
	 * Tests related to the context menu items
	 * created by the AdditionalElements Plugin
	 */

	QUnit.module("Given the method 'getMenuItems' is called on the AdditionalElements Plugin", {
		beforeEach: function() {
			this.oDialog = new AddElementsDialog();

			this.oPlugin = new AdditionalElementsPlugin({
				analyzer: AdditionalElementsAnalyzer,
				dialog: this.oDialog,
				commandFactory: new CommandFactory()
			});
		},
		afterEach: function() {
			this.oDialog.destroy();
			this.oPlugin.destroy();
			sandbox.restore();
		}
	}, function () {
		QUnit.test("when there are only siblings", function(assert) {
			var sExpectedContextMenuText = "CONTEXT_MENU_TEXT";
			var iExpectedRank = 20;
			var sExpectedIcon = "sap-icon://add";
			var sAggregationName = "DummyAggregation";

			var oDummyOverlay = {
				getParentElementOverlay: function() {
					return {
						getDesignTimeMetadata: function() {
							return {
								getAggregationDisplayName: function() {
									return {
										singular: sExpectedContextMenuText
									};
								}
							};
						}
					};
				}
			};

			var aElementOverlays = [oDummyOverlay];

			// "getAllElements" returns only elements for the call with isSibling = true
			sandbox.stub(this.oPlugin, "getAllElements").callsFake(function(bIsSibling) {
				var aElementsArray = [];
				if (bIsSibling) {
					aElementsArray = [{
						aggregation: sAggregationName,
						elements: [
							{elementId: "DummyElement"}
						]
					}];
				}
				return Promise.resolve(aElementsArray);
			});

			sandbox.stub(this.oPlugin, "isAvailable").returnsArg(0);

			var oIsEnabledStub = sandbox.stub(this.oPlugin, "isEnabled");

			sandbox.stub(this.oPlugin, "getContextMenuTitle").returns(sExpectedContextMenuText);
			sandbox.stub(this.oPlugin, "enhanceItemWithResponsibleElement").returnsArg(0);

			var oShowAvailableElementsStub = sandbox.stub(this.oPlugin, "showAvailableElements");

			return this.oPlugin.getMenuItems(aElementOverlays).then(function(aMenuItems) {
				assert.strictEqual(aMenuItems.length, 1, "then only one menu item is returned");
				var oMenuItem = aMenuItems[0];
				assert.strictEqual(oMenuItem.id, "CTX_ADD_ELEMENTS_AS_SIBLING", "then the entry is for sibling");
				assert.strictEqual(oMenuItem.text(), sExpectedContextMenuText, "then the expected text is returned");
				assert.strictEqual(oMenuItem.rank, iExpectedRank, "then the rank is correct");
				assert.strictEqual(oMenuItem.icon, sExpectedIcon, "then the icon is correct");
				oMenuItem.enabled();
				assert.ok(oIsEnabledStub.calledWith(true, aElementOverlays), "isEnabled is called with the right parameters");
				oMenuItem.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(true, sAggregationName, aElementOverlays), "showAvailableElements is called with the right parameters");
				assert.notOk(oMenuItem.submenu, "then the entry has no submenu");
			});
		});

		QUnit.test("when there are only children from the same aggregation", function(assert) {
			var sExpectedContextMenuText = "CONTEXT_MENU_TEXT";
			var iExpectedRank = 20;
			var sExpectedIcon = "sap-icon://add";
			var sAggregationName = "DummyAggregation";

			var oDummyOverlay = {
				getDesignTimeMetadata: function() {
					return {
						getAggregationDisplayName: function() {
							return {
								singular: sExpectedContextMenuText
							};
						}
					};
				},
				getElement: function() {
					return "DummyElement";
				}
			};

			var aElementOverlays = [oDummyOverlay];

			// "getAllElements" returns only elements for the call with isSibling = false
			sandbox.stub(this.oPlugin, "getAllElements").callsFake(function(bIsSibling) {
				var aElementsArray = [];
				if (!bIsSibling) {
					aElementsArray = [
						{
							aggregation: sAggregationName,
							elements: [
								{elementId: "DummyElement"},
								{elementId: "DummyElement2"}
							]
						}
					];
				}
				return Promise.resolve(aElementsArray);
			});

			sandbox.stub(this.oPlugin, "isAvailable").callsFake(function(bIsSibling) {
				return !bIsSibling;
			});

			var oIsEnabledStub = sandbox.stub(this.oPlugin, "isEnabled");

			sandbox.stub(this.oPlugin, "getContextMenuTitle").returns(sExpectedContextMenuText);
			sandbox.stub(this.oPlugin, "enhanceItemWithResponsibleElement").returnsArg(0);

			var oShowAvailableElementsStub = sandbox.stub(this.oPlugin, "showAvailableElements");

			return this.oPlugin.getMenuItems(aElementOverlays).then(function(aMenuItems) {
				assert.strictEqual(aMenuItems.length, 1, "then only one menu item is returned");
				var oMenuItem = aMenuItems[0];
				assert.strictEqual(oMenuItem.id, "CTX_ADD_ELEMENTS_AS_CHILD", "then the entry is for child");
				assert.strictEqual(oMenuItem.text(), sExpectedContextMenuText, "then the expected text is returned");
				assert.strictEqual(oMenuItem.rank, iExpectedRank, "then the rank is correct");
				assert.strictEqual(oMenuItem.icon, sExpectedIcon, "then the icon is correct");
				oMenuItem.enabled();
				assert.ok(oIsEnabledStub.calledWith(false, aElementOverlays), "isEnabled is called with the correct parameters");
				oMenuItem.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sAggregationName, aElementOverlays), "showAvailableElements is called with the correct parameters");
				assert.notOk(oMenuItem.submenu, "then the entry has no submenu");
			});
		});

		QUnit.test("when there are children from the same aggregation and siblings", function(assert) {
			var sExpectedContextMenuText = "Add to...";
			var sExpectedContextMenuTextSibling = "CONTEXT_MENU_TEXT_SIBLING";
			var sExpectedContextMenuTextChild = "CONTEXT_MENU_TEXT_CHILD";
			var iExpectedRank = 20;
			var sExpectedIcon = "sap-icon://add";
			var sChildAggregationName = "ChildAggregationName";
			var sSiblingAggregationName = "SiblingAggregationName";

			var oDummyOverlay = {
				getParentElementOverlay: function() {
					return {
						getDesignTimeMetadata: function() {
							return {
								getAggregationDisplayName: function() {
									return {
										singular: sExpectedContextMenuTextSibling
									};
								}
							};
						},
						getElement: function() {
							return "DummyElement";
						}
					};
				},
				getDesignTimeMetadata: function() {
					return {
						getAggregationDisplayName: function() {
							return {
								singular: sExpectedContextMenuTextChild
							};
						}
					};
				},
				getElement: function() {
					return "DummyElement";
				}
			};

			var aElementOverlays = [oDummyOverlay];

			// "getAllElements" returns elements for the call with isSibling = false and true
			sandbox.stub(this.oPlugin, "getAllElements").callsFake(function(bIsSibling) {
				var aElementsArray = [];
				if (bIsSibling) {
					aElementsArray = [{
						aggregation: sSiblingAggregationName,
						elements: [
							{elementId: "DummySiblingElement"}
						]
					}];
				} else {
					aElementsArray = [{
						aggregation: sChildAggregationName,
						elements: [
							{elementId: "DummyChildElement"}
						]
					}];
				}
				return Promise.resolve(aElementsArray);
			});

			sandbox.stub(this.oPlugin, "isAvailable").returns(true);

			var oIsEnabledStub = sandbox.stub(this.oPlugin, "isEnabled");

			sandbox.stub(this.oPlugin, "getContextMenuTitle").returns(sExpectedContextMenuText);
			sandbox.stub(this.oPlugin, "enhanceItemWithResponsibleElement").returnsArg(0);

			var oShowAvailableElementsStub = sandbox.stub(this.oPlugin, "showAvailableElements");

			return this.oPlugin.getMenuItems(aElementOverlays).then(function(aMenuItems) {
				assert.strictEqual(aMenuItems.length, 1, "then only one menu item is returned");
				var oMenuItem = aMenuItems[0];
				assert.strictEqual(oMenuItem.id, "CTX_ADD_ELEMENTS_CHILD_AND_SIBLING", "then the entry is for sibling and child");
				assert.strictEqual(oMenuItem.text(), sExpectedContextMenuText, "then the expected text is returned");
				assert.strictEqual(oMenuItem.rank, iExpectedRank, "then the rank is correct");
				assert.strictEqual(oMenuItem.icon, sExpectedIcon, "then the icon is correct");
				assert.notOk(oMenuItem.handler, "then there is no handler assigned to the menu item (handlers are only on submenu)");
				assert.ok(oMenuItem.enabled, "then the menu item is enabled");
				assert.ok(oMenuItem.submenu, "then there is a submenu");
				var aSubMenuItems = oMenuItem.submenu;
				var oSubMenuItemChild = aSubMenuItems[0];
				assert.strictEqual(oSubMenuItemChild.id, "CTX_ADD_ELEMENTS_AS_CHILD_0", "then the first submenu entry id is for the child");
				assert.strictEqual(oSubMenuItemChild.text, sExpectedContextMenuTextChild, "then the aggregation name is the entry text");
				oSubMenuItemChild.enabled();
				assert.ok(oIsEnabledStub.calledWith(false, aElementOverlays), "then isEnabled is called for children with the right parameters");
				oSubMenuItemChild.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sChildAggregationName, aElementOverlays), "then showAvailableElements is called as handler for children");
				var oSubMenuItemSibling = aSubMenuItems[1];
				assert.strictEqual(oSubMenuItemSibling.id, "CTX_ADD_ELEMENTS_AS_SIBLING_0", "then the second submenu entry id is for the child");
				assert.strictEqual(oSubMenuItemSibling.text, sExpectedContextMenuTextSibling, "then the aggregation name is the entry text");
				oSubMenuItemSibling.enabled();
				assert.ok(oIsEnabledStub.calledWith(true, aElementOverlays), "then isEnabled is called for sibling with the right parameters");
				oSubMenuItemSibling.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(true, sSiblingAggregationName, aElementOverlays), "then showAvailableElements is called for sibling with the right parameters");
			});
		});

		QUnit.test("when there are children from different aggregations", function(assert) {
			var sExpectedContextMenuText = "Add to...";
			var sExpectedContextMenuTextChild = "CONTEXT_MENU_TEXT_CHILD";
			var sFirstChildAggregationName = "childAggregationName";
			var sSecondChildAggregationName = "childAggregationName2";
			var iExpectedRank = 20;
			var sExpectedIcon = "sap-icon://add";

			var oDummyOverlay = {
				getDesignTimeMetadata: function() {
					return {
						getAggregationDisplayName: function() {
							return {
								singular: sExpectedContextMenuTextChild
							};
						}
					};
				},
				getElement: function() {
					return "DummyElement";
				}
			};

			var aElementOverlays = [oDummyOverlay];

			// "getAllElements" returns elements for the call with isSibling = false for different aggregations
			sandbox.stub(this.oPlugin, "getAllElements").callsFake(function(bIsSibling) {
				var aElementsArray = [];
				if (!bIsSibling) {
					aElementsArray = [{
						aggregation: sFirstChildAggregationName,
						elements: [
							{elementId: "DummyChildElement"}
						]
					}, {
						aggregation: sSecondChildAggregationName,
						elements: [
							{elementId: "DummyChildElement2"}
						]
					}];
				}
				return Promise.resolve(aElementsArray);
			});

			sandbox.stub(this.oPlugin, "isAvailable").callsFake(function(bIsSibling) {
				return !bIsSibling;
			});

			var oIsEnabledStub = sandbox.stub(this.oPlugin, "isEnabled");

			sandbox.stub(this.oPlugin, "getContextMenuTitle").returns(sExpectedContextMenuText);
			sandbox.stub(this.oPlugin, "enhanceItemWithResponsibleElement").returnsArg(0);

			var oShowAvailableElementsStub = sandbox.stub(this.oPlugin, "showAvailableElements");

			return this.oPlugin.getMenuItems(aElementOverlays).then(function(aMenuItems) {
				assert.strictEqual(aMenuItems.length, 1, "then only one menu item is returned");
				var oMenuItem = aMenuItems[0];
				assert.strictEqual(oMenuItem.id, "CTX_ADD_ELEMENTS_AS_CHILD", "then the entry is for sibling and child");
				assert.strictEqual(oMenuItem.text(), sExpectedContextMenuText, "then the expected text is returned");
				assert.strictEqual(oMenuItem.rank, iExpectedRank, "then the rank is correct");
				assert.strictEqual(oMenuItem.icon, sExpectedIcon, "then the icon is correct");
				assert.notOk(oMenuItem.handler, "then there is no handler assigned to the menu item (handlers are only on submenu)");
				assert.ok(oMenuItem.enabled, "then the menu item is enabled");
				assert.ok(oMenuItem.submenu, "then there is a submenu");
				var aSubMenuItems = oMenuItem.submenu;
				var oSubMenuItemChild = aSubMenuItems[0];
				assert.strictEqual(oSubMenuItemChild.id, "CTX_ADD_ELEMENTS_AS_CHILD_0", "then the first submenu entry id is for the child");
				assert.strictEqual(oSubMenuItemChild.text, sExpectedContextMenuTextChild, "then the aggregation name is the entry text");
				oSubMenuItemChild.enabled();
				assert.ok(oIsEnabledStub.calledWith(false, aElementOverlays), "then isEnabled is called with the right parameters");
				oSubMenuItemChild.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sFirstChildAggregationName, aElementOverlays), "then showAvailableElements is called with the right parameters");
				var oSubMenuItemChildSecondAggregation = aSubMenuItems[1];
				assert.strictEqual(oSubMenuItemChildSecondAggregation.id, "CTX_ADD_ELEMENTS_AS_CHILD_1", "then the second submenu entry id is for the child");
				assert.strictEqual(oSubMenuItemChildSecondAggregation.text, sExpectedContextMenuTextChild, "then the aggregation name is the entry text");
				oSubMenuItemChildSecondAggregation.enabled();
				assert.ok(oIsEnabledStub.calledWith(false, aElementOverlays), "then isEnabled is called with the right parameters");
				oSubMenuItemChildSecondAggregation.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sSecondChildAggregationName, aElementOverlays), "then showAvailableElements is called with the right parameters");
			});
		});

		QUnit.test("when there are children from multiple aggregations and siblings", function(assert) {
			var sExpectedContextMenuText = "Add to...";
			var sExpectedContextMenuTextSibling = "CONTEXT_MENU_TEXT_SIBLING";
			var sExpectedContextMenuTextChild = "CONTEXT_MENU_TEXT_CHILD";
			var sSiblingAggregationName = "SiblingAggregation";
			var sFirstChildAggregationName = "FirstChildAggregation";
			var sSecondChildAggregationName = "SecondChildAggregation";
			var iExpectedRank = 20;
			var sExpectedIcon = "sap-icon://add";

			var oDummyOverlay = {
				getParentElementOverlay: function() {
					return {
						getDesignTimeMetadata: function() {
							return {
								getAggregationDisplayName: function() {
									return {
										singular: sExpectedContextMenuTextSibling
									};
								}
							};
						},
						getElement: function() {
							return "DummyElement";
						}
					};
				},
				getDesignTimeMetadata: function() {
					return {
						getAggregationDisplayName: function() {
							return {
								singular: sExpectedContextMenuTextChild
							};
						}
					};
				},
				getElement: function() {
					return "DummyElement";
				}
			};

			var aElementOverlays = [oDummyOverlay];

			// "getAllElements" returns elements for siblings and multiple child aggregations
			sandbox.stub(this.oPlugin, "getAllElements").callsFake(function(bIsSibling) {
				var aElementsArray = [];
				if (bIsSibling) {
					aElementsArray = [{
						aggregation: sSiblingAggregationName,
						elements: [
							{elementId: "DummySiblingElement"}
						]
					}];
				} else {
					aElementsArray = [{
						aggregation: sFirstChildAggregationName,
						elements: [
							{elementId: "DummyChildElement"}
						]
					}, {
						aggregation: sSecondChildAggregationName,
						elements: [
							{elementId: "DummyChildElement2"}
						]
					}];
				}
				return Promise.resolve(aElementsArray);
			});

			sandbox.stub(this.oPlugin, "isAvailable").returns(true);
			var oIsEnabledStub = sandbox.stub(this.oPlugin, "isEnabled");

			sandbox.stub(this.oPlugin, "getContextMenuTitle").returns(sExpectedContextMenuText);
			sandbox.stub(this.oPlugin, "enhanceItemWithResponsibleElement").returnsArg(0);

			var oShowAvailableElementsStub = sandbox.stub(this.oPlugin, "showAvailableElements");

			return this.oPlugin.getMenuItems(aElementOverlays).then(function(aMenuItems) {
				assert.strictEqual(aMenuItems.length, 1, "then only one menu item is returned");
				var oMenuItem = aMenuItems[0];
				assert.strictEqual(oMenuItem.id, "CTX_ADD_ELEMENTS_CHILD_AND_SIBLING", "then the entry is for sibling and child");
				assert.strictEqual(oMenuItem.text(), sExpectedContextMenuText, "then the expected text is returned");
				assert.strictEqual(oMenuItem.rank, iExpectedRank, "then the rank is correct");
				assert.strictEqual(oMenuItem.icon, sExpectedIcon, "then the icon is correct");
				assert.notOk(oMenuItem.handler, "then there is no handler assigned to the menu item (handlers are only on submenu)");
				assert.ok(oMenuItem.enabled, "then the menu item is enabled");
				assert.ok(oMenuItem.submenu, "then there is a submenu");
				var aSubMenuItems = oMenuItem.submenu;
				var oSubMenuItemChild = aSubMenuItems[0];
				assert.strictEqual(oSubMenuItemChild.id, "CTX_ADD_ELEMENTS_AS_CHILD_0", "then the first submenu entry id is for the child of the first aggregation");
				assert.strictEqual(oSubMenuItemChild.text, sExpectedContextMenuTextChild, "then the aggregation name is the entry text");
				oSubMenuItemChild.enabled();
				assert.ok(oIsEnabledStub.calledWith(false, aElementOverlays), "then isEnabled is called for the child aggregation");
				oSubMenuItemChild.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sFirstChildAggregationName, aElementOverlays), "then showAvailableElements is called for the first child aggregation");
				var oSubMenuItemChild2 = aSubMenuItems[1];
				assert.strictEqual(oSubMenuItemChild2.id, "CTX_ADD_ELEMENTS_AS_CHILD_1", "then the second submenu entry id is for the child of the second aggregation");
				assert.strictEqual(oSubMenuItemChild2.text, sExpectedContextMenuTextChild, "then the aggregation name is the entry text");
				oSubMenuItemChild2.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(false, sSecondChildAggregationName, aElementOverlays), "then showAvailableElements is called for the second child aggregation");
				var oSubMenuItemSibling = aSubMenuItems[2];
				assert.strictEqual(oSubMenuItemSibling.id, "CTX_ADD_ELEMENTS_AS_SIBLING_0", "then the third submenu entry id is for the sibling");
				assert.strictEqual(oSubMenuItemSibling.text, sExpectedContextMenuTextSibling, "then the aggregation name is the entry text");
				oSubMenuItemSibling.enabled();
				assert.ok(oIsEnabledStub.calledWith(true, aElementOverlays), "then isEnabled is called for the child aggregation");
				oSubMenuItemSibling.handler();
				assert.ok(oShowAvailableElementsStub.calledWith(true, sSiblingAggregationName, aElementOverlays), "then showAvailableElements is called for the sibling aggregation");
			});
		});
	});

	QUnit.done(function () {
		jQuery("#qunit-fixture").hide();
	});
});