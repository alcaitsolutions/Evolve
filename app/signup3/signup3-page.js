// example-page.js
// +---------------------------------------------------------------------------+
// | ALCA IT SOLUTIONS - Preferred Blank NativeScript Templates                |
// +---------------------------------------------------------------------------+                                                                       |                              |
// | VIEW MODEL Variables                                                      |
// | To access properties within view-model from XML screen:                   |
// |    -- use double curly brackets {{ }}                                     |
// |       example:  <Label text="{{ username }}" />                           |
// |                 <Button text="tap me" tap="{{ myTapMethod }}"/>           |
// | To access functions OUTSIDE of view model from XML screen:                |
// |    -- omit double curly brackets                                          |
// |       example:  <Button text="tap me" tap="myGenericFunction" />          |                                 |                                                                             
// +---------------------------------------------------------------------------+
// | 1. IMPORT REQUIRED FILES                                                  |                                                                        |
// +---------------------------------------------------------------------------+
const { app } = require("tns-core-modules/application");
const { fromObject } = require("tns-core-modules/data/observable");
var frameModule = require("tns-core-modules/ui/frame");
const application = require("tns-core-modules/application");

// Feedback
const FeedbackService = require("~/shared/services/feedback-service");
const isIOS = require("tns-core-modules/platform");

// Import Fancy Alert
const FancyAlertService = require("~/shared/services/fancy-alert-service");

// Local Notifications
const NotificationService = require("~/shared/services/notification-service");
// +---------------------------------------------------------------------------+
// | 2. CREATE VIEW MODEL                                                      |                                                                        |
// +---------------------------------------------------------------------------+
const model = {

    /* Properties */
   

    /* Methods */
    onNavTap: function (args) {
        const navBtn = args.object;
        const page = navBtn.page;
        const btnId = navBtn.id;
    }

}

/* Set the binding context */
const bindingContext = fromObject(model);

// +---------------------------------------------------------------------------+
// | 3. OTHER FUNCTIONS ( Not bound to ViewModel )                             |                                                                        |
// +---------------------------------------------------------------------------+
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = bindingContext;
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function showToast(msg) {
    android.widget.Toast.makeText(application.android.context, msg, android.widget.Toast.LENGTH_SHORT).show();
}

// +---------------------------------------------------------------------------+
// | 4. EXPORT OTHER FUNCTIONS                                                 |                                                                        |
// +---------------------------------------------------------------------------+
exports.pageLoaded = pageLoaded;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.showToast = showToast;
