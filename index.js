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

function EmberCLIEmberLeaflet(project) {
  this.project = project;
  this.name = 'Ember-leaflet for Ember CLI';
}

EmberCLIEmberLeaflet.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-ember-leaflet', name);
  
  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIEmberLeaflet.prototype.included = function included(app) {
  app.import('vendor/leaflet-dist/leaflet-src.js');
  app.import('vendor/leaflet.markerclusterer/dist/leaflet.markercluster-src.js');
  app.import('vendor/ember-leaflet/dist/ember-leaflet.js');

  app.import('vendor/leaflet-dist/leaflet.css');
  app.import('vendor/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
};

EmberCLIEmberLeaflet.prototype.postprocessTree = function postprocessTree(type, workingTree) {
  if (type === 'all') {
    var treePath = path.join('node_modules', 'ember-cli-ember-leaflet', 'vendor', 'leaflet-dist');
    var staticFiles = pickFiles(unwatchedTree(treePath), {
      srcDir: 'images',
      files: ['*.png'],
      destDir: '/assets/images'
    });

    return mergeTrees([workingTree, staticFiles]);
  } else {
    return workingTree;
  }
};

module.exports = EmberCLIEmberLeaflet;
