const observableModule = require("tns-core-modules/data/observable");
var config = require("../shared/config");
//const SelectedPageService = require("../shared/selected-page-service");

function Signup3ViewModel() {
    //SelectedPageService.getInstance().updateSelectedPage("Signup");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        lastProgram: config.lastProgram
    });

    return viewModel;
}

module.exports = Signup3ViewModel;