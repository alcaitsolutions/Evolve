
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const benefitsViewModel = require("./benefits-view-model");

function onNavigatingTo(args) {


    var page = args.object;
        var items = new ObservableArray();
        items.push({ imageUrl: "~/images/benefits/1.png" });
        items.push({ imageUrl: "~/images/benefits/2.png" });
        items.push({ imageUrl: "~/images/benefits/3.png" });
        items.push({ imageUrl: "~/images/benefits/4.png" });
        items.push({ imageUrl: "~/images/benefits/5.png" });
        viewModel = new Observable();
        viewModel.set("items", items);
        viewModel.set("pageNumber", 3);
        page.bindingContext = viewModel;

}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;