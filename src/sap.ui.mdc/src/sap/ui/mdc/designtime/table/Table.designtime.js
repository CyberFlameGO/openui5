/*
 * ! ${copyright}
 */
sap.ui.define([
	"sap/ui/mdc/p13n/Engine"
], function (Engine) {
	"use strict";

	return {
		name: "{name}",
		description: "{description}",
		aggregations: {
			_content: {
				ignore: false
			}
		},
		actions: {
			settings: function () {
				//RTA expects the settings to be returned as function
				return {
					handler: function (oControl, mPropertyBag) {
						return Engine.getInstance().getRTASettingsActionHandler(oControl, mPropertyBag, oControl.getP13nMode());
					}
				};
			}
		}
	};

});
