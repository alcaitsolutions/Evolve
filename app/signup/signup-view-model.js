const observableModule = require("tns-core-modules/data/observable");

function SignupViewModel() {
    const viewModel = observableModule.fromObject({
        fName: "",
        email: "",
        password: "",
        confirmPassword: "",

        signUp: function () {
            const fName = this.fName;

            /* ***********************************************************
            * Call your custom signup logic using the email and password data.
            *************************************************************/
        },

        isValidEmail: function() {
            var email = this.get("email");
            alert("Validating Email!");
        }

      
    });

    return viewModel;
}

module.exports = SignupViewModel;
