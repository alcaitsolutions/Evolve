var observableModule = require("tns-core-modules/data/observable");

function ExampleViewModel() {
	var viewModel = observableModule.fromObject({

        /* Add properties and methods here */
        onButtonTap: function () {
        console.log("Button was pressed");
        },


        onNewMessage: function () {
                alert("We are here!");
        }
	});

	return viewModel;
}

module.exports = ExampleViewModel;
