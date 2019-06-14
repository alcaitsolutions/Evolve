const HypertentionViewModel = require("./hypertention-view-model");  // UPDATE

const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
const topmost = require("tns-core-modules/ui/frame").topmost;
const view = require("tns-core-modules/ui/core/view");
//const SelectedPageService = require("../shared/selected-page-service");

var hypertentionViewModel = new HypertentionViewModel();  // UPDATE



function onNavigatingTo(args) {
  const page = args.object;
  pageArgs = page;
  page.bindingContext = hypertentionViewModel;  // Update
}


exports.loaded = function(args) {
	var page = args.object;
    page.bindingContext = hypertentionViewModel; // update
};



function onDrawerButtonTap(args) {
  const sideDrawer = app.getRootView();
  sideDrawer.showDrawer();
}

exports.onDrawerButtonTap = onDrawerButtonTap;
