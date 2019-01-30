# Evolve Mobile Application

A cross-platform mobile health related application built on the NativeScript Framework.



## Key Features

- Social Media Capability
- Push Notifications / Messaging
- Community Question / Answer with Rewards
- Course Signups, Evaluations, Reporting
- Free

## Quick Start

Download this repository into a folder named "evolve", and then execute the following command:

``` shell
tns install
```

> Note: You will need the latest version of [NPM](https://www.npmjs.com) installed.

Once complete, execute the following command to start the application on your device or emulator:

**For Android Users**

``` shell
tns run android
```

**For Iphone Users**

``` shell
tns run ios
```

## Development Notes

### Architecture

There is a folder that is used for setting RadSideDrawer instance as an application starting point:

- `/app-root/app-root.js` - sets up the RadSideDrawer drawer content and defines navigation frame for the pages.

RadSideDrawer has the following component structure:

- `RadSideDrawer` - The component to display a drawer on the page.
- `RadSideDrawer.drawerContent` - Part of the RadSideDrawer, it holds a custom component `drawer` that displays the contents of the drawer.
- `RadSideDrawer.mainContent` - Part of the RadSideDrawer, it holds the main content for the page.

The template has the following blank pages:

- `/home/home-page.js`
- `/browse/browse-page.js`
- `/search/search-page.js`
- `/featured/featured-page.js`
- `/settings/settings-page.js`

### Styling

This template is set up to use SASS for styling. All classes used are based on the {N} core theme – consult the [documentation](https://docs.nativescript.org/angular/ui/theme.html#theme) to understand how to customize it. Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:

- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `_app-common.scss` - the global common style sheet. These style rules are applied to both Android and iOS.
- `app.android.scss` - the global Android style sheet. These style rules are applied to Android only.
- `app.ios.scss` - the global iOS style sheet. These style rules are applied to iOS only.

## Get Help

The NativeScript framework has a vibrant community that can help when you run into problems.

Try [joining the NativeScript community Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation). The Slack channel is a great place to get help troubleshooting problems, as well as connect with other NativeScript developers.

If you have found an issue with this template, please report the problem in the [NativeScript repository](https://github.com/NativeScript/NativeScript/issues).

## Contributing

We love PRs, and accept them gladly. Feel free to propose changes and new ideas. We will review and discuss, so that they can be accepted and better integrated.
