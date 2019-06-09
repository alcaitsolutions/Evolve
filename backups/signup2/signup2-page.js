const Signup2ViewModel = require("./signup2-view-model");
const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
var gesturesModule = require("tns-core-modules/ui/gestures");
const view = require("tns-core-modules/ui/core/view");
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;



function onNavigatingTo(args) {
    const page = args.object;

    pageArgs = page;
    page.bindingContext = signup2ViewModel;

}

exports.loaded = function (args) {
    console.log("loaded");
};

function onDiabetesTap(args) {
  console.log(signup2ViewModel);

    /*
    args.object.page.frame.navigate({
        moduleName: "./signup3/signup3-page",
        animated: true,
        transition: {
            name: "slideLeft",
            duration: 380,
            curve: "easeIn"
        }
    });
    */
  

}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onSignupButtonTap(args) {
    signup2ViewModel.set("authenticating", true);
}

exports.onDiabetesTap = onDiabetesTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;
