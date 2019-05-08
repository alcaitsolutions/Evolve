const observableModule = require("tns-core-modules/data/observable");
var config = require("../shared/config");
const SelectedPageService = require("../shared/selected-page-service");


function HomeViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Home");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        lastProgram: config.lastProgram,
    });

    return viewModel;
}

module.exports = HomeViewModel;
