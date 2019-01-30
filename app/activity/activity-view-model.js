const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");



function ActivityViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Activity");

    const viewModel = observableModule.fromObject({
       //
    });

    return viewModel;
}

module.exports = ActivityViewModel;
