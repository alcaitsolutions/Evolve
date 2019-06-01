const observableModule = require("tns-core-modules/data/observable");
const SelectedPageService = require("../shared/selected-page-service");
const config = require("../shared/config");
//const SelectedPageService = require("../shared/selected-page-service");

function ChooseProgramViewModel() {
    //SelectedPageService.getInstance().updateSelectedPage("Benefits");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        imageClicked: config.lastProgram,
    });

    return viewModel;
}

module.exports =  ChooseProgramViewModel;