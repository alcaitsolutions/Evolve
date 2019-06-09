var config = require("./config");
var frameModule = require("tns-core-modules/ui/frame");

module.exports = {

    // SideDrawer ( HOME )

    goToHomePage: function () {
        frameModule.topmost().navigate("./home/home");
    },

    // SideDrawer ( ACCOUNT )
    goToAccountPage: function () {
        f,rameModule.topmost().navigate("./account/account");
    },

    // SideDrawer ( SETTINGS )
    goToAccountPage: function () {
        frameModule.topmost().navigate("./account/account");
    },

    // SideDrawer ( ACTIVITY MONITOR )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./account/account");
    },

    // SideDrawer ( PROGRAMS )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./program/program");
    },

    // SideDrawer ( MESSAGES )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./message/message");
    },

    // SideDrawer ( SETTINGS )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./settings/settings");
    },
    // SideDrawer ( JOURNAL )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./journal/journal");
    },
    // SideDrawer ( FAVORITES )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./favorites/favorites");
    },
    // SideDrawer ( SUPPORT )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./support/support");
    },
    // SideDrawer ( DEVELOPER )
    goToLoginPage: function () {
        frameModule.topmost().navigate("./test/test");
    },

    goToSignoutPage: function () {
        // Destroy Token
        config.invalidateToken();
        frameModule.topmost().navigate({
            moduleName: "views/login/login",
            animated: false
        });
    },

    goToSignUpPage: function () {
        frameModule.topmost().navigate("./signup/signup");
    },
    goToPasswordPage: function () {
        frameModule.topmost().navigate("./password/password");
    },

};
