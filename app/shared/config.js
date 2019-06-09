var applicationSettingsModule = require("application-settings");

var configObject = {
    
	alcaApiUrl: "https://api/",

	invalidateToken: function() {
		this.token = "";
	}
};

Object.defineProperty(configObject, "token", {
	get: function() {
		return applicationSettingsModule.getString("token");
	},
	set: function(token) {
		return applicationSettingsModule.setString("token", token);
	}
});


Object.defineProperty(configObject, "alcaToken", {
	get: function() {
		return applicationSettingsModule.getString("alcaToken");
	},
	set: function(alcaToken) {
		return applicationSettingsModule.setString("alcaToken", clarifaiToken);
	}
});


Object.defineProperty(configObject, "displayName", {
	get: function() {
		return applicationSettingsModule.getString("displayName");
	},
	set: function(displayName) {
		return applicationSettingsModule.setString("displayName", displayName);
	}
});


Object.defineProperty(configObject, "userId", {
	get: function() {
		return applicationSettingsModule.getString("userId");
	},
	set: function(userId) {
		return applicationSettingsModule.setString("userId", userId);
	}
});


module.exports = configObject;