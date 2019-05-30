var applicationSettingsModule = require("tns-core-modules/application-settings");

let logAllErrors = true;

// API KEYS Example

module.exports = {
    apiUrl: "https://jsonplaceholder.typicode.com/",
    appKey: "kid_HyHoT_REf",
    appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ"
};

var configObject = {
	
    api: "https://api.alcait.com",
    
	invalidateToken: function() {
		this.token = "";
    },
    
    debugMode: true,
    logAllErrors: true,
};


module.exports = configObject;
