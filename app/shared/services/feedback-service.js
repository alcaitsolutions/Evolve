      // More methods in demo folders, main-view-model.ts
      
      const Feedback = require("nativescript-feedback").Feedback;
      const FeedbackType = require("nativescript-feedback").FeedbackType;
      const FeedbackPosition = require("nativescript-feedback").FeedbackPosition;
      const Color = require("tns-core-modules/color");

      function showSuccess() {
          feedback = new Feedback();
          feedbackPosition = FeedbackPosition;
          feedbackType = FeedbackType;
          color = Color;

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

      function showInfo(){
        feedback = new Feedback();
        feedbackPosition = FeedbackPosition;
        feedbackType = FeedbackType;
        color = Color;
        feedback.show({
            title: "Some info for you",
            message: "This is the default Info style.",
            duration: 2000,
            type: feedbackType.Info,
            onTap: () => {
              console.log("showInfo tapped");
            },
            onShow: (animating) => {
              if (animating) {
                console.log('showInfo animating');
              } else {
                console.log("showInfo shown");
              }
            },
            onHide: () => {
              console.log("showInfo hidden");
            },
          });


      }

      exports.showSuccess = showSuccess;
      exports.showInfo = showInfo;
