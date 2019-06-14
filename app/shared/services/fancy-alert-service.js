// Fancy Alert Testing
const TNSFancyAlert = require("nativescript-fancyalert").TNSFancyAlert;
const TNSFancyAlertButton = require("nativescript-fancyalert").TNSFancyAlertButton;


function showFancyError(title,msg,btnTxt){
    TNSFancyAlert.showError(title, msg, btnTxt).then(
        () => {
            /* user pressed the button */
            console.log("alert button pressed");
        }
    );

}


function showFancySuccess(title,msg,btnTxt){
    // show success
    TNSFancyAlert.showSuccess(
        title,
        msg,
        btnTxt
    ).then(() => {
        /* user pressed the button */
        console.log("alert button pressed");
    });
}

// Notice, Warning, Info


exports.showFancyError = showFancyError;
exports.showFancySuccess = showFancySuccess;

