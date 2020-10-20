sap.ui.define([
	"sap/ui/demo/cardExplorer/controller/BaseController"
], function (
	BaseController
) {
	"use strict";

	/**
	 * Serves as base class for controllers, which show topic (.html) and use iframe.
	 */
	return BaseController.extend("sap.ui.demo.cardExplorer.controller.Topic", {

		/**
		 * Adds event listener for "bootFinished" event of the topic iframe.
		 * Only handles initial loading of the iframe.
		 */
		onFrameSourceChange: function () {
			window.addEventListener("message", function (e) {
				if (e.data === "bootFinished") {
					this._onFrameLoaded();
				}
			}.bind(this), { once: true });
		},

		_onFrameLoaded: function () {
			// sync sapUiSizeCompact with the iframe
			var sClass = this.getOwnerComponent().getContentDensityClass();
			this._getIFrame().contentDocument.body.classList.add(sClass);

			// navigate to the id in the URL
			var sCurrentHash = this.getRouter().getHashChanger().getHash();
			var oArgs = this.getRouter().getRouteInfoByHash(sCurrentHash).arguments;

			this.scrollTo(oArgs.id);
		},

		scrollTo: function (sId) {
			var oIFrame = this._getIFrame();

			if (!oIFrame || !sId) {
				return;
			}

			oIFrame.contentWindow.postMessage({
				channel: "scrollTo",
				id: sId
			}, window.location.origin);
		},

		_getIFrame: function () {
			if (this.byId("topicFrame").getDomRef()) {
				return this.byId("topicFrame").getDomRef().querySelector("iframe");
			}

			return null;
		}
	});

});