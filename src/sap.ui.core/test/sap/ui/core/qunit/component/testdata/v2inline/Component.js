sap.ui.define(['jquery.sap.global', 'sap/ui/core/UIComponent'],
	function(jQuery, UIComponent) {
	"use strict";


	var Component = UIComponent.extend("sap.ui.test.v2inline.Component", {

		metadata: {

			"manifest": {

				"name": "sap.ui.test.v2inline.Component",

				"sap.app": {
					"id": "sap.ui.test.v2inline",
					"applicationVersion": {
						"version": "1.0.0"
					},
					"title": "{{title}}",
					"description": "{{description}}"
				},

				"sap.ui5": {

					"resourceRoots": {
						"x.y.z": "anypath",
						"foo.bar": "../../foo/bar",
						"absolute": "http://absolute/uri",
						"server.absolute": "/server/absolute/uri"
					},

					"resources": {
						"js": [
							{
								"uri": "script.js"
							},
							{}
						],
						"css": [
							{
								"uri": "style.css",
								"id": "mystyle"
							},
							{}
						]
					},

					"dependencies": {
						"minUI5Version": "1.22.5",
						"libs": {
							"sap.ui.layout": {
								"minVersion": "1.22.0"
							}
						},
						"components": {
							"sap.ui.test.other": {
								"optional": true,
								"minVersion": "1.0.1"
							}
						}
					},

					"models": {
						"i18n": {
							"type": "sap.ui.model.resource.ResourceModel",
							"uri": "i18n/i18n.properties"
						},
						"sfapi": {
							"type": "sap.ui.model.odata.ODataModel",
							"uri": "./some/odata/service"
						}
					},

					"rootView": "sap.ui.test.view.Main",

					"config": {
						"any1": {
							"entry": "configuration"
						},
						"any2": {
							"anyobject": {
								"key1": "value1"
							}
						},
						"any3": {
							"anyarray": [1, 2, 3]
						},
						"zero": 0
					},

					"routing": {
						"config": {
							"viewType" : "XML",
							"viewPath": "NavigationWithoutMasterDetailPattern.view",
							"targetParent": "myViewId",
							"targetControl": "app",
							"targetAggregation": "pages",
							"clearTarget": false
						},
						"routes": [
							{
								"name" : "myRouteName1",
								"pattern" : "FirstView/{from}",
								"view" : "myViewId"
							}
						]
					},

					"extends": {
						"extensions": {
							"sap.ui.viewReplacements": {
								"sap.ui.test.view.Main": {
									"viewName": "sap.ui.test.view.Main",
									"type": "XML"
								}
							},
							"sap.ui.controllerReplacements": {
								"sap.ui.test.view.Main": "sap.ui.test.view.Main"
							},
							"sap.ui.viewExtensions": {
								"sap.ui.test.view.Main": {
									"extension": {
										"name": "sap.xx.new.Fragment",
										"type": "sap.ui.core.XMLFragment"
									}
								}
							},
							"sap.ui.viewModification": {
								"sap.ui.test.view.Main": {
									"myControlId": {
										"text": "{{mytext}}"
									}
								}
							}
						}
					}

				},

				"foo": {}, // getEntry is not allowed for keys without a dot
				"foo.bar": "string as entry value is not valid!"

			},

			"custom.entry": {
				"key1": "value1",
				"key2": "value2",
				"key3": {
					"subkey1": "subvalue1",
					"subkey2": "subvalue2"
				},
				"key4": ["value1", "value2"]
			}

		}

	});


	return Component;

});
