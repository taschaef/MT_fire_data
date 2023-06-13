function createFeatures(fireMarkers) {

  //Define a function that we want to run for each feature 
  //Give each feature a popup that describes the location, fire year, fire size, and cause 
  function onEachFeature(feature,layer) {
    layer.bindPopup(`<h3>${feature.geometry.coordinates}</h3><hr>${feature.properties.FIRE_SIZE}<hr><p>${feature.properties.STAT_CAUSE_DESCR}<p>`);
  }

  //Create a GeoJSON layer that contains the features array on the fireMarkers object
  //Run the onEachFeature function once for each piece of data in the array
  var coFires = L.geoJSON(fireMarkers, {
    onEachFeature: onEachFeature
  });

  // Send our fire layer to the createMap function 
  createMap(coFires);
}

function createMap(coFires) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
  
  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object
  var baseMaps = {
    "Street Map" : street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay
  var overlayMaps = {
    CO_Fires: coFires
  };

  // Create our map giving it the streetmap and fire layers to display on load
  var myMap = L.map("map", {
    center: [
      39.2922222, -105.1830555
    ],
    zoom: 8,
    layers: [street, coFire]
  });

  // Create a layer control and pass it to our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  
}