const frameModule = require("tns-core-modules/ui/frame");
const LoginViewModel = require("./login-view-model");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost 			= require("tns-core-modules/ui/frame").topmost;
const loginViewModel = new LoginViewModel();

function onForgotPassword() {
    dialogs.prompt("Forgot Your Password? Enter the email address you registered with Health Conscious. We will email you a link to reset your password.", "").then(function (r) {
        console.log("Dialog result: " + r.result + ", text: " + r.text);

        alert("Thank You. Please check your email: " + r.result +".").then(() => {
            console.log("Forgot Password Email Sent");
        });
    });  
}



function onNavigatingTo (args) {
    const page = args.object;
    page.bindingContext = loginViewModel;
} 

function onSubmit(){
    alert("Authenticating. Next screen is customer onboarding slide.").then(() => {
        console.log("Auth code here");
    });

    //frameModule.topmost().navigate("./onBoard/slideOne/slideOne-page");
}

function onGetStarted(){
     alert("You would now be directed to REGISTER PAGE, which I am working on NOW.").then(() => {
        console.log("Auth code here");
    });

    //frameModule.topmost().navigate("./signup/signup-page");
    // frameModule.topmost().navigate("register/register");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onForgotPassword = onForgotPassword;
exports.onSubmit = onSubmit;
exports.onGetStarted = onGetStarted;

