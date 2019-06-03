const frameModule = require("tns-core-modules/ui/frame");
const LoginViewModel = require("./login-view-model");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
const loginViewModel = new LoginViewModel();

var pageArgs;

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
    pageArgs = page;

    page.bindingContext = loginViewModel;
} 

function onSubmit(){

   // setTimeout(function () {
		//previewViewModel.isBusy = false;
		//previewViewModel.height = 0;
    //}, 3200);
    
    frameModule.topmost().navigate("./benefits/benefits-page");
}

function onGetStarted(args){

    //frameModule.topmost().navigate("./signup/signup-page");
    args.object.page.frame.navigate({
        moduleName: "./signup/signup-page",
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn"
        }
      });
     
}

function onSignupBenefits(){
    frameModule.topmost().navigate("./features/features-page");
}

exports.pageLoaded = function (args) {
    const page = args.object;
  }


exports.onNavigatingTo = onNavigatingTo;
exports.onForgotPassword = onForgotPassword;
exports.onSubmit = onSubmit;
exports.onGetStarted = onGetStarted;
exports.onSignupBenefits = onSignupBenefits;

