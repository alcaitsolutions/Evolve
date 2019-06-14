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
const  { app }         = require("tns-core-modules/application");
const  { fromObject }  = require("tns-core-modules/data/observable");
var frameModule = require("tns-core-modules/ui/frame");

// Feedback Testing
const  Color  = require("tns-core-modules/color");
var fb = require("~/shared/services/feedback-service");
const application = require("tns-core-modules/application");

// +---------------------------------------------------------------------------+
// | 2. CREATE VIEW MODEL                                                      |                                                                        |
// +---------------------------------------------------------------------------+
const model = {

  /* Properties */
  username: "john",
  password: "12345",
  
  /* Methods */
  onNavTap: function(args){
    const navBtn = args.object;
    const page = navBtn.page;
    const btnId = navBtn.id;

    switch(btnId) {
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
    var msg = "This is my toast";
    android.widget.Toast.makeText(application.android.context, msg, android.widget.Toast.LENGTH_SHORT).show();
    //this.showWarning();
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

// +---------------------------------------------------------------------------+
// | 4. EXPORT OTHER FUNCTIONS                                                 |                                                                        |
// +---------------------------------------------------------------------------+
exports.pageLoaded = pageLoaded;
exports.onDrawerButtonTap = onDrawerButtonTap;