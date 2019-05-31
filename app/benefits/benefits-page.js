const app = require("tns-core-modules/application");

const BenefitsViewModel = require("./benefits-view-model");

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    console.log("COming from SESSION: " + config.displayName);
    page.bindingContext = new BenefitsViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
