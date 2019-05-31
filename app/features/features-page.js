const app = require("tns-core-modules/application");

const FeaturesViewModel = require("./features-view-model");

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    console.log("COming from SESSION: " + config.displayName);
    page.bindingContext = new FeaturesViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function peers(){
    console.log("Peers");
    showDebugMessage();
}

function awareness(){
    console.log("awareness");
    showDebugMessage();
}

function feedback(){
    console.log("feedback ");
    showDebugMessage();
}

function inspired(){
    console.log("inspired");
    showDebugMessage();
}

function showDebugMessage(){
    alert("In development");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.peers = peers;
exports.awareness = awareness;
exports.feedback = feedback;
exports.inspired = inspired;

exports.showDebugMessage = showDebugMessage;