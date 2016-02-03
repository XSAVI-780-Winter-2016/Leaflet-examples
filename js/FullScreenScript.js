// This script demonstrates some simple things one can do with leaflet.js

// 
var FullScreenMap = L.map('map').setView([29.95, -90.1], 11);

// set a tile layer to be CartoDB tiles 
var CartoDBTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// add these tiles to our map
FullScreenMap.addLayer(CartoDBTiles);

// locate the user via GPS or IP address
FullScreenMap.locate({setView: true, maxZoom: 16});