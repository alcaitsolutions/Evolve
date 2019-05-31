const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
const DeveloperViewModel = require("./developer-view-model");
const topmost 			= require("tns-core-modules/ui/frame").topmost;

// Load config file which handles our session data
var config = require("../shared/config");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new DeveloperViewModel();
    
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function test1(){
    frameModule.topmost().navigate("./features/features-page");
}

function test2(){
    frameModule.topmost().navigate("./benefits/benefits-page");
}

function test3(){
    frameModule.topmost().navigate("./chooseProgram/chooseProgram-page");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.test1 = test1;
exports.test2 = test2;
exports.test3 = test3;
