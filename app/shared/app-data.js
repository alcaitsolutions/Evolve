
/* This file handles the persistent data for the
*  user using the Application Settings. This is
*  similar to using Session or Local Storage on
*  the web.
*
*/


/* Unique Session ID of this instance */
var sessionDataObject = {
	
	sessionId: "123456789",
	debugMode: true
};


/* User Login Token
*
*
*/
Object.defineProperty(sessionDataObject, "token", {
	get: function() {
		return applicationSettingsModule.getString("token");
	},
	set: function(token) {
		return applicationSettingsModule.setString("token", token);
	}
});


/* userObj 
*  A JSON string of the entire user object.
*
*/
Object.defineProperty(sessionDataObject, "userId", {
	get: function() {
		return applicationSettingsModule.getString("userId");
	},
	set: function(userId) {
		return applicationSettingsModule.setString("userId", userId);
	}
});

module.exports = sessionObject;