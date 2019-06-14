var frameModule = require("tns-core-modules/ui/frame");
var ExampleViewModel = require("./example-view-model");
var exampleViewModel = new ExampleViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = exampleViewModel;
}

exports.pageLoaded = pageLoaded;
