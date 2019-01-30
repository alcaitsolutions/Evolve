const app = require("tns-core-modules/application");

const AccountViewModel = require("./account-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new AccountViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
