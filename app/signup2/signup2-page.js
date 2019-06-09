
const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
var gesturesModule = require("tns-core-modules/ui/gestures");
const view = require("tns-core-modules/ui/core/view");
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
var FeedbackPlugin = require("nativescript-feedback");
var feedback = new FeedbackPlugin.Feedback();


function onNavigatingTo(args) {
    const page = args.object;
    pageArgs = page;
    page.bindingContext = signup2ViewModel;

}

exports.loaded = function (args) {
    console.log("loaded");
};

function onDiabetesTap(args) {
    console.log("here");
    feedback.success({
        title: "Successfully shown myself!",
        message: "I'm configured to hide after 2.5 seconds.",
        duration: 2500,
        // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
        onTap: () => {
          console.log("showSuccess tapped");
        }
      });

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