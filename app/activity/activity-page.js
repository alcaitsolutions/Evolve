const app = require("tns-core-modules/application");

const ActivityViewModel = require("./activity-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ActivityViewModel();
    
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}



exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
