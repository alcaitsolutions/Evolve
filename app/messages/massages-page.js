const Messages = require("./messages-view-model");
const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
var gesturesModule = require("tns-core-modules/ui/gestures");
const view = require("tns-core-modules/ui/core/view");
const SelectedPageService = require("../shared/selected-page-service");

var messagesViewModel = new MessagesViewModel();



function onNavigatingTo(args) {
  const page = args.object;
  pageArgs = page;
  page.bindingContext = messagesViewModel;
}


exports.pageLoaded = function(args) {
	var page = args.object;
    page.bindingContext = messagesViewModel;
};



function onDrawerButtonTap(args) {
  const sideDrawer = app.getRootView();
  sideDrawer.showDrawer();
}

function onNewMessage(args){
  alert("here");
}

exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onNavigatingTo = onNavigatingTo;
exports.pageLoaded = pageLoaded;
exports.onNewMessage = onNewMessage;