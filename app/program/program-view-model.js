const observableModule = require("tns-core-modules/data/observable");
var config = require("../shared/config");
const SelectedPageService = require("../shared/selected-page-service");

function ProgramViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Program");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        lastProgram: config.lastProgram,
    });

    return viewModel;
}

module.exports = ProgramViewModel;
