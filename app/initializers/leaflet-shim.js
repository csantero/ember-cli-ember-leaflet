/* jshint esnext: true */
/* global L */

export default {
  name: 'leaflet-shim',
  initialize: function () {
    L.Icon.Default.imagePath = 'assets/images';
  }
};
