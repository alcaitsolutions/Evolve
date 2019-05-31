const app = require("tns-core-modules/application");

const  ChooseProgramViewModel = require("./chooseProgram-view-model");

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    console.log("COming from SESSION: " + config.displayName);
    page.bindingContext = new  ChooseProgramViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}


function showDebugMessage(){
    alert("In development");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;


exports.showDebugMessage = showDebugMessage;