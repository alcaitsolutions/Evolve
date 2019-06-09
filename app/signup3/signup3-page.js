const Signup3ViewModel = require("./signup3-view-model");
const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
var dialogs = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;
var gesturesModule = require("tns-core-modules/ui/gestures");
const view = require("tns-core-modules/ui/core/view");

var signup3ViewModel = new Signup3ViewModel({ authenticating: false });

var fName;
var email;
var pass1;
var pass2;
var signUpButton


function onNavigatingTo(args) {
  const page = args.object;
  pageArgs = page;
  page.bindingContext = signup3ViewModel;
  Signup3ViewModel.set("authenticating", true);
  var processingTimer = setTimeout(() => {
  
}, 3000);
}


exports.loaded = function(args) {
	var page = args.object;
    page.bindingContext = signup3ViewModel;

    Signup3ViewModel.set("authenticating", false);


};


function onDiabetesTap(args) {
    console.log(args);
    //alert("Diabetes");
    setTimeout(() => {
      console.log("here");
      signup2ViewModel.authenticating = true;
       // Hides the soft input method, ususally a soft keyboard.
  }, 2100);
    args.object.page.frame.navigate({
      moduleName: "./signup3/signup3-page",
      animated: true,
      transition: {
          name: "slideLeft",
          duration: 380,
          curve: "easeIn"
      }
  });
    
}


function onDrawerButtonTap(args) {
  const sideDrawer = app.getRootView();
  sideDrawer.showDrawer();
}

function onSignupButtonTap(args){
  signup2ViewModel.set("authenticating", true);
}





exports.onDiabetesTap = onDiabetesTap;

exports.onSignupButtonTap = onSignupButtonTap;
exports.onDrawerButtonTap = onDrawerButtonTap;
