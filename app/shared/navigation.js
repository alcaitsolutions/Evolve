var config = require("./config");
var frameModule = require("tns-core-modules/ui/frame");

module.exports = {

    // SideDrawer ( HOME )

    goToHomePage: function () {
        frameModule.topmost().navigate("./home/home");
    },

    // SideDrawer ( ACCOUNT )
    goToAccountPage: function () {
        frameModule.topmost().navigate("./account/account");
    },

    // SideDrawer ( ACTIVITY MONITOR )
    goToActivityPage: function () {
        frameModule.topmost().navigate("./activity/activity");
    },

    // SideDrawer ( PROGRAMS )
    goToProgramPage: function () {
        frameModule.topmost().navigate("./program/program");
    },

    // SideDrawer ( MESSAGES )
    goToMessagesPage: function () {
        frameModule.topmost().navigate("./messages/messages");
    },

    // SideDrawer ( SETTINGS )
    goToSettingsPage: function () {
        frameModule.topmost().navigate("./settings/settings");
    },
    // SideDrawer ( JOURNAL )
    goToJournalPage: function () {
        frameModule.topmost().navigate("./journal/journal");
    },
    // SideDrawer ( FAVORITES )
    goToFavoritesPage: function () {
        frameModule.topmost().navigate("./favorites/favorites");
    },
    // SideDrawer ( SUPPORT )
    goToSupportPage: function () {
        frameModule.topmost().navigate("./support/support");
    },
    // SideDrawer ( DEVELOPER )
    goToDeveloperPage: function () {
        frameModule.topmost().navigate("./developer/developer");
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
