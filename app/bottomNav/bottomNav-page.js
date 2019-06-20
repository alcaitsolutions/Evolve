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
    username: "john",
    password: "12345",
    //feedback: new Feedback(),
    //feedbackPosition: FeedbackPosition,
    //feedbackType: FeedbackType,

    /* Methods */
    onNavTap: function (args) {
        const navBtn = args.object;
        const page = navBtn.page;
        const btnId = navBtn.id;

        switch (btnId) {
        case "btn-activity":
            //page.frame.navigate("./activity/bloodpressure/bloodpressure");
            break;
        case "btn-programs":
            // code block
            break;
        case "btn-messages":
            // code block
            break;

        case "btn-journal":
            // code block
            break;

        case "btn-community":
            // code block
            break;

        }

        //alert(`${navBtn.id} is the id of the button!`);
        //this.showSuccess();
        //this.showError();
        //this.showWarning();
        //FancyAlertService.showFancyError('OOps','Something went wrong','Close');
        //FeedbackService.showSuccess();
        FeedbackService.showInfo();
        //NotificationService.doScheduleWithButtons();
        //NotificationService.doScheduleId4GroupedWithCustomIcon();
        //NotificationService.doScheduleId5WithInput();
        //NotificationService.doCancelAll();
        NotificationService.doScheduleEveryMinute();
    },

    showSuccess: function () {
        this.feedback.success({
            title: "Successfully shown myself!",
            message: "I'm configured to hide after 2.5 seconds.",
            duration: 2500,
            // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
            onTap: () => {
                console.log("showSuccess tapped");
            }
        });
    },

    showError: function () {
        this.feedback.show({
            title: "Feature Incomplete",
            titleSize: 25.0,
            message: "The Health Conscious feature you are trying to view has not been completed yet. Please check back soon!",
            messageSize: 14.0,
            duration: 5000,
            position: this.feedbackPosition.Bottom,
            type: this.feedbackType.Error,
            onTap: () => {
                console.log("showErrorBottom tapped");
                showToast("You clicked Notification!");
            }
        });
    },

    showWarning: function () {
        this.feedback.show({
            // title: "The warning title",
            message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
            duration: 4000,
            position: FeedbackPosition.Top,
            type: FeedbackType.Warning,
            onTap: () => {
                console.log("showWarning tapped");
            }
        });
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
