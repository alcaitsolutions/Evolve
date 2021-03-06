
const app = require("tns-core-modules/application");

const CommunityViewModel = require("./community-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new CommunityViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
