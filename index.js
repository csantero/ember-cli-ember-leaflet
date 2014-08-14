var path = require('path');
var fs = require('fs');

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
  app.import('vendor/ember-leaflet/dist/ember-leaflet.js', {
    exports: {
      'ember-leaflet': 'default'
    }
  });
  app.import('vendor/leaflet.markerclusterer/dist/leaflet.markercluster-src.js', {
    exports: {
      'L': 'default'
    }
  });
  app.import('vendor/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
};

module.exports = EmberCLIEmberLeaflet;
