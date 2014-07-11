ember-cli-ember-leaflet
=======================

This is an addon for [ember-cli](http://iamstef.net/ember-cli/) that adds support for [Leaflet](https://github.com/Leaflet/Leaflet) via the [ember-leaflet](https://github.com/gabesmed/ember-leaflet) library.

_WARNING_: This addon requires a version of `ember-cli` greater than 0.0.39.

##Usage

Run the following commands to install this addon in your project.
```
npm install ember-cli-leaflet --save-dev
npm install ember-cli-ember-leaflet --save-dev
```

`ember-cli` knows how to load addons based on the presence of packages in your project's `package.json` that use the `ember-addon` npm keyword. At the moment there is no way for addons to declare dependencies on other addons. Therefore, you must install dependency addon packages separately.

__IMPORTANT__ Until `ember-cli` supports tracking third-party AMD package dependencies, you must ensure that `ember-cli-leaflet` is placed before `ember-cli-ember-leaflet` in your `package.json`. Otherwise `ember-cli` will concatenate the scripts in the wrong order.