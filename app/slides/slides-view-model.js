const observableModule = require("tns-core-modules/data/observable");
var config = require("../shared/config");
const SelectedPageService = require("../shared/selected-page-service");

// Required for Slides
const Observable = require("tns-core-modules/data/observable");
const EventData = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array");
const Page = require("tns-core-modules/ui/page");
const PageChangeEventData = require("nativescript-image-swipe");

var viewModel, Observable;

function SlidesViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Slides");

    return viewModel;
}

export function navigatingTo(EventData) {
    const page = args.object;
    const items = new ObservableArray();
 
    items.push({ imageUrl: "https://via.placeholder.com/350" });
    items.push({ imageUrl: "https://via.placeholder.com/330" });
    items.push({ imageUrl: "https://via.placeholder.com/320" });
    items.push({ imageUrl: "https://via.placeholder.com/380" });
    items.push({ imageUrl: "https://via.placeholder.com/310" });
 
    viewModel = new Observable();
    viewModel.set("items", items);
    viewModel.set("pageNumber", 3);
 
    page.bindingContext = viewModel;
}
 
export function pageChanged(PageChangeEventData) {
    console.log(`Page changed to ${e.page}.`);
}

module.exports = SlidesViewModel;