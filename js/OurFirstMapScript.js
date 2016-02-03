// This script demonstrates some simple things one can do with leaflet.js

// 
var OurFirstMap = L.map('map').setView([29.95, -90.1], 11);

// set a tile layer to be CartoDB tiles 
var CartoDBTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});


// add these tiles to our map
OurFirstMap.addLayer(CartoDBTiles);

// add our first markers and shapes
//var OurFirstMarker = L.marker([29.95, -90.1]);
//OurFirstMarker.addTo(OurFirstMap);

// chained eqivalent
var OurFirstMarker = L.marker([29.95, -90.1]).addTo(OurFirstMap);


var OurFirstCircle = L.circle([29.95, -90.05], 1000, {
    color: 'green',
    fillColor: '#ccc',
    fillOpacity: 0.5
}).addTo(OurFirstMap);


var OurFirstPolygon = L.polygon([
    [29.923, -90.134],
    [29.91, -90.12],
    [29.934, -90.2]
]).addTo(OurFirstMap);



// binding popups to markers and shapes
OurFirstMarker.bindPopup("<h3>New Orleans City Center</h3>");
OurFirstCircle.bindPopup("This is a tight turn!");
OurFirstPolygon.bindPopup("Nothing to see here.");



// set up simple events on the map

var popup = L.popup();

function onMapClick(e) {
    console.log(e);
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at<br />" + e.latlng.toString())
        .openOn(OurFirstMap);
}

OurFirstMap.on('click', onMapClick);




