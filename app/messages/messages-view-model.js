const observableModule = require("tns-core-modules/data/observable");
var config = require("../shared/config");
const SelectedPageService = require("../shared/selected-page-service");

function MessagesViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Messages");

    const viewModel = observableModule.fromObject({
       user: "234"
    });

    return viewModel;
}

module.exports = MessagesViewModel;