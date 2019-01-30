const app = require("tns-core-modules/application");

const ProgramViewModel = require("./program-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ProgramViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
