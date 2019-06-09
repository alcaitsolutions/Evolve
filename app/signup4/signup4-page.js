const SignupViewModel = require("./signup4-view-model");
const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;

const signupViewModel = new SignupViewModel;
var pageArgs;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    pageArgs = page;
    page.bindingContext = signupViewModel;
}


function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onSignupButtonTap(args){
    // Go to page 2 signup 
    //frameModule.topmost().navigate("./signup2/signup2-page");
     //frameModule.topmost().navigate("./signup/signup-page");
     args.object.page.frame.navigate({
        moduleName: "./signup2/signup2-page",
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn"
        }
      });

}


exports.onNavigatingTo = onNavigatingTo;
exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;