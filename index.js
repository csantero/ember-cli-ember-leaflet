var path = require('path');
var fs = require('fs');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

module.exports = {
  name: 'Ember-leaflet for Ember CLI',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function (app) {
    this._super.included(app);

    app.import('bower_components/leaflet-dist/leaflet-src.js');
    app.import('bower_components/leaflet-dist/leaflet.css');

    app.import('bower_components/ember-leaflet/dist/ember-leaflet.js', {
      exports: {
        'ember-leaflet': 'default'
      }
    });
    app.import('bower_components/leaflet.markerclusterer/dist/leaflet.markercluster-src.js', {
      exports: {
        'L': 'default'
      }
    });
    app.import('bower_components/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
  },

  postprocessTree: function (type, workingTree) {
    if (type === 'all') {
      var treePath = path.join('bower_components', 'leaflet-dist', 'images');
      var staticFiles = pickFiles(unwatchedTree(treePath), {
        srcDir: '/',
        files: ['*.png'],
        destDir: '/assets/images'
      });

      return mergeTrees([workingTree, staticFiles]);
    } else {
      return workingTree;
    }
  }
};

