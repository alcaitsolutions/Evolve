const SignupViewModel = require("./signup-view-model");
const app = require("tns-core-modules/application");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new SignupViewModel();
}

function onSignupWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For sign up with social provider you can add your custom logic or
    * use NativeScript plugin for sign up with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
    *************************************************************/
}

function onSignupButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

    bindingContext.signUp();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSignupWithSocialProviderButtonTap = onSignupWithSocialProviderButtonTap;
exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;