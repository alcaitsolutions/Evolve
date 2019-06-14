const app = require("tns-core-modules/application");

const SupportCenterViewModel = require("./supportCenter-view-model");

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new SupportCenterViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
