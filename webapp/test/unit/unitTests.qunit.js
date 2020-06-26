/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/GIT/test/GIT_Testing/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});