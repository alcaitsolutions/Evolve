
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const benefitsViewModel = require("./benefits-view-model");

function onNavigatingTo(args) {


    var page = args.object;
        
        page.bindingContext = new benefitsViewModel();

}


exports.onNavigatingTo = onNavigatingTo;