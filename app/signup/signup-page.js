const SignupViewModel = require("./signup-view-model");
const app = require("tns-core-modules/application");


var _page;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    _page = args.object;
    page.bindingContext = new SignupViewModel();
}


function hideUserName(){
    let usr =  _page.getViewById("fName");

}


function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onSignupButtonTap(){
    // Go to page 2 signup 

}

exports.hideUserName = hideUserName;
exports.onNavigatingTo = onNavigatingTo;
exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;