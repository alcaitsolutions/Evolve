const observableModule 	= require("tns-core-modules/data/observable");
const dialogsModule 	= require("tns-core-modules/ui/dialogs");
const userService 		= require("~/shared/services/user-service");
const topmost 			= require("tns-core-modules/ui/frame").topmost;
const appSettings 		= require("application-settings");
const config = require("~/shared/config");
const connectivityModule = require("tns-core-modules/connectivity");


function LoginViewModel() {

    
 
    const viewModel = observableModule.fromObject({
        processing: false,
        email: "2",
        password: "12345",
        confirmPassword: "",
        isLoggingIn: true,
        toggleForm() {
            this.isLoggingIn = !this.isLoggingIn;
        },
        submit() {

            if(config.debugMode){
                topmost().navigate("./home/home-page");
            }

            
            this.processing = true;
            if (this.email.trim() === "" || this.password.trim() === "") {
                alert("Please provide both an email address and password.");
                return;
            }

            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },
        login() {
            // Trigger activity spinner
            this.processing = true;

            // Call Login
            userService.login({
                email: this.email,
                password: this.password
            }).then( (res) => {
                // res coming in will be the resolved data from user service
                // in this case, it will be the object itself, not array. You
                // have to check for what is being returned and how.
                console.log(`We are in view model and result username is: ${res.username}`);
                alert("Thanks!");
                config.displayName = res.username;

                topmost().navigate("./home/home-page");
                /*
                    If you don't want the user to come back to login page
                    then use clearHistory: true to clear the navigation stack

                    topmost().navigate({
                        moduleName: "./home/home-page",
                        clearHistory: true
                    });
                */
            })
            .catch((e) => {
                this.processing = false;
                alert("Unfortunately we could not find your account.");
            });
        },
        register() {
            this.processing = true;
            if (this.password != this.confirmPassword) {
                alert("Your passwords do not match.");
                return;
            }
            userService.register({
                email: this.email,
                password: this.password
            }).then(() => {
                this.processing = false;
                    alert("Your account was successfully created. You can now login.");
                    this.isLoggingIn = true;
                })
                .catch(() => {
                    this.processing = false;
                    alert("Unfortunately we were unable to create your account.");
                });
        },
        forgotPassword() {
            dialogsModule.prompt({
                title: "Forgot Password",
                message: "Enter the email address you used to register for Evolve to reset your password.",
                inputType: "email",
                defaultText: "",
                okButtonText: "Ok",
                cancelButtonText: "Cancel"
            }).then((data) => {
                if (data.result) {
                    userService.resetPassword(data.text.trim())
                      .then(() => {
                        alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                      }).catch(() => {
                        alert("Unfortunately, an error occurred resetting your password.");
                      });
                }
            });
        },

        googleLogin(){
            alert("Google.");
            
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
