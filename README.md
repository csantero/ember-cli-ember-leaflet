ember-cli-ember-leaflet
=======================

_DEPRECATED_: Use [ember-leaflet 2.0](https://github.com/miguelcobain/ember-leaflet) instead, which is now an Ember CLI addon.

This is an addon for [ember-cli](http://iamstef.net/ember-cli/) that adds support for [Leaflet](https://github.com/Leaflet/Leaflet) via the [ember-leaflet](https://github.com/gabesmed/ember-leaflet) library.

##Usage

Run the following commands to install this addon in your project.
```
npm install ember-cli-ember-leaflet --save-dev
ember generate ember-cli-ember-leaflet
```

###Upgrading
```
ember generate ember-cli-ember-leaflet
```
The above command will update the version of `ember-leaflet` referenced in your `bower.json`. If you want to use a different version of `ember-leaflet`, you can edit your `bower.json` manually.

###

_WARNING_: If you are upgrading from `ember-cli-ember-leaflet` pre-0.1.0, you should remove `ember-cli-leaflet` from your project. This project incorporates the functionality of that one, and having both addons active in your app may cause issues.
