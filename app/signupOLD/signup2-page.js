const Signup2ViewModel = require("./signup2-view-model");
const app = require("tns-core-modules/application");
const signup2ViewModel = new Signup2ViewModel;

var pageArgs;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    pageArgs = page;
    page.bindingContext = loginViewModel;

}


function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onSignupButtonTap(){
    // Go to page 3 signup 

}


exports.onNavigatingTo = onNavigatingTo;
exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;