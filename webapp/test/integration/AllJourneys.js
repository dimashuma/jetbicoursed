/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/test/test/integration/pages/Worklist",
	"zjblessons/test/test/integration/pages/Object",
	"zjblessons/test/test/integration/pages/NotFound",
	"zjblessons/test/test/integration/pages/Browser",
	"zjblessons/test/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.test.view."
	});

	sap.ui.require([
		"zjblessons/test/test/integration/WorklistJourney",
		"zjblessons/test/test/integration/ObjectJourney",
		"zjblessons/test/test/integration/NavigationJourney",
		"zjblessons/test/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});