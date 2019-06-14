var observableModule = require("tns-core-modules/data/observable");

function BloodPressureViewModel() {
  var viewModel = observableModule.fromObject({
    animeData: [
      { season: "1", count: 82 }, { season: "2", count: 36 }, { season: "3", count: 41 },
      { season: "4", count: 52 }, { season: "5", count: 65 }, { season: "6", count: 40 },
      { season: "7", count: 52 }, { season: "8", count: 54 }, { season: "9", count: 47 },

    ],

    animeData2: [
      { season: "7/4/2019", count: 82 }, { season: "2", count: 36 }, { season: "3", count: 41 },
      { season: "7/5/2019", count: 52 }, { season: "5", count: 65 }, { season: "6", count: 40 },

    ],


  });

  return viewModel;
}

module.exports = BloodPressureViewModel;
