var applicationSettingsModule = require("application-settings");

var configObject = {
	
    api: "https://api.alcait.com",
    
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

Object.defineProperty(configObject, "lastProgram", {
	get: function() {
		return applicationSettingsModule.getString("lastProgram");
	},
	set: function(lastProgram) {
		return applicationSettingsModule.setString("lastProgram", lastProgram);
	}
});
Object.defineProperty(configObject, "alcaToken", {
	get: function() {
		return applicationSettingsModule.getString("alcaToken");
	},
	set: function(alcaToken) {
		return applicationSettingsModule.setString("alcaToken", alcaToken);
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
Object.defineProperty(configObject, "planType", {
	get: function() {
		return applicationSettingsModule.getString("planType");
	},
	set: function(planType) {
		return applicationSettingsModule.setString("planType", planType);
	}
});

module.exports = configObject;