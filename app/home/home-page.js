const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");

// Load config file which handles our session data
const config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    const username = config.displayName;
    console.log(`Coming from SESSION: ${config.displayName}`);
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
