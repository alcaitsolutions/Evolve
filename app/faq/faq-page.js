const app = require("tns-core-modules/application");

const FaqViewModel = require("./faq-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new FaqViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
