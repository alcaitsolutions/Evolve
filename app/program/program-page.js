const app = require("tns-core-modules/application");

const ProgramViewModel = require("./program-view-model");
const Video = require('~/nativescript-videoplayer');

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    const username = config.displayName;
    console.log("COming from SESSION: " + config.displayName);
    page.bindingContext = new ProgramViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}



exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
