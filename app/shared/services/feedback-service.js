      const Feedback = require("nativescript-feedback").Feedback;
      const FeedbackType = require("nativescript-feedback").FeedbackType;
      const FeedbackPosition = require("nativescript-feedback").FeedbackPosition;

      function showSuccess() {

          feedback = new Feedback();
          feedbackPosition = FeedbackPosition;
          feedbackType = FeedbackType;

          feedback.show({
              title: "Thumbs up!",
              titleColor: new color.Color("#222222"),
              position: feedbackPosition.Bottom, // iOS only
              type: feedbackType.Custom, // this is the default type, by the way
              message: "Custom colors and icon. Loaded from the App_Resources folder.",

              duration: 3000,

              icon: "customicon", // in App_Resources/platform folders
              onTap: function () { console.log("showCustomIcon tapped") },
              onShow: function (animating) { console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown") },
              onHide: function () { console.log("showCustomIcon hidden") }
          });
      }

      exports.showSuccess = showSuccess;
