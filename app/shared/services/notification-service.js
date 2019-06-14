const Observable = require("tns-core-modules/data/observable");
const alert = require("tns-core-modules/ui/dialogs").alert;
const LocalNotifications = require("nativescript-local-notifications").LocalNotifications;
const Color = require("tns-core-modules/color");

var notification;

LocalNotifications.addOnMessageReceivedCallback(notificationData => {
    //console.log("Notification received: " + JSON.stringify(notificationData));
    //notification = "Notification received: " + JSON.stringify(notificationData);
});

function doCheckHasPermission() {
    LocalNotifications.hasPermission()
        .then(granted => {
            alert({
                title: "Permission granted?",
                message: granted ? "YES" : "NO",
                okButtonText: "OK"
            });
        });
};

function doRequestPermission() {
    LocalNotifications.requestPermission()
        .then(granted => {
            alert({
                title: "Permission granted?",
                message: granted ? "YES" : "NO",
                okButtonText: "OK"
            });
        });
}

function doScheduleWithButtons() {
    LocalNotifications.schedule(
            [{
                id: 1,
                title: 'Health Conscious Reminder...',
                subtitle: 'Weight Check',
                body: 'You\'ve asked us to remind you to check your weight, so here we are. Click the button below to log it in your journal.',
                bigTextStyle: true, // Allow more than 1 row of the 'body' text
                sound: "customsound",
                //color: new Color("green"),
                forceShowWhenInForeground: true,
                channel: "My Awesome Channel", // not that this is revealed in the notification tray when you longpress it on Android
                ticker: "Special ticker text (Android only)",
                at: new Date(new Date().getTime() + (10 * 1000)),
                notificationLed: true,
                actions: [{
                        id: "yes",
                        type: "button",
                        title: "Log My Weight Now",
                        launch: true
                    },
                    {
                        id: "no",
                        type: "button",
                        title: "Later",
                        launch: false
                    }
                ]
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: "ID: 1",
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doSchedule error: " + error))
};

function doScheduleNoSound() {
    LocalNotifications.schedule(
            [{
                id: 2,
                title: "Red Alert",
                subtitle: "Remember this game?",
                icon: 'res://ic_stat_notify',
                color: new Color("red"),
                image: "https://images-na.ssl-images-amazon.com/images/I/61mx-VbrS0L.jpg",
                thumbnail: "https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg",
                forceShowWhenInForeground: false, // default
                body: "RTS FTW!",
                sound: null,
                at: new Date(new Date().getTime() + 10 * 1000)
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: 'ID: 2',
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleSilent error: " + error));
}

function doScheduleAndSetBadgeNumber() {
    LocalNotifications.schedule(
            [{
                id: 3,
                title: 'Hi',
                subtitle: 'Whatsubtitle',
                image: "https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg",
                thumbnail: true,
                // body: 'You should see a \'3\' somewhere',
                at: new Date(new Date().getTime() + 10 * 1000),
                badge: 3
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: 'ID: 3',
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleAndSetBadgeNumber error: " + error));
}

function doScheduleId4GroupedWithCustomIcon() {
    LocalNotifications.schedule(
            [{
                id: 4,
                title: 'Custom icon',
                body: 'Check it out!',
                thumbnail: "https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg",
                icon: 'res://ic_stat_smiley',
                at: new Date(new Date().getTime() + 10 * 1000),
                groupedMessages: ["The first", "Second", "Keep going", "one more..", "OK Stop"], // android only
                groupSummary: "Summary of the grouped messages above" // android only
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: 'ID: 4',
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleId4WithCustomIcon error: " + error));
}

function doScheduleId5WithInput() {
    LocalNotifications.schedule(
            [{
                id: 5,
                thumbnail: true,
                title: 'Richard wants your input',
                body: '"Hey man, what do you think of the new design?" (swipe down to reply, or tap to open the app)',
                forceShowWhenInForeground: true,
                at: new Date(new Date().getTime() + 10 * 1000),
                actions: [{
                    id: "input-richard",
                    type: "input",
                    title: "Tap here to reply",
                    placeholder: "Type to reply..",
                    submitLabel: "Reply",
                    launch: true,
                    editable: true,
                    // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                }]
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: "ID: 5",
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleId5WithInput error: " + error));
}

function doScheduleEveryMinute() {
    LocalNotifications.schedule(
            [{
                id: 6,
                title: 'Every minute!',
                interval: 'minute', // some constant
                body: 'I\'m repeating until cancelled',
                icon: 'res://ic_stat_smiley',
                thumbnail: "res://ic_stat_notify",
                forceShowWhenInForeground: true,
                at: new Date(new Date().getTime() + 10 * 1000)
            }])
        .then(() => {
            alert({
                title: "Notification scheduled",
                message: 'ID: 6, repeating',
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleEveryMinute error: " + error));
}

function doScheduleMultiple() {
    LocalNotifications.schedule(
            [{
                    id: 7,
                    title: 'Multiple - id 7',
                    icon: 'res://ic_stat_smiley',
                    at: new Date(new Date().getTime() + 5 * 1000)
                },
                {
                    id: 8,
                    title: 'Multiple - id 8',
                    icon: 'res://ic_stat_notify',
                    at: new Date(new Date().getTime() + 6 * 1000)
                },
                {
                    id: 9,
                    title: 'Multiple - id 9',
                    icon: 'res://ic_stat_smiley',
                    at: new Date(new Date().getTime() + 7 * 1000)
                },
                {
                    id: 10,
                    title: 'Multiple - id 10',
                    icon: 'res://ic_stat_smiley',
                    at: new Date(new Date().getTime() + 8 * 1000)
                },
            ])
        .then(() => {
            alert({
                title: "Notification 7-10 scheduled",
                okButtonText: "OK, thanks"
            });
        })
        .catch(error => console.log("doScheduleMultiple error: " + error));
}

function doGetScheduledIds() {
    LocalNotifications.getScheduledIds()
        .then(ids => {
            alert({
                title: "Scheduled ID's",
                message: 'ID\'s: ' + ids,
                okButtonText: "Sweet!"
            });
        })
        .catch(error => console.log("doGetScheduledIds error: " + error));
}


function doCancelAll() {
    LocalNotifications.cancelAll()
        .then(() => {
          alert({
            title: "All canceled",
            okButtonText: "Awesome!"
          });
        })
        .catch(error => console.log("doCancelAll error: " + error));
  }

  function doCancelId6() {
    LocalNotifications.cancel(6)
        .then(foundAndCanceled => {
          if (foundAndCanceled) {
            alert({
              title: "ID 6 canceled",
              okButtonText: "OK, coolness"
            });
          } else {
            alert({
              title: "No ID 6 was scheduled",
              okButtonText: "OK, woops"
            });
          }
        })
        .catch(error => console.log("doCancelId6 error: " + error));
  }

  exports.doCheckHasPermission = doCheckHasPermission;
  exports.doRequestPermission = doRequestPermission;
  exports.doScheduleWithButtons = doScheduleWithButtons;
  exports.doScheduleNoSound = doScheduleNoSound;
  exports.doScheduleAndSetBadgeNumber = doScheduleAndSetBadgeNumber;
  exports.doScheduleId4GroupedWithCustomIcon = doScheduleId4GroupedWithCustomIcon;
  exports.doScheduleId5WithInput = doScheduleId5WithInput;
  exports.doScheduleEveryMinute = doScheduleEveryMinute;
  exports.doScheduleMultiple = doScheduleMultiple;
  exports.doGetScheduledIds = doGetScheduledIds;
  exports.doCancelAll = doCancelAll;
  exports.doCancelId6 = doCancelId6;
 
