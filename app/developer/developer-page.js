const app = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
const DeveloperViewModel = require("./developer-view-model");
const topmost 			= require("tns-core-modules/ui/frame").topmost;
const Button = require("tns-core-modules/ui/button").Button;
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

function test4(){
    frameModule.topmost().navigate("./chooseProgram/chooseProgram-page");
}

function test5(){
    frameModule.topmost().navigate("./hypertention/hypertention-page");
}

function test6(){
    frameModule.topmost().navigate("./supportCenter/supportCenter-page");
}

function test7(){
    frameModule.topmost().navigate("./activity/bloodpressure/bloodpressure-page");
}

function test8(){
    frameModule.topmost().navigate("./bottomNav/bottomNav-page");
}




exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.test1 = test1;
exports.test2 = test2;
exports.test3 = test3;
exports.test4 = test4;
exports.test5= test5;
exports.test6= test6;
exports.test7= test7;
exports.test8= test8;
