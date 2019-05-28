const frameModule = require("ui/frame");
const LoginViewModel = require("./login-view-model");
var dialogs = require("tns-core-modules/ui/dialogs");

const loginViewModel = new LoginViewModel();

function onForgotPassword() {
    dialogs.prompt("Forgot Your Password? Enter the email address you registered with Health Conscious. We will email you a link to reset your password.", "").then(function (r) {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });  
}



function onNavigatingTo (args) {
    const page = args.object;
    page.bindingContext = loginViewModel;
} 

function onSubmit(){
    alert("Authenticating. QA Testing to Success Page.").then(() => {
        console.log("Auth code here");
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onForgotPassword = onForgotPassword;
exports.onSubmit = onSubmit;


