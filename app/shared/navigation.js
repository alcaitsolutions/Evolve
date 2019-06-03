var config = require("./config");
var frameModule = require("tns-core-modules/ui/frame");

module.exports = {
	// All User Related...
	goToLoginPage: function() {
		frameModule.topmost().navigate("views/login/login");
	},
	goToSignoutPage: function() {
		config.invalidateToken();
		frameModule.topmost().navigate({
			moduleName: "views/login/login",
			animated: false
		});
	},
		
	goToSignUpPage: function() {
		frameModule.topmost().navigate("views/signup/signup");
	},
	goToPasswordPage: function() {
		frameModule.topmost().navigate("views/password/password");
	},
	

	// User Settings
	goToSettings: function() {
		frameModule.topmost().navigate("views/settings/settings");
    },
    

};