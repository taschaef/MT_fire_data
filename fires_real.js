// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
  center: [42.7475, -107.2085],
  zoom: 6
});

// Adding a tile layer for street view:
var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Adding a tile layer for topographic view:
var topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Define a base layers object to hold both tile layers
var baseLayers = {
  "Street View": streetLayer,
  "Topographic View": topoLayer
};

// Add the street layer as the default tile layer
streetLayer.addTo(myMap);

// Add the base layers control to the map
L.control.layers(baseLayers).addTo(myMap);

// Define a markerSize() function that will give each fire a different radius based on its size
function markerSize(FIRE_SIZE) {
  return Math.sqrt(FIRE_SIZE) * 50;
}

var fireData = [
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 95,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453469.5,
      "CONT_DOY": 99,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1199.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.35833333,
        45.30833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1935",
      "CONT_DATE": 2453614.5,
      "CONT_DOY": 244,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2700.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.95527778,
        45.44833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 188,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2453567.5,
      "CONT_DOY": 197,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 11357.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.03805556,
        38.16972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2453578.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 3025.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.17416667,
        44.37194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2453595.5,
      "CONT_DOY": 225,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 3875.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.37555556,
        47.73305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2453619.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1182.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.88444444,
        37.15583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1805",
      "CONT_DATE": 2453682.5,
      "CONT_DOY": 312,
      "CONT_TIME": "1015",
      "FIRE_SIZE": 13327.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.79583333,
        46.14833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "2300",
      "CONT_DATE": 2453650.5,
      "CONT_DOY": 280,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 1708.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.15194444,
        46.04333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1605",
      "CONT_DATE": 2453612.5,
      "CONT_DOY": 242,
      "CONT_TIME": "0815",
      "FIRE_SIZE": 6869.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.40472222,
        46.05361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1351",
      "CONT_DATE": 2453653.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 3200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.01138889,
        47.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1640",
      "CONT_DATE": 2453644.5,
      "CONT_DOY": 274,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 9082.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.68027778,
        47.01888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1638",
      "CONT_DATE": 2453644.5,
      "CONT_DOY": 274,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 1642.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5375,
        47.01944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 147,
      "DISCOVERY_TIME": "1545",
      "CONT_DATE": 2453884.5,
      "CONT_DOY": 149,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.23166667,
        37.21388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 191,
      "DISCOVERY_TIME": "1245",
      "CONT_DATE": 2453931.5,
      "CONT_DOY": 196,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.48333333,
        45.6125
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 171,
      "DISCOVERY_TIME": "1146",
      "CONT_DATE": 2453913.5,
      "CONT_DOY": 178,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1499.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0225,
        38.40138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1642",
      "CONT_DATE": 2454027.5,
      "CONT_DOY": 292,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 14000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.86861111,
        45.31583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2454027.5,
      "CONT_DOY": 292,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 207115.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.93472222,
        45.53611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1354",
      "CONT_DATE": 2454027.5,
      "CONT_DOY": 292,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6620.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.47361111,
        45.23472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "1045",
      "CONT_DATE": 2454027.5,
      "CONT_DOY": 292,
      "CONT_TIME": "1030",
      "FIRE_SIZE": 25828.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.39888889,
        45.43694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "0616",
      "CONT_DATE": 2453939.5,
      "CONT_DOY": 204,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 17552.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.97138889,
        45.49111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2454019.5,
      "CONT_DOY": 284,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 1840.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.59861111,
        47.52
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1712",
      "CONT_DATE": 2454040.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1467.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.54972222,
        47.53555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2454040.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1020.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.28055556,
        47.30361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2454018.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1560.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.44166667,
        48.68138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 163,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453899.5,
      "CONT_DOY": 164,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.34888889,
        43.31027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "2130",
      "CONT_DATE": 2453932.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 4242.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.42444444,
        43.81333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "0800",
      "CONT_DATE": 2454032.5,
      "CONT_DOY": 297,
      "CONT_TIME": "0908",
      "FIRE_SIZE": 1370.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.4175,
        45.83472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2454000.5,
      "CONT_DOY": 265,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2362.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.83777778,
        48.01694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 255,
      "DISCOVERY_TIME": "1436",
      "CONT_DATE": 2454000.5,
      "CONT_DOY": 265,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2271.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.86972222,
        47.38861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2453975.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 15387.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.79305556,
        45.01111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 170,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2453913.5,
      "CONT_DOY": 178,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1190.61,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.09805556,
        41.12972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2454039.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.25388889,
        46.395
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2453992.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1370.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.96638889,
        43.28972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2454055.5,
      "CONT_DOY": 320,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3895.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.92333333,
        43.1975
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "0630",
      "CONT_DATE": 2454024.5,
      "CONT_DOY": 289,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 16906.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.14055556,
        43.57305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453993.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 34581.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.45833333,
        44.01194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 188,
      "DISCOVERY_TIME": "1635",
      "CONT_DATE": 2454289.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2445.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.51444444,
        43.81416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 176,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2454291.5,
      "CONT_DOY": 191,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1974.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.53833333,
        44.32194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2454333.5,
      "CONT_DOY": 233,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10733.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.23916667,
        45.25194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 172,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2454358.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1146.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.43944444,
        46.84
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1724",
      "CONT_DATE": 2454433.5,
      "CONT_DOY": 333,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 60038.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.98805556,
        47.92333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1450",
      "CONT_DATE": 2454433.5,
      "CONT_DOY": 333,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 52505.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.04666667,
        47.53
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1320",
      "CONT_DATE": 2454386.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1011.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.18722222,
        46.11416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1620",
      "CONT_DATE": 2454386.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 21585.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.28083333,
        47.29944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2454386.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1408.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.21916667,
        47.67333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0850",
      "CONT_DATE": 2454386.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 16105.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.42222222,
        47.89166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2454309.5,
      "CONT_DOY": 209,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 3660.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.16944444,
        44.6975
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "1725",
      "CONT_DATE": 2454367.5,
      "CONT_DOY": 267,
      "CONT_TIME": "1039",
      "FIRE_SIZE": 1742.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.44888889,
        43.39861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2454382.5,
      "CONT_DOY": 282,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 2500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.23166667,
        45.29583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2454382.5,
      "CONT_DOY": 282,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 26600.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.52555556,
        45.23972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1239",
      "CONT_DATE": 2454359.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 29062.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.235,
        45.74833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2454346.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 18595.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.20777778,
        44.4075
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2454374.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 13450.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.67083333,
        44.60055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2454356.5,
      "CONT_DOY": 256,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 4742.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.07083333,
        44.585
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1859",
      "CONT_DATE": 2454379.5,
      "CONT_DOY": 279,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 46298.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.88222222,
        46.86972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2454432.5,
      "CONT_DOY": 332,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 44176.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.39527778,
        48.27138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1349",
      "CONT_DATE": 2454375.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 15297.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.25638889,
        45.69111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1904",
      "CONT_DATE": 2454375.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 25877.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.80944444,
        45.74444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "1327",
      "CONT_DATE": 2454374.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 25150.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.03694444,
        47.21638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "1451",
      "CONT_DATE": 2454405.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 14233.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.70027778,
        46.60194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1528",
      "CONT_DATE": 2454405.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 18222.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.66555556,
        46.49583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1108",
      "CONT_DATE": 2454405.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 36045.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.7425,
        46.3475
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1210",
      "CONT_DATE": 2454416.5,
      "CONT_DOY": 316,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 2582.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.94166667,
        43.23416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 172,
      "DISCOVERY_TIME": "1444",
      "CONT_DATE": 2454283.5,
      "CONT_DOY": 183,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8590.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.48,
        42.93111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2454395.5,
      "CONT_DOY": 295,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2714.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.86388889,
        43.1475
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2454367.5,
      "CONT_DOY": 267,
      "CONT_TIME": "1050",
      "FIRE_SIZE": 3074.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.12055556,
        43.67083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2454299.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1044.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.81666667,
        42.86666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2454358.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 29921.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.90138889,
        48.33472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 105,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2454571.5,
      "CONT_DOY": 106,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 1227.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.74055556,
        37.66638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2454673.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1435",
      "FIRE_SIZE": 10173.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.4875,
        45.16944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 161,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2454645.5,
      "CONT_DOY": 180,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 45814.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.76944444,
        37.52694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2454736.5,
      "CONT_DOY": 271,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 68148.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.8225,
        44.495
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 186,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2454795.5,
      "CONT_DOY": 330,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1587.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.26666667,
        38.55138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 259,
      "DISCOVERY_TIME": "1008",
      "CONT_DATE": 2454724.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1381.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.70555556,
        42.23027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2454787.5,
      "CONT_DOY": 322,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 15089.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.91277778,
        43.10833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 190,
      "DISCOVERY_TIME": "0826",
      "CONT_DATE": 2454731.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1485.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.20305556,
        38.98
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1737",
      "CONT_DATE": 2455135.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 6990.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.23527778,
        46.5525
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1643",
      "CONT_DATE": 2455129.5,
      "CONT_DOY": 298,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.42388889,
        48.615
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1610",
      "CONT_DATE": 2455071.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1945",
      "FIRE_SIZE": 2400.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.66361111,
        37.62972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 270,
      "DISCOVERY_TIME": "1122",
      "CONT_DATE": 2455133.5,
      "CONT_DOY": 302,
      "CONT_TIME": "1321",
      "FIRE_SIZE": 3257.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.2975,
        43.63333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2455102.5,
      "CONT_DOY": 271,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 7300.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.71833333,
        37.64638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2455155.5,
      "CONT_DOY": 324,
      "CONT_TIME": "1155",
      "FIRE_SIZE": 1932.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.31805556,
        47.41833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1845",
      "CONT_DATE": 2455113.5,
      "CONT_DOY": 282,
      "CONT_TIME": "1143",
      "FIRE_SIZE": 2120.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.31694444,
        45.62388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2455165.5,
      "CONT_DOY": 334,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1950.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.96305556,
        46.28805556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 256,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2455154.5,
      "CONT_DOY": 323,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 5280.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.71666667,
        46.06361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "0100",
      "CONT_DATE": 2455130.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 2514.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.88388889,
        46.23555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1733",
      "CONT_DATE": 2455073.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1622",
      "FIRE_SIZE": 2599.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.57555556,
        38.73888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 268,
      "DISCOVERY_TIME": "0500",
      "CONT_DATE": 2448910.5,
      "CONT_DOY": 289,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 7379.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.88333333,
        45.18333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 87,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2448708.5,
      "CONT_DOY": 87,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1477.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.31,
        43.60833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2449600.5,
      "CONT_DOY": 248,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2890.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.84333333,
        46.275
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2449627.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1564.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.22,
        47.85833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2449627.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 3507.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.27166667,
        47.95166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2449627.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 8497.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.33166667,
        47.71
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2449627.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1237.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.20666667,
        47.90666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2449606.5,
      "CONT_DOY": 254,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 10610.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.83333333,
        48.30333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "1535",
      "CONT_DATE": 2449609.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 12500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.99166667,
        45.67
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2449612.5,
      "CONT_DOY": 260,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1440.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.39666667,
        46.235
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 244,
      "DISCOVERY_TIME": "2015",
      "CONT_DATE": 2449600.5,
      "CONT_DOY": 248,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.62333333,
        45.04
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2449645.5,
      "CONT_DOY": 293,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.48833333,
        48.75333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0800",
      "CONT_DATE": 2449635.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.34166667,
        48.80833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0700",
      "CONT_DATE": 2449625.5,
      "CONT_DOY": 273,
      "CONT_TIME": "1830",
      "FIRE_SIZE": 1300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.92833333,
        48.90833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2449630.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1715.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.74333333,
        48.64166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1713",
      "CONT_DATE": 2449598.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2470.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.58833333,
        48.78166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2449596.5,
      "CONT_DOY": 244,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1420.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.565,
        48.86833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2449605.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1592.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.77833333,
        48.575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0743",
      "CONT_DATE": 2449579.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 2023.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.78,
        48.525
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2449599.5,
      "CONT_DOY": 247,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3245.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.66666667,
        48.43333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2449599.5,
      "CONT_DOY": 247,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1245.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.71666667,
        48.43333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2449626.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5897.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.71333333,
        48.48833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "1459",
      "CONT_DATE": 2449612.5,
      "CONT_DOY": 260,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 4217.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.43388889,
        46.70666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1720",
      "CONT_DATE": 2449569.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8203.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.76,
        47.425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1535",
      "CONT_DATE": 2449582.5,
      "CONT_DOY": 230,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7150.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.69166667,
        43.86666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 182,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2449540.5,
      "CONT_DOY": 188,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1221.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.05,
        40.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2449560.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 3190.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.475,
        39.965
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1735",
      "CONT_DATE": 2449598.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1077.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.65833333,
        43.67
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450292.5,
      "CONT_DOY": 210,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1135.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.36666667,
        38.29833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2450331.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.74833333,
        43.17833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1438",
      "CONT_DATE": 2450309.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3776.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.41,
        42.185
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450309.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3718.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.46666667,
        42.19833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2450321.5,
      "CONT_DOY": 239,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1906.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.34333333,
        44.80166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2450342.5,
      "CONT_DOY": 260,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.06027778,
        44.54944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2450290.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3840.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5725,
        37.81388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2450341.5,
      "CONT_DOY": 259,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 2780.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.80861111,
        43.11805556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 280,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2450368.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.79166667,
        42.91666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2450318.5,
      "CONT_DOY": 236,
      "CONT_TIME": null,
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.23,
        45.695
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2450338.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 14890.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.655,
        45.17833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 92,
      "DISCOVERY_TIME": "0930",
      "CONT_DATE": 2450177.5,
      "CONT_DOY": 95,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9523.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.62166667,
        37.62166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 139,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2450227.5,
      "CONT_DOY": 145,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 11875.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.33833333,
        39.33833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1245",
      "CONT_DATE": 2450317.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.84833333,
        46.87333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1514",
      "CONT_DATE": 2450358.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.89666667,
        45.735
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1820",
      "CONT_DATE": 2450376.5,
      "CONT_DOY": 294,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 4283.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.43,
        44.99333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": "1221",
      "CONT_DATE": 2451069.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1060.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.72833333,
        48.885
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2451078.5,
      "CONT_DOY": 265,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 3340.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.74,
        48.38666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2451086.5,
      "CONT_DOY": 273,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 3070.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.965,
        47.97833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1055",
      "CONT_DATE": 2451076.5,
      "CONT_DOY": 263,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1750.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.80333333,
        46.65333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1610",
      "CONT_DATE": 2451102.5,
      "CONT_DOY": 289,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3950.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.02333333,
        45.99166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1520",
      "CONT_DATE": 2451068.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 7038.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.25,
        47.455
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2451095.5,
      "CONT_DOY": 282,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.37666667,
        48.26666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 287,
      "DISCOVERY_TIME": "1419",
      "CONT_DATE": 2451466.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2516.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.4,
        44.85222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": 2451394.5,
      "CONT_DOY": 216,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1202.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.77083333,
        45.2625
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 229,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451780.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1418.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.10138889,
        44.50138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "0815",
      "CONT_DATE": 2451714.5,
      "CONT_DOY": 171,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10599.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.33527778,
        40.44527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 308,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2451486.5,
      "CONT_DOY": 308,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 10000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.46944444,
        43.45138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 301,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2451479.5,
      "CONT_DOY": 301,
      "CONT_TIME": "2350",
      "FIRE_SIZE": 1355.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.18861111,
        41.0325
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 294,
      "DISCOVERY_TIME": "1210",
      "CONT_DATE": 2451473.5,
      "CONT_DOY": 295,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.375,
        43.56861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2451823.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.53305556,
        46.76666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 260,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2451858.5,
      "CONT_DOY": 315,
      "CONT_TIME": "1559",
      "FIRE_SIZE": 1184.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.85638889,
        47.38527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2451755.5,
      "CONT_DOY": 212,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4345.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.94361111,
        47.92
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "1725",
      "CONT_DATE": 2451804.5,
      "CONT_DOY": 261,
      "CONT_TIME": "1801",
      "FIRE_SIZE": 1980.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.63555556,
        47.85861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1735",
      "CONT_DATE": 2451768.5,
      "CONT_DOY": 225,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1140.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.14,
        45.30277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1153",
      "CONT_DATE": 2451760.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 9264.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.93472222,
        45.59305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "2005",
      "CONT_DATE": 2451768.5,
      "CONT_DOY": 225,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 61649.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.20333333,
        45.31722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2451793.5,
      "CONT_DOY": 250,
      "CONT_TIME": "1155",
      "FIRE_SIZE": 1503.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.33611111,
        45.17916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1655",
      "CONT_DATE": 2451823.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 48300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.02333333,
        45.83
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1815",
      "CONT_DATE": 2451818.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6450.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.02333333,
        45.85833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2451849.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 11486.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.23333333,
        46.26916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1815",
      "CONT_DATE": 2451788.5,
      "CONT_DOY": 245,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.15861111,
        45.90055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2451789.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 21998.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.89333333,
        46.07333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1840",
      "CONT_DATE": 2451878.5,
      "CONT_DOY": 335,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 145040.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.01722222,
        45.96416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1745",
      "CONT_DATE": 2451878.5,
      "CONT_DOY": 335,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6333.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.80555556,
        46.24222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "2100",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.42333333,
        45.66333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1606",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 21487.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.155,
        45.645
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1858",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1450.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.07,
        45.65166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1420",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.18,
        45.68833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1640",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 13200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.42,
        45.635
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 229,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2451840.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2700.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.19,
        45.79166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2451854.5,
      "CONT_DOY": 311,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6249.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.26,
        45.51833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0858",
      "CONT_DATE": 2451878.5,
      "CONT_DOY": 335,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.09166667,
        46.02444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451809.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 14750.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.63472222,
        42.22444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1914",
      "CONT_DATE": 2451828.5,
      "CONT_DOY": 285,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 6600.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.26944444,
        43.96888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2451826.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 4500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.49694444,
        43.32916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2451813.5,
      "CONT_DOY": 270,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 9800.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.68527778,
        43.04944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.78472222,
        46.05055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "0915",
      "CONT_DATE": 2451756.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.48472222,
        45.9525
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451800.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 5895.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.13388889,
        48.66722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "2300",
      "CONT_DATE": 2451800.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 6660.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.33444444,
        48.76694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2451800.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 11115.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.16888889,
        48.81416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2451807.5,
      "CONT_DOY": 264,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1311.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.81138889,
        48.36638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2451793.5,
      "CONT_DOY": 250,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2768.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.61833333,
        48.75194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2451812.5,
      "CONT_DOY": 269,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9423.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.59583333,
        48.82444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451818.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3130.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.55222222,
        47.85027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1510",
      "CONT_DATE": 2451883.5,
      "CONT_DOY": 340,
      "CONT_TIME": "1344",
      "FIRE_SIZE": 1645.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.35083333,
        47.70166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 95,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2451638.5,
      "CONT_DOY": 95,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1050.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.09166667,
        37.20833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2451779.5,
      "CONT_DOY": 236,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 30000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.69444444,
        46.67
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1145",
      "CONT_DATE": 2451720.5,
      "CONT_DOY": 177,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 10800.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.39472222,
        39.41166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451799.5,
      "CONT_DOY": 256,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 10000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.81861111,
        47.21916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "0100",
      "CONT_DATE": 2451809.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 17817.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.625,
        47.23333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "2330",
      "CONT_DATE": 2451809.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1434.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.59916667,
        47.0425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2451809.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3713.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.70111111,
        47.20416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2451809.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1350.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.90638889,
        46.85888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2451849.5,
      "CONT_DOY": 306,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 23802.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.20638889,
        47.26472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "2110",
      "CONT_DATE": 2451849.5,
      "CONT_DOY": 306,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 3731.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.10416667,
        47.16138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0200",
      "CONT_DATE": 2451799.5,
      "CONT_DOY": 256,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 5730.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.95111111,
        47.03527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1555",
      "CONT_DATE": 2451789.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.33777778,
        44.92611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 150,
      "DISCOVERY_TIME": "1640",
      "CONT_DATE": 2451701.5,
      "CONT_DOY": 158,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 1469.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.53472222,
        38.57861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2452238.5,
      "CONT_DOY": 329,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2432.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.56527778,
        43.26888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 269,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452197.5,
      "CONT_DOY": 288,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 2084.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.94888889,
        47.23861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452193.5,
      "CONT_DOY": 284,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 26873.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.85777778,
        45.38611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2452197.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2560.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.17694444,
        45.18305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 269,
      "DISCOVERY_TIME": "0615",
      "CONT_DATE": 2452192.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4950.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.19611111,
        45.47
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1741",
      "CONT_DATE": 2452124.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1752",
      "FIRE_SIZE": 1794.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.51666667,
        47.71861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1801",
      "CONT_DATE": 2452123.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1803",
      "FIRE_SIZE": 8649.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.51777778,
        48.13444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1233",
      "CONT_DATE": 2452197.5,
      "CONT_DOY": 288,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 71000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.35027778,
        48.58583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 256,
      "DISCOVERY_TIME": "1721",
      "CONT_DATE": 2452165.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9674.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.30194444,
        47.23555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452183.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1684.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 8.0,
      "STAT_CAUSE_DESCR": "Children"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.80638889,
        47.06222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2452187.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2338.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.57861111,
        46.74222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 272,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2452182.5,
      "CONT_DOY": 273,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 7600.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.93583333,
        47.74833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1725",
      "CONT_DATE": 2452129.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 14990.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.08333333,
        43.7125
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452226.5,
      "CONT_DOY": 317,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 4019.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.17416667,
        44.10916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 203,
      "DISCOVERY_TIME": "0756",
      "CONT_DATE": 2452139.5,
      "CONT_DOY": 230,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4470.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.94305556,
        43.41333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 189,
      "DISCOVERY_TIME": "2106",
      "CONT_DATE": 2452211.5,
      "CONT_DOY": 302,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1270.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.795,
        40.66166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2452164.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5410.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.25777778,
        42.17
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 311,
      "DISCOVERY_TIME": "1141",
      "CONT_DATE": 2452220.5,
      "CONT_DOY": 311,
      "CONT_TIME": "1615",
      "FIRE_SIZE": 1268.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.36805556,
        40.85638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 160,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2452494.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 73121.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.78305556,
        37.43333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5538.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.22777778,
        40.09805556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1533",
      "CONT_DATE": 2452550.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 14403.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.78138889,
        40.70833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1335",
      "CONT_DATE": 2452550.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 16852.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.81444444,
        40.81472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1148",
      "CONT_DATE": 2452550.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 4400.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.69166667,
        40.30833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1445",
      "CONT_DATE": 2452482.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4348.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.38222222,
        40.28555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 236,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": 2452527.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 13433.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.79083333,
        42.62083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "0915",
      "CONT_DATE": 2452527.5,
      "CONT_DOY": 253,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 5859.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.69166667,
        45.13666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "0930",
      "CONT_DATE": 2452526.5,
      "CONT_DOY": 252,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 69900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.11888889,
        45.66138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452512.5,
      "CONT_DOY": 238,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2016.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.76666667,
        45.68333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1523",
      "CONT_DATE": 2452554.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2620.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.47944444,
        42.82694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2452501.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.53944444,
        42.96
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 173,
      "DISCOVERY_TIME": "1321",
      "CONT_DATE": 2452554.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1235",
      "FIRE_SIZE": 13493.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.49472222,
        39.68444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "1303",
      "CONT_DATE": 2452579.5,
      "CONT_DOY": 305,
      "CONT_TIME": "0904",
      "FIRE_SIZE": 17056.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.28666667,
        39.99416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 159,
      "DISCOVERY_TIME": "1243",
      "CONT_DATE": 2452554.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1225",
      "FIRE_SIZE": 12209.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.42333333,
        39.54333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 158,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2452523.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 14855.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.41,
        42.31222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 140,
      "DISCOVERY_TIME": "1445",
      "CONT_DATE": 2452424.5,
      "CONT_DOY": 150,
      "CONT_TIME": "1409",
      "FIRE_SIZE": 1409.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.49944444,
        38.425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 140,
      "DISCOVERY_TIME": "1125",
      "CONT_DATE": 2452425.5,
      "CONT_DOY": 151,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2244.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.43972222,
        38.34916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 113,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": 2452393.5,
      "CONT_DOY": 119,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 2312.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.525,
        39.425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 142,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2452421.5,
      "CONT_DOY": 147,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4085.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.19166667,
        39.25
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 159,
      "DISCOVERY_TIME": "1631",
      "CONT_DATE": 2452473.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 137760.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.40833333,
        39.0575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 146,
      "DISCOVERY_TIME": "1436",
      "CONT_DATE": 2452421.5,
      "CONT_DOY": 147,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1350.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.87833333,
        37.185
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 170,
      "DISCOVERY_TIME": "1250",
      "CONT_DATE": 2452487.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9294.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.6675,
        37.62694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1723",
      "CONT_DATE": 2452899.5,
      "CONT_DOY": 260,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 4000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.18666667,
        47.47138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1149",
      "CONT_DATE": 2452838.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1210.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.70333333,
        46.71333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1645",
      "CONT_DATE": 2452933.5,
      "CONT_DOY": 294,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 1973.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.94777778,
        45.33083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 187,
      "DISCOVERY_TIME": "2030",
      "CONT_DATE": 2452841.5,
      "CONT_DOY": 202,
      "CONT_TIME": "2030",
      "FIRE_SIZE": 1869.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.53,
        37.50555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1114",
      "CONT_DATE": 2452955.5,
      "CONT_DOY": 316,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 37405.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.6425,
        47.08611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1114",
      "CONT_DATE": 2452955.5,
      "CONT_DOY": 316,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1802.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.83166667,
        46.91277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2452929.5,
      "CONT_DOY": 290,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 11300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.83194444,
        47.41916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1650",
      "CONT_DATE": 2452849.5,
      "CONT_DOY": 210,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 3599.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.80555556,
        43.20527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 229,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452946.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3055.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.36666667,
        43.95583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "0705",
      "CONT_DATE": 2452869.5,
      "CONT_DOY": 230,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 2843.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.45055556,
        46.80222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1335",
      "CONT_DATE": 2452874.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1021.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.52666667,
        46.66138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2452924.5,
      "CONT_DOY": 285,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3275.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.06861111,
        45.41861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2451847.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 46681.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.3175,
        45.84194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "2115",
      "CONT_DATE": 2452944.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 8296.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.93222222,
        46.37083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2452944.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1350.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.20083333,
        46.45194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452900.5,
      "CONT_DOY": 261,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 3008.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.65583333,
        46.96472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1245",
      "CONT_DATE": 2452900.5,
      "CONT_DOY": 261,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 33948.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.75388889,
        46.85027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1215",
      "CONT_DATE": 2452861.5,
      "CONT_DOY": 222,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 25202.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.83472222,
        47.02527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "2300",
      "CONT_DATE": 2452940.5,
      "CONT_DOY": 301,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 14194.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.91055556,
        48.18944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452927.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 50981.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.55111111,
        48.88361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2452941.5,
      "CONT_DOY": 302,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 57273.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.16583333,
        48.49388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2452940.5,
      "CONT_DOY": 301,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 2615.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.01444444,
        48.33444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 4992.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.4925,
        47.52
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1172.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.40777778,
        47.46222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2452851.5,
      "CONT_DOY": 212,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1034.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.12027778,
        43.31277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 280,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2452924.5,
      "CONT_DOY": 285,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1663.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2275,
        42.21416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2452927.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 3148.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.23472222,
        47.53138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 14845.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.23805556,
        47.41916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1740.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.36527778,
        47.30361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2452897.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 11213.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.33611111,
        47.78111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 11772.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.38666667,
        47.46222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452974.5,
      "CONT_DOY": 335,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1529.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.34416667,
        47.50555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "0800",
      "CONT_DATE": 2452923.5,
      "CONT_DOY": 284,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 7520.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.73833333,
        48.01555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "2230",
      "CONT_DATE": 2452907.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2106.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.62083333,
        46.74222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0030",
      "CONT_DATE": 2452897.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1072.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.39,
        45.99277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "0930",
      "CONT_DATE": 2452897.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1029.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.41333333,
        45.56888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1026",
      "CONT_DATE": 2452959.5,
      "CONT_DOY": 320,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.42444444,
        45.11972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2452872.5,
      "CONT_DOY": 233,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3010.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.10305556,
        44.88916667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452892.5,
      "CONT_DOY": 253,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 7400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.65138889,
        44.98611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "0830",
      "CONT_DATE": 2452852.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6980.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.35916667,
        44.89416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1144",
      "CONT_DATE": 2452885.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5425.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.88222222,
        44.30444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1325",
      "CONT_DATE": 2452884.5,
      "CONT_DOY": 245,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10953.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.56972222,
        44.13166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1603",
      "CONT_DATE": 2452885.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1462.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.76555556,
        44.38722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 126,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2453133.5,
      "CONT_DOY": 129,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.14111111,
        45.65083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453224.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3387.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.09166667,
        45.16666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2449565.5,
      "CONT_DOY": 213,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4268.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5579,
        47.8274
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1045",
      "CONT_DATE": 2449583.5,
      "CONT_DOY": 231,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7494.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.4635,
        47.3541
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 297,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451477.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1236.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.4993,
        47.3638
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 93,
      "DISCOVERY_TIME": "1020",
      "CONT_DATE": 2448714.5,
      "CONT_DOY": 93,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 4000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.9509,
        48.55
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 124,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2448746.5,
      "CONT_DOY": 125,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.9009,
        48.65
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 109,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2449461.5,
      "CONT_DOY": 109,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 1550.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.0509,
        48.75
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1637",
      "CONT_DATE": 2449575.5,
      "CONT_DOY": 223,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1080.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.2509,
        48.8
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2450311.5,
      "CONT_DOY": 229,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 4000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.9843,
        48.6
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1443",
      "CONT_DATE": 2449579.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1445",
      "FIRE_SIZE": 3554.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.534,
        45.25
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 250,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2449604.5,
      "CONT_DOY": 252,
      "CONT_TIME": "1450",
      "FIRE_SIZE": 1827.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2507,
        45.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1335",
      "CONT_DATE": 2450286.5,
      "CONT_DOY": 204,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 4290.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7507,
        45.7166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1552",
      "CONT_DATE": 2450300.5,
      "CONT_DOY": 218,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 7162.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8034,
        45.6089
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1356",
      "CONT_DATE": 2450297.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2948.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6688,
        45.7802
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1638",
      "CONT_DATE": 2450297.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1855.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3515,
        45.7214
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 287,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2450375.5,
      "CONT_DOY": 293,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 10095.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3673,
        45.5
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 83,
      "DISCOVERY_TIME": "1355",
      "CONT_DATE": 2448704.5,
      "CONT_DOY": 83,
      "CONT_TIME": "2030",
      "FIRE_SIZE": 1190.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.334,
        48.25
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 55,
      "DISCOVERY_TIME": "1451",
      "CONT_DATE": 2449772.5,
      "CONT_DOY": 55,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.684,
        48.0333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1997,
      "DISCOVERY_DOY": 290,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2450738.5,
      "CONT_DOY": 290,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 2081.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4174,
        48.2
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1240",
      "CONT_DATE": 2450300.5,
      "CONT_DOY": 218,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 1152.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.7992,
        48.1242
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": "1704",
      "CONT_DATE": 2451483.5,
      "CONT_DOY": 305,
      "CONT_TIME": "0100",
      "FIRE_SIZE": 2436.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5397,
        48.1067
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2449609.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 60300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8839,
        45.45
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1232",
      "CONT_DATE": 2450316.5,
      "CONT_DOY": 234,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1074.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3547,
        45.6531
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2451011.5,
      "CONT_DOY": 198,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 2050.1,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4353,
        45.6861
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 236,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2451418.5,
      "CONT_DOY": 240,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.8452,
        48.3222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 186,
      "DISCOVERY_TIME": "1939",
      "CONT_DATE": 2449538.5,
      "CONT_DOY": 186,
      "CONT_TIME": "2339",
      "FIRE_SIZE": 1344.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5007,
        43.0
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1545",
      "CONT_DATE": 2449568.5,
      "CONT_DOY": 216,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7271.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9642,
        37.1167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 191,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2449180.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 12410.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.284,
        40.5166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1255",
      "CONT_DATE": 2449185.5,
      "CONT_DOY": 198,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 2400.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9173,
        40.8333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1457",
      "CONT_DATE": 2449218.5,
      "CONT_DOY": 231,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 9600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3006,
        40.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 273,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2449262.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3940.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0173,
        40.7166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1353",
      "CONT_DATE": 2449533.5,
      "CONT_DOY": 181,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1798.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.634,
        40.1333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1435",
      "CONT_DATE": 2449548.5,
      "CONT_DOY": 196,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 1800.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6506,
        40.7666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1620",
      "CONT_DATE": 2449552.5,
      "CONT_DOY": 200,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1150.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.934,
        40.6833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1609",
      "CONT_DATE": 2449597.5,
      "CONT_DOY": 245,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1300.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3673,
        40.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 259,
      "DISCOVERY_TIME": "1522",
      "CONT_DATE": 2449978.5,
      "CONT_DOY": 261,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1069.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6507,
        40.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1755",
      "CONT_DATE": 2450299.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 2000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.584,
        40.3002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450304.5,
      "CONT_DOY": 222,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 13775.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3645,
        40.3166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 273,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2451454.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1384.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5109,
        39.775
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "0911",
      "CONT_DATE": 2449535.5,
      "CONT_DOY": 183,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.734,
        39.4
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 184,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2449550.5,
      "CONT_DOY": 198,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2115.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4173,
        39.5666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2449549.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3625.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9007,
        39.2166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2450293.5,
      "CONT_DOY": 211,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5580.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6673,
        39.4
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1997,
      "DISCOVERY_DOY": 180,
      "DISCOVERY_TIME": "1004",
      "CONT_DATE": 2450667.5,
      "CONT_DOY": 219,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 4600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9507,
        39.4833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1108",
      "CONT_DATE": 2451367.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2152.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9507,
        39.0233
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1220",
      "CONT_DATE": 2451367.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1770.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.984,
        39.1397
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1438",
      "CONT_DATE": 2451367.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1379.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.984,
        39.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2451367.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2148.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9507,
        39.0233
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1329",
      "CONT_DATE": 2449541.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3848.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6839,
        38.85
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2449542.5,
      "CONT_DOY": 190,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1087.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9673,
        37.9333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1342",
      "CONT_DATE": 2449549.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1631.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0007,
        38.3
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1250",
      "CONT_DATE": 2451371.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2607.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4734,
        38.1678
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1605",
      "CONT_DATE": 2449577.5,
      "CONT_DOY": 225,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1220.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.2342,
        46.9499
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 139,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2448760.5,
      "CONT_DOY": 139,
      "CONT_TIME": "2345",
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0507,
        48.85
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 269,
      "DISCOVERY_TIME": "1413",
      "CONT_DATE": 2449988.5,
      "CONT_DOY": 271,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 3506.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3545,
        48.0956
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 163,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2448787.5,
      "CONT_DOY": 166,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1650.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7507,
        47.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2449565.5,
      "CONT_DOY": 213,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1220.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6673,
        46.95
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2449607.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0339,
        45.1
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1821",
      "CONT_DATE": 2449609.5,
      "CONT_DOY": 257,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 2830.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9006,
        45.2
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "2340",
      "CONT_DATE": 2449608.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8339,
        45.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2449930.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.7007,
        45.3166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1559",
      "CONT_DATE": 2450299.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1350.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4039,
        45.025
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2450305.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 30700.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2845,
        46.0144
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450304.5,
      "CONT_DOY": 222,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8317,
        46.2739
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "2100",
      "CONT_DATE": 2450313.5,
      "CONT_DOY": 231,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3005,
        46.0333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1997,
      "DISCOVERY_DOY": 78,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450526.5,
      "CONT_DOY": 78,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2673,
        46.0833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 133,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2450950.5,
      "CONT_DOY": 137,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1033.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.5725,
        46.0247
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 137,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450954.5,
      "CONT_DOY": 141,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5680.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8359,
        47.4094
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2451063.5,
      "CONT_DOY": 250,
      "CONT_TIME": "0000",
      "FIRE_SIZE": 20921.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.185,
        46.4764
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451056.5,
      "CONT_DOY": 243,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0671,
        45.3411
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451385.5,
      "CONT_DOY": 207,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 33000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8079,
        46.6328
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2451383.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.791,
        46.4752
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "2010",
      "CONT_DATE": 2451419.5,
      "CONT_DOY": 241,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 6480.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4355,
        45.7517
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2451484.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 3800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.0663,
        45.81
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 181,
      "DISCOVERY_TIME": "1245",
      "CONT_DATE": 2449539.5,
      "CONT_DOY": 187,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 3630.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2672,
        42.2666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2449589.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 13400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.5339,
        44.7666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2449965.5,
      "CONT_DOY": 248,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1667.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3839,
        43.15
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1701",
      "CONT_DATE": 2450299.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1035",
      "FIRE_SIZE": 14700.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1339,
        42.8833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1159",
      "CONT_DATE": 2450299.5,
      "CONT_DOY": 217,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 1600.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6172,
        44.5
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2450299.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1730.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.5506,
        43.8833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2450305.5,
      "CONT_DOY": 223,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 1520.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4339,
        42.95
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1518",
      "CONT_DATE": 2450306.5,
      "CONT_DOY": 224,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1160.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.7506,
        43.1333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1257",
      "CONT_DATE": 2450309.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 4000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8505,
        42.3833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "0930",
      "CONT_DATE": 2450314.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3068.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2839,
        44.5666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1343",
      "CONT_DATE": 2450319.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1075.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3839,
        44.6166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2450331.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 53930.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6672,
        42.9
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2450357.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 9290.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1672,
        42.9166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1997,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "1345",
      "CONT_DATE": 2450695.5,
      "CONT_DOY": 247,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4415.1,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.0938,
        43.6583
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2451068.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1300.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8739,
        44.9889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1159",
      "CONT_DATE": 2451413.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1329.3,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.012,
        43.6147
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": "1346",
      "CONT_DATE": 2451483.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 20000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6367,
        43.8803
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 266,
      "DISCOVERY_TIME": "1205",
      "CONT_DATE": 2448890.5,
      "CONT_DOY": 269,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1216.2,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.834,
        42.4166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 191,
      "DISCOVERY_TIME": "1750",
      "CONT_DATE": 2449180.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2910.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5673,
        41.4333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2449592.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1784.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3674,
        41.15
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "0840",
      "CONT_DATE": 2449571.5,
      "CONT_DOY": 219,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1665.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5006,
        43.6166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2450313.5,
      "CONT_DOY": 231,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4525.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.884,
        43.85
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1725",
      "CONT_DATE": 2450314.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1425.4,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7673,
        44.0666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2450322.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1403.3,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3006,
        43.9
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2450325.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 38858.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5673,
        43.55
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1746",
      "CONT_DATE": 2450324.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1466.3,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5506,
        43.85
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2450324.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4793.1,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4173,
        43.7333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1811",
      "CONT_DATE": 2450324.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 48843.6,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.734,
        43.65
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2450326.5,
      "CONT_DOY": 244,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3741.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.384,
        44.1666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 285,
      "DISCOVERY_TIME": "1850",
      "CONT_DATE": 2450368.5,
      "CONT_DOY": 286,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1187.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.734,
        43.65
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 188,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2201.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9124,
        40.6317
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "0100",
      "CONT_DATE": 2450350.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 2149.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.90502,
        40.6318
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1355",
      "CONT_DATE": 2450319.5,
      "CONT_DOY": 237,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4781.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5004,
        37.2294
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2238.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.16718,
        48.70209
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2449686.5,
      "CONT_DOY": 334,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 8055.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.06689,
        48.74367
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1901",
      "CONT_DATE": 2449686.5,
      "CONT_DOY": 334,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 3954.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.36123,
        48.96763
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1650",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 8758.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.90627,
        48.81099
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 10812.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.128,
        48.64516
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2449965.5,
      "CONT_DOY": 248,
      "CONT_TIME": "2345",
      "FIRE_SIZE": 2500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4264,
        45.5744
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1608",
      "CONT_DATE": 2449625.5,
      "CONT_DOY": 273,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 4728.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.26742,
        44.59995
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1933",
      "CONT_DATE": 2449579.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.20075,
        44.61661
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1570.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.30236,
        44.56441
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "2300",
      "CONT_DATE": 2451797.5,
      "CONT_DOY": 254,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5698,
        47.3149
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1337",
      "CONT_DATE": 2451796.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 12000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.6307,
        47.3883
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2451797.5,
      "CONT_DOY": 254,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1118.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.676,
        47.2916
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2453638.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 8500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.641,
        47.3472
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1055",
      "CONT_DATE": 2453956.5,
      "CONT_DOY": 221,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1035.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.3385,
        47.4094
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2454009.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.9676,
        47.3708
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1113",
      "CONT_DATE": 2454332.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3045.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.4426,
        47.636
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1456",
      "CONT_DATE": 2454378.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 36388.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.7315,
        47.1894
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "0100",
      "CONT_DATE": 2454708.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2022.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5274,
        47.82
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1556",
      "CONT_DATE": 2452492.5,
      "CONT_DOY": 218,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 6300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.3009,
        48.7833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 292,
      "DISCOVERY_TIME": "0430",
      "CONT_DATE": 2452932.5,
      "CONT_DOY": 293,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.6495,
        48.6355
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1842",
      "CONT_DATE": 2451799.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 5000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2935,
        45.7311
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1547",
      "CONT_DATE": 2452863.5,
      "CONT_DOY": 224,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3965,
        45.4205
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1827",
      "CONT_DATE": 2452871.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3942.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.277,
        45.7291
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "1637",
      "CONT_DATE": 2453575.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 5800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1283,
        45.1622
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1214",
      "CONT_DATE": 2453609.5,
      "CONT_DOY": 239,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1033.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7555,
        45.5833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1645",
      "CONT_DATE": 2453936.5,
      "CONT_DOY": 201,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3388.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8833,
        45.4
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2453938.5,
      "CONT_DOY": 203,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2806.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8833,
        45.4
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1710",
      "CONT_DATE": 2453949.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5273.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2539,
        45.1644
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1514",
      "CONT_DATE": 2453970.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1446.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1367,
        45.6633
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 90,
      "DISCOVERY_TIME": "1115",
      "CONT_DATE": 2451999.5,
      "CONT_DOY": 90,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1120.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5174,
        48.4833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 292,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2452931.5,
      "CONT_DOY": 292,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 3885.5,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.784,
        48.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "0530",
      "CONT_DATE": 2453945.5,
      "CONT_DOY": 210,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 5154.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5574,
        48.2925
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 258,
      "DISCOVERY_TIME": "1734",
      "CONT_DATE": 2454358.5,
      "CONT_DOY": 258,
      "CONT_TIME": "2234",
      "FIRE_SIZE": 1051.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5977,
        48.1794
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2452855.5,
      "CONT_DOY": 216,
      "CONT_TIME": "0045",
      "FIRE_SIZE": 1265.2,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4011,
        48.2486
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2452868.5,
      "CONT_DOY": 229,
      "CONT_TIME": "0420",
      "FIRE_SIZE": 6836.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3878,
        48.2303
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 106,
      "DISCOVERY_TIME": "1420",
      "CONT_DATE": 2453476.5,
      "CONT_DOY": 106,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1011.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8581,
        48.1956
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1455",
      "CONT_DATE": 2453941.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 5555.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3142,
        48.3611
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1347",
      "CONT_DATE": 2453942.5,
      "CONT_DOY": 207,
      "CONT_TIME": "2031",
      "FIRE_SIZE": 1435.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8083,
        48.2889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1927",
      "CONT_DATE": 2453956.5,
      "CONT_DOY": 221,
      "CONT_TIME": "0030",
      "FIRE_SIZE": 1158.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6053,
        48.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0715",
      "CONT_DATE": 2452875.5,
      "CONT_DOY": 236,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 25490.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.0153,
        45.6314
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1632",
      "CONT_DATE": 2452864.5,
      "CONT_DOY": 225,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 2500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3931,
        45.6589
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452880.5,
      "CONT_DOY": 241,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9180.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4711,
        45.6247
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 191,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451741.5,
      "CONT_DOY": 198,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3840.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3579,
        43.6497
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2451784.5,
      "CONT_DOY": 241,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 137069.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5921,
        43.3025
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "1235",
      "CONT_DATE": 2451812.5,
      "CONT_DOY": 269,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1755.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0521,
        43.6191
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 181,
      "DISCOVERY_TIME": "1340",
      "CONT_DATE": 2452470.5,
      "CONT_DOY": 196,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 15000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1326,
        42.95
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 157,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2453900.5,
      "CONT_DOY": 165,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1044.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0756,
        43.0339
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1420",
      "CONT_DATE": 2453963.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1240.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.039,
        43.0144
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2452502.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1360.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2423,
        37.1722
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2452852.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2160.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2203,
        37.1483
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 189,
      "DISCOVERY_TIME": "1445",
      "CONT_DATE": 2454293.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1550.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.26774,
        37.19769
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "0725",
      "CONT_DATE": 2451774.5,
      "CONT_DOY": 231,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3888.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5868,
        37.2014
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": 2453263.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1116.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2706,
        37.0311
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 109,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2451654.5,
      "CONT_DOY": 111,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.34531,
        38.41526
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 259,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2451808.5,
      "CONT_DOY": 265,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1087.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.35,
        39.9469
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 135,
      "DISCOVERY_TIME": "1643",
      "CONT_DATE": 2452413.5,
      "CONT_DOY": 139,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 8000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.1994,
        37.0722
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 153,
      "DISCOVERY_TIME": "1310",
      "CONT_DATE": 2452433.5,
      "CONT_DOY": 159,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4439.4,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.50257,
        38.29781
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 276,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2454741.5,
      "CONT_DOY": 276,
      "CONT_TIME": "2133",
      "FIRE_SIZE": 1600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.322197,
        38.4989
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 149,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2451696.5,
      "CONT_DOY": 153,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2101.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6912,
        40.1011
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1532",
      "CONT_DATE": 2451758.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1737",
      "FIRE_SIZE": 11032.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9173,
        40.6772
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1556",
      "CONT_DATE": 2451749.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1589.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6382,
        40.0805
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1538",
      "CONT_DATE": 2451752.5,
      "CONT_DOY": 209,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4030.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2229,
        39.775
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "2010",
      "CONT_DATE": 2451755.5,
      "CONT_DOY": 212,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 8603.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3993,
        40.3305
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1442",
      "CONT_DATE": 2451750.5,
      "CONT_DOY": 207,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 2553.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0256,
        40.8439
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1712",
      "CONT_DATE": 2452125.5,
      "CONT_DOY": 216,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1133.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4698,
        40.0839
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452162.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1061.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9632,
        40.7533
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1715",
      "CONT_DATE": 2452146.5,
      "CONT_DOY": 237,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1919.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4807,
        40.0739
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 173,
      "DISCOVERY_TIME": "1306",
      "CONT_DATE": 2452458.5,
      "CONT_DOY": 184,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2141.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3962,
        40.2294
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1317",
      "CONT_DATE": 2452492.5,
      "CONT_DOY": 218,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3906.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4351,
        40.0983
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 167,
      "DISCOVERY_TIME": "1615",
      "CONT_DATE": 2452862.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 1503.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.437,
        39.7803
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 158,
      "DISCOVERY_TIME": "1337",
      "CONT_DATE": 2453214.5,
      "CONT_DOY": 210,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 7815.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.189,
        39.9508
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 188,
      "DISCOVERY_TIME": "1115",
      "CONT_DATE": 2453619.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2896.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1062,
        40.0461
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1429",
      "CONT_DATE": 2453907.5,
      "CONT_DOY": 172,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3347.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.7647,
        40.6244
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1105",
      "CONT_DATE": 2453935.5,
      "CONT_DOY": 200,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3550.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7456,
        40.8425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1546",
      "CONT_DATE": 2453971.5,
      "CONT_DOY": 236,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 2207.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0936,
        40.5067
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1527",
      "CONT_DATE": 2454326.5,
      "CONT_DOY": 226,
      "CONT_TIME": "1510",
      "FIRE_SIZE": 2240.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5892,
        40.8817
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1915",
      "CONT_DATE": 2454336.5,
      "CONT_DOY": 236,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 3536.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.197,
        40.4789
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1725",
      "CONT_DATE": 2454708.5,
      "CONT_DOY": 243,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 25385.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9967,
        40.7861
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1845",
      "CONT_DATE": 2454705.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5395.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9137,
        40.6727
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1557",
      "CONT_DATE": 2454721.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1031.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0329,
        40.1136
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2455059.5,
      "CONT_DOY": 228,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 1340.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5979,
        40.0241
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1249",
      "CONT_DATE": 2455053.5,
      "CONT_DOY": 222,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2068.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5307,
        40.5361
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1210",
      "CONT_DATE": 2451734.5,
      "CONT_DOY": 191,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4580.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.984,
        38.5667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 159,
      "DISCOVERY_TIME": "1212",
      "CONT_DATE": 2452453.5,
      "CONT_DOY": 179,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1418.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.907,
        39.4694
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 160,
      "DISCOVERY_TIME": "1314",
      "CONT_DATE": 2452453.5,
      "CONT_DOY": 179,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2533.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9507,
        38.9339
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1311",
      "CONT_DATE": 2452488.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2400.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1128,
        39.4528
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 189,
      "DISCOVERY_TIME": "1450",
      "CONT_DATE": 2452838.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5292.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4283,
        39.5628
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1437",
      "CONT_DATE": 2452837.5,
      "CONT_DOY": 198,
      "CONT_TIME": "0946",
      "FIRE_SIZE": 1232.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 8.0,
      "STAT_CAUSE_DESCR": "Children"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.0275,
        39.6611
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1245",
      "CONT_DATE": 2452845.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1006.8,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0262,
        38.5561
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 203,
      "DISCOVERY_TIME": "1408",
      "CONT_DATE": 2452849.5,
      "CONT_DOY": 210,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1161.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8801,
        38.6817
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 168,
      "DISCOVERY_TIME": "2123",
      "CONT_DATE": 2454272.5,
      "CONT_DOY": 172,
      "CONT_TIME": "1646",
      "FIRE_SIZE": 1016.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2997,
        39.1911
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 169,
      "DISCOVERY_TIME": "1340",
      "CONT_DATE": 2454285.5,
      "CONT_DOY": 185,
      "CONT_TIME": "1601",
      "FIRE_SIZE": 1240.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4736,
        39.575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1437",
      "CONT_DATE": 2451751.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1078.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9012,
        37.5183
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1407",
      "CONT_DATE": 2451771.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1430",
      "FIRE_SIZE": 3211.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5479,
        37.9805
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1352",
      "CONT_DATE": 2452449.5,
      "CONT_DOY": 175,
      "CONT_TIME": "1447",
      "FIRE_SIZE": 1084.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.02,
        38.615
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "1450",
      "CONT_DATE": 2452847.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2009.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4531,
        38.0169
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2453195.5,
      "CONT_DOY": 191,
      "CONT_TIME": "1150",
      "FIRE_SIZE": 2806.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8534,
        38.9314
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1455",
      "CONT_DATE": 2453265.5,
      "CONT_DOY": 261,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 4187.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6087,
        38.408
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2453578.5,
      "CONT_DOY": 208,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2381.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2997,
        37.2228
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2453576.5,
      "CONT_DOY": 206,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 2100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1069,
        46.0178
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2453937.5,
      "CONT_DOY": 202,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 91897.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1094,
        46.1289
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2453937.5,
      "CONT_DOY": 202,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1167.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4808,
        45.2653
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2453945.5,
      "CONT_DOY": 210,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1600.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.5317,
        46.6617
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1322",
      "CONT_DATE": 2451753.5,
      "CONT_DOY": 210,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3058.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.4014,
        44.5841
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1435",
      "CONT_DATE": 2451817.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 12457.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.06256,
        46.31994
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451837.5,
      "CONT_DOY": 294,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 17118.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.53535,
        46.73716
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1639",
      "CONT_DATE": 2451817.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 81220.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.27376,
        46.20297
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2452122.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2640.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3965,
        47.8028
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 105,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452380.5,
      "CONT_DOY": 106,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1651.7,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4523,
        48.6903
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1034",
      "CONT_DATE": 2453207.5,
      "CONT_DOY": 203,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1050.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1341,
        48.05
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "0845",
      "CONT_DATE": 2453582.5,
      "CONT_DOY": 212,
      "CONT_TIME": "1650",
      "FIRE_SIZE": 1968.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0204,
        47.5892
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1113",
      "CONT_DATE": 2453967.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4524.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0589,
        47.3072
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 316,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2454421.5,
      "CONT_DOY": 321,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1470.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.4789,
        47.2083
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 31,
      "DISCOVERY_TIME": "0200",
      "CONT_DATE": 2454870.5,
      "CONT_DOY": 39,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 14490.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.3772,
        47.4456
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2453583.5,
      "CONT_DOY": 213,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1210.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1301,
        48.7064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2453942.5,
      "CONT_DOY": 207,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 6580.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4672,
        48.085
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2454308.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 5284.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7747,
        48.2547
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451777.5,
      "CONT_DOY": 234,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 8000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.368,
        45.375
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "0745",
      "CONT_DATE": 2451790.5,
      "CONT_DOY": 247,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 1414.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8575,
        46.2922
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "0100",
      "CONT_DATE": 2451796.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 4180.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.0386,
        45.7319
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "0001",
      "CONT_DATE": 2451806.5,
      "CONT_DOY": 263,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6370.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.863,
        45.9806
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 134,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2452051.5,
      "CONT_DOY": 142,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1685,
        46.6844
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2452463.5,
      "CONT_DOY": 189,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 9700.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9695,
        45.0225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452474.5,
      "CONT_DOY": 200,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2921.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.039,
        46.2494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2452828.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1372.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8484,
        47.6086
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2452847.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1750",
      "FIRE_SIZE": 125900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.5123,
        47.5994
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2452844.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.7475,
        45.5808
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "0700",
      "CONT_DATE": 2452856.5,
      "CONT_DOY": 217,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1650.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.9442,
        45.8494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1029",
      "CONT_DATE": 2452867.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1153",
      "FIRE_SIZE": 3188.5,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0978,
        46.1006
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2452872.5,
      "CONT_DOY": 233,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1436.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.7675,
        45.008
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2452877.5,
      "CONT_DOY": 238,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 13533.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2681,
        45.6
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1748",
      "CONT_DATE": 2452880.5,
      "CONT_DOY": 241,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1140.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8861,
        45.2719
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2452880.5,
      "CONT_DOY": 241,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 3164.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8805,
        47.2831
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 130,
      "DISCOVERY_TIME": "0246",
      "CONT_DATE": 2453135.5,
      "CONT_DOY": 131,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 3040.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.55,
        45.208
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2453993.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 25239.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2133,
        46.1581
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2453947.5,
      "CONT_DOY": 212,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 117292.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7806,
        47.6697
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "0035",
      "CONT_DATE": 2453946.5,
      "CONT_DOY": 211,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2378.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4075,
        46.4475
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1205",
      "CONT_DATE": 2453956.5,
      "CONT_DOY": 221,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2543.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5783,
        45.9053
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1215",
      "CONT_DATE": 2453971.5,
      "CONT_DOY": 236,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1657.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6,
        46.3667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1827",
      "CONT_DATE": 2453978.5,
      "CONT_DOY": 243,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4414.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9875,
        45.93
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1645",
      "CONT_DATE": 2453977.5,
      "CONT_DOY": 242,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1356.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9875,
        45.93
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2453978.5,
      "CONT_DOY": 243,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 1308.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9847,
        47.7561
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1457",
      "CONT_DATE": 2454317.5,
      "CONT_DOY": 217,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1020.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1528,
        46.0958
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1521",
      "CONT_DATE": 2454324.5,
      "CONT_DOY": 224,
      "CONT_TIME": "0700",
      "FIRE_SIZE": 1006.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6808,
        46.2856
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2454326.5,
      "CONT_DOY": 226,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 6692.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.775,
        46.2286
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2454322.5,
      "CONT_DOY": 222,
      "CONT_TIME": "2355",
      "FIRE_SIZE": 15546.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5444,
        46.15
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0641",
      "CONT_DATE": 2454325.5,
      "CONT_DOY": 225,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 1161.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1261,
        46.0369
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1415",
      "CONT_DATE": 2454324.5,
      "CONT_DOY": 224,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 7708.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6947,
        45.5272
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2454337.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9883,
        45.0517
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2454337.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8705.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.21392,
        45.03617
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1344",
      "CONT_DATE": 2454337.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2600.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.6128,
        45.3153
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 269,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2454370.5,
      "CONT_DOY": 270,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1370.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.35481,
        45.05703
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1340",
      "CONT_DATE": 2454375.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3237.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1106,
        46.8686
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 84,
      "DISCOVERY_TIME": "1944",
      "CONT_DATE": 2454550.5,
      "CONT_DOY": 85,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5064.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6142,
        48.0567
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2454708.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2626.1,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1006,
        46.3347
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2454708.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4261.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1336,
        46.3331
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1348",
      "CONT_DATE": 2453949.5,
      "CONT_DOY": 214,
      "CONT_TIME": "0905",
      "FIRE_SIZE": 3059.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.335967,
        46.7458
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1547",
      "CONT_DATE": 2454332.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 6241.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.697,
        46.732
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "1305",
      "CONT_DATE": 2452454.5,
      "CONT_DOY": 180,
      "CONT_TIME": "1518",
      "FIRE_SIZE": 1370.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5058,
        44.8647
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452456.5,
      "CONT_DOY": 182,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 6949.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5056,
        44.7105
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 180,
      "DISCOVERY_TIME": "0807",
      "CONT_DATE": 2452456.5,
      "CONT_DOY": 182,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1525.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0081,
        44.8642
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 180,
      "DISCOVERY_TIME": "1303",
      "CONT_DATE": 2452456.5,
      "CONT_DOY": 182,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5321.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4678,
        44.8678
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1520",
      "CONT_DATE": 2452496.5,
      "CONT_DOY": 222,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 2622.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1695,
        44.9353
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": "0825",
      "CONT_DATE": 2452865.5,
      "CONT_DOY": 226,
      "CONT_TIME": "1456",
      "FIRE_SIZE": 3338.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7981,
        44.0841
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1654",
      "CONT_DATE": 2453998.5,
      "CONT_DOY": 263,
      "CONT_TIME": "0915",
      "FIRE_SIZE": 29966.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3114,
        44.8642
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1224",
      "CONT_DATE": 2453958.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1503",
      "FIRE_SIZE": 6612.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4608,
        44.7319
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1604",
      "CONT_DATE": 2453989.5,
      "CONT_DOY": 254,
      "CONT_TIME": "1409",
      "FIRE_SIZE": 12309.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.0042,
        43.6106
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 236,
      "DISCOVERY_TIME": "0400",
      "CONT_DATE": 2453972.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 4704.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2972,
        44.8614
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2454326.5,
      "CONT_DOY": 226,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1268.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9617,
        44.7061
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1616",
      "CONT_DATE": 2454330.5,
      "CONT_DOY": 230,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2234.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.9131,
        44.9575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1819",
      "CONT_DATE": 2454342.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4321.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4019,
        44.8228
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1620",
      "CONT_DATE": 2451757.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5900.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4592,
        42.7161
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1803",
      "CONT_DATE": 2451757.5,
      "CONT_DOY": 214,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 2128.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5639,
        42.9169
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1540",
      "CONT_DATE": 2451762.5,
      "CONT_DOY": 219,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1945.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1341,
        43.9641
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1750",
      "CONT_DATE": 2451767.5,
      "CONT_DOY": 224,
      "CONT_TIME": "1950",
      "FIRE_SIZE": 11042.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.9742,
        43.0983
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0914",
      "CONT_DATE": 2451801.5,
      "CONT_DOY": 258,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 6089.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8058,
        44.8092
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2451772.5,
      "CONT_DOY": 229,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1827.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.48,
        42.5355
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1955",
      "CONT_DATE": 2451772.5,
      "CONT_DOY": 229,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2514.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4445,
        43.0258
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1547",
      "CONT_DATE": 2451778.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.6094,
        44.2533
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1911",
      "CONT_DATE": 2451775.5,
      "CONT_DOY": 232,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1069.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.5962,
        43.158
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1055",
      "CONT_DATE": 2451777.5,
      "CONT_DOY": 234,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 8390.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.43,
        43.1486
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 249,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2451792.5,
      "CONT_DOY": 249,
      "CONT_TIME": "2330",
      "FIRE_SIZE": 9798.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.4488,
        41.72
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2452123.5,
      "CONT_DOY": 214,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5207.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.9801,
        44.9455
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2452122.5,
      "CONT_DOY": 213,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 3798.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8877,
        43.08
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": "1540",
      "CONT_DATE": 2452156.5,
      "CONT_DOY": 247,
      "CONT_TIME": "1930",
      "FIRE_SIZE": 1354.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.5742,
        43.0336
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2452160.5,
      "CONT_DOY": 251,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1471.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7514,
        44.4347
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453613.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3030.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.7797,
        42.8439
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 306,
      "DISCOVERY_TIME": "1651",
      "CONT_DATE": 2453677.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1147",
      "FIRE_SIZE": 1082.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1428,
        41.72
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2453908.5,
      "CONT_DOY": 173,
      "CONT_TIME": "1211",
      "FIRE_SIZE": 13882.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8225,
        42.4125
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2453902.5,
      "CONT_DOY": 167,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 2747.3,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.9669,
        42.0083
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2453982.5,
      "CONT_DOY": 247,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 11083.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.03,
        42.8472
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1810",
      "CONT_DATE": 2453956.5,
      "CONT_DOY": 221,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 16503.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1144,
        43.4703
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1230",
      "CONT_DATE": 2453947.5,
      "CONT_DOY": 212,
      "CONT_TIME": "1040",
      "FIRE_SIZE": 13305.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.6797,
        42.3569
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1128",
      "CONT_DATE": 2453976.5,
      "CONT_DOY": 241,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 11765.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4308,
        42.7294
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2453975.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8416.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2008,
        41.6617
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2453963.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1120.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.9166,
        42.0755
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1426",
      "CONT_DATE": 2454306.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1745.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.9122,
        41.9989
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2453573.5,
      "CONT_DOY": 203,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1271.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4255,
        42.7317
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2453970.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3166.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1537,
        42.7333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0101",
      "CONT_DATE": 2452501.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5025.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.1185,
        42.875
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1220",
      "CONT_DATE": 2453939.5,
      "CONT_DOY": 204,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 14886.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8014,
        44.4689
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1411",
      "CONT_DATE": 2453977.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2065.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1392,
        43.9619
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1806",
      "CONT_DATE": 2454350.5,
      "CONT_DOY": 250,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1815.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.69,
        42.8683
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 201,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2451749.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1312.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.664,
        42.6077
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1215",
      "CONT_DATE": 2451778.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1956.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7309,
        41.153
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2451806.5,
      "CONT_DOY": 263,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1365.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6057,
        42.6144
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452097.5,
      "CONT_DOY": 188,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1927.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4632,
        42.6022
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2452467.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 18677.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4186,
        42.0397
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2451733.5,
      "CONT_DOY": 190,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 2550.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3029,
        41.598
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2451738.5,
      "CONT_DOY": 195,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 36700.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3029,
        41.0494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2451745.5,
      "CONT_DOY": 202,
      "CONT_TIME": "2030",
      "FIRE_SIZE": 1377.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 10.0,
      "STAT_CAUSE_DESCR": "Fireworks"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.016,
        41.3236
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2451802.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 36645.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3171,
        41.2452
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1824",
      "CONT_DATE": 2452493.5,
      "CONT_DOY": 219,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 13200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1118,
        41.1939
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2452499.5,
      "CONT_DOY": 225,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1350.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.2001,
        41.3105
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1342",
      "CONT_DATE": 2452547.5,
      "CONT_DOY": 273,
      "CONT_TIME": "1415",
      "FIRE_SIZE": 3561.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.5882,
        42.0905
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2451761.5,
      "CONT_DOY": 218,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1156.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8173,
        44.0
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2452143.5,
      "CONT_DOY": 234,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2974.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.884,
        43.9833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0030",
      "CONT_DATE": 2452872.5,
      "CONT_DOY": 233,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 2500.4,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9468,
        44.5527
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1420",
      "CONT_DATE": 2453567.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1567.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4611,
        43.6669
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2453956.5,
      "CONT_DOY": 221,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3017.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2637,
        43.728
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2453955.5,
      "CONT_DOY": 220,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1082.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7329,
        43.7763
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 265,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2454374.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3978.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.11565,
        43.49329
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 272,
      "DISCOVERY_TIME": "1505",
      "CONT_DATE": 2454380.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1089.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.61386,
        43.77865
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 82,
      "DISCOVERY_TIME": "1240",
      "CONT_DATE": 2452356.5,
      "CONT_DOY": 82,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1725.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.42128,
        38.03714
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2452463.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4800.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.72367,
        40.44566
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1234",
      "CONT_DATE": 2455058.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 3603.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9496,
        40.1591
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 109,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2451654.5,
      "CONT_DOY": 111,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3124.5,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5764,
        37.665
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1237",
      "CONT_DATE": 2451761.5,
      "CONT_DOY": 218,
      "CONT_TIME": "2359",
      "FIRE_SIZE": 23220.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3895,
        37.3067
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2452497.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2601.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4173,
        37.1833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2452859.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 2744.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4515,
        37.1678
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2451849.5,
      "CONT_DOY": 306,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 2386.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.23541,
        48.96919
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 18702.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.90708,
        48.79281
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "2100",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3997.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.84372,
        48.51456
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.80326,
        48.49306
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2452913.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 21000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.66321,
        48.40372
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1318",
      "CONT_DATE": 2454004.5,
      "CONT_DOY": 269,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 34203.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.512,
        48.639
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2453575.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 3500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.4038,
        42.275
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 260,
      "DISCOVERY_TIME": "1615",
      "CONT_DATE": 2453630.5,
      "CONT_DOY": 260,
      "CONT_TIME": "1930",
      "FIRE_SIZE": 3000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8836,
        41.5461
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2451863.5,
      "CONT_DOY": 320,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2979.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.713748,
        43.976787
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451842.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 2464.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.735768,
        44.086046
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451863.5,
      "CONT_DOY": 320,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3351.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.720868,
        43.892606
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1542",
      "CONT_DATE": 2452866.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2030",
      "FIRE_SIZE": 2650.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.711313,
        43.597432
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1344.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.793612,
        44.045553
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 245,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2455135.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 2939.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.71375,
        43.83761
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2451771.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2020.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.91062,
        44.21764
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2451802.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1212.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.72432,
        44.30233
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 229,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2451776.5,
      "CONT_DOY": 233,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 2760.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.04438,
        44.30734
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1310",
      "CONT_DATE": 2452204.5,
      "CONT_DOY": 295,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2850.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.10389,
        44.44959
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0919",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3750.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.41368,
        44.63885
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1518",
      "CONT_DATE": 2452562.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9140.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.35491,
        44.77418
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1745",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3600.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.16299,
        44.19958
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1739",
      "CONT_DATE": 2452940.5,
      "CONT_DOY": 301,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.22472,
        44.45286
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1650",
      "CONT_DATE": 2452922.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 18762.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.18083,
        44.50557
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1845",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3235.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.7272,
        44.6117
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1705",
      "CONT_DATE": 2454005.5,
      "CONT_DOY": 270,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1010.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.0736,
        44.78
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 201,
      "DISCOVERY_TIME": "1215",
      "CONT_DATE": 2454356.5,
      "CONT_DOY": 256,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2810.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.0233,
        45.00212
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 203,
      "DISCOVERY_TIME": "2020",
      "CONT_DATE": 2454378.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1353.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.1295,
        44.3357
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1320",
      "CONT_DATE": 2454749.5,
      "CONT_DOY": 284,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 10361.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.23,
        44.35
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 266,
      "DISCOVERY_TIME": "1225",
      "CONT_DATE": 2455119.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 10700.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.5453,
        44.5353
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2451792.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.75357,
        44.54859
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2449576.5,
      "CONT_DOY": 224,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 11067.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.183,
        47.683
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 255,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": 2450341.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10031.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.933,
        47.416
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 244,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2451062.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 4926.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.547,
        47.6064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2452187.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3239.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9584,
        40.6459
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 123,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2452397.5,
      "CONT_DOY": 123,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.15,
        48.61666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2452843.5,
      "CONT_DOY": 204,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 3350.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.817,
        47.552
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "0200",
      "CONT_DATE": 2452939.5,
      "CONT_DOY": 300,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 13558.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.91361111,
        44.57194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2453629.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1830",
      "FIRE_SIZE": 6689.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.4489,
        47.7147
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2453629.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1830",
      "FIRE_SIZE": 6778.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.47422,
        47.6558
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": 2453567.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1930.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.57361111,
        47.71194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "0215",
      "CONT_DATE": 2453940.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 18585.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.98,
        47.73666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1030",
      "CONT_DATE": 2453940.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.396,
        47.5738
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 120,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2454587.5,
      "CONT_DOY": 122,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1464.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.4941,
        48.3031
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 256,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2454731.5,
      "CONT_DOY": 266,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1163.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.74972222,
        44.59972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 283,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2100.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.12400055,
        38.70144695
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 348,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.70396166,
        38.06462732
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.60159948,
        38.05026591
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 200,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.54558886,
        38.05943965
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 302,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1050.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.94132076,
        39.39438485
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.06746073,
        37.4962278
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.36946787,
        38.01767126
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1171.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.9788,
        46.3485
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5774.2002,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.11969998,
        45.80680002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 36180.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.67469999,
        45.77030002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 126,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1309.7,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.74249999,
        46.25449999
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2022.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.53449999,
        45.70160002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1136.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 3.0,
      "STAT_CAUSE_DESCR": "Smoking"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.37399999,
        47.83999997
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1136.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.50340002,
        47.65879998
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2333.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.84099998,
        47.47579998
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3485.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.06460001,
        45.68760002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1109.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.575,
        45.6878
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 217,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1051.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.8685,
        48.4149
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 184,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6309,
        46.4116
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1309.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4637,
        46.2399
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1380.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.6271,
        45.896
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 125,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1528.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.5351,
        45.8359
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 52,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.4879,
        47.6461
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5495.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0741,
        45.5575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4277.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.117,
        45.5717
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 7963.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9233,
        48.3294
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6118,
        45.7314
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 121687.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8561,
        45.9228
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1350.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2906,
        46.0654
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7,
        46.3333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3863.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 8.0,
      "STAT_CAUSE_DESCR": "Children"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3695,
        45.7951
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1060.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.943,
        46.678
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1008.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.3448,
        46.6983
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1527.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.8229,
        47.1431
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 316,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 17954.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.1758,
        46.0973
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 10766.24,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.1511,
        47.0201
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 118,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1261.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9964,
        45.7442
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1120.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6002,
        45.8346
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 102379.53,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3417,
        46.2377
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 84,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5519.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.4069,
        47.9374
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 100,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.027,
        48.3913
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1614,
        48.4153
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3558.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.2061,
        46.2703
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.71247,
        38.25352
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 247,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1100.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.43047,
        37.78406
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 72,
      "DISCOVERY_TIME": "1305",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.67783,
        47.71948
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 273,
      "DISCOVERY_TIME": "1522",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1466.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.27729,
        46.41439
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1024.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.98349,
        46.48261
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1993,
      "DISCOVERY_DOY": 307,
      "DISCOVERY_TIME": "0400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 7680.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.27525,
        47.63224
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1452",
      "CONT_DATE": 2449631.5,
      "CONT_DOY": 279,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.88849,
        48.19551
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 111,
      "DISCOVERY_TIME": "1337",
      "CONT_DATE": 2449466.5,
      "CONT_DOY": 114,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1033.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.11873,
        45.09444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2449609.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1390.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.93809,
        46.40848
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2449587.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 6400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6607,
        46.4891
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2449607.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 5000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.92662,
        45.1707
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 182,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2449541.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1110",
      "FIRE_SIZE": 1150.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.74614,
        47.54727
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2449939.5,
      "CONT_DOY": 222,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 1581.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.99133,
        45.95425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2449965.5,
      "CONT_DOY": 248,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1515.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.53452,
        46.20752
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.588,
        45.89803
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 284,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.7199,
        47.29817
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.91802,
        45.85182
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2450325.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 62000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.115822,
        45.838158
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1997,
      "DISCOVERY_DOY": 260,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1204.5,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7963,
        45.98019
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 147,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2395.4,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.41253,
        45.91166
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1998,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "1215",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6355.89,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.93109,
        46.45512
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2451487.5,
      "CONT_DOY": 309,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 7800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.83541,
        46.02556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2451483.5,
      "CONT_DOY": 305,
      "CONT_TIME": null,
      "FIRE_SIZE": 6952.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.87477,
        48.88902
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1231.05,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0354,
        45.6549
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3900.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.85608,
        45.95303
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1200.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.93402,
        46.36288
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2173.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.761482,
        45.462337
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1999,
      "DISCOVERY_DOY": 350,
      "DISCOVERY_TIME": "0230",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.75011,
        45.66886
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 265,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.53399654,
        44.64374923
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 268,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.61499799,
        44.62905882
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 235,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.31120306,
        44.79066085
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2700.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.51219976,
        43.85103984
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.48639669,
        43.74253086
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 58,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1800.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.32939909,
        43.58671947
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1992,
      "DISCOVERY_DOY": 275,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.1320038,
        43.2839699
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 275,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.29029839,
        43.22652811
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1994,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1280.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.68430327,
        43.07748027
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1995,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.48770148,
        43.07748037
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 1996,
      "DISCOVERY_DOY": 275,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.92050174,
        42.35535807
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1705",
      "CONT_DATE": 2451779.5,
      "CONT_DOY": 236,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 15000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.77888889,
        46.64111111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1628",
      "CONT_DATE": 2451812.5,
      "CONT_DOY": 269,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.83638889,
        46.43166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 190,
      "DISCOVERY_TIME": "1324",
      "CONT_DATE": 2452485.5,
      "CONT_DOY": 211,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 30292.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.34944444,
        38.07222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1525",
      "CONT_DATE": 2452896.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7061.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.21166667,
        46.87222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1434",
      "CONT_DATE": 2452907.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4490.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.70666667,
        47.1075
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 303,
      "DISCOVERY_TIME": "0530",
      "CONT_DATE": 2452962.5,
      "CONT_DOY": 323,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 3869.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.39777778,
        40.12694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 90,
      "DISCOVERY_TIME": "1142",
      "CONT_DATE": 2453104.5,
      "CONT_DOY": 100,
      "CONT_TIME": "1445",
      "FIRE_SIZE": 8908.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.23,
        40.67166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1545",
      "CONT_DATE": 2454327.5,
      "CONT_DOY": 227,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1885.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.4386,
        44.7389
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2453940.5,
      "CONT_DOY": 205,
      "CONT_TIME": "1122",
      "FIRE_SIZE": 1116.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7644,
        42.9194
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 62,
      "DISCOVERY_TIME": "0951",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6328.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.750278,
        38.656389
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 7,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3008.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.098611,
        40.098611
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2455048.5,
      "CONT_DOY": 217,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 1933.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.971667,
        44.226111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 176,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1115.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.358611,
        38.769167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 106,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2454573.5,
      "CONT_DOY": 108,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 8900.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.758333,
        38.225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 106,
      "DISCOVERY_TIME": "1411",
      "CONT_DATE": 2454656.5,
      "CONT_DOY": 191,
      "CONT_TIME": "0000",
      "FIRE_SIZE": 9064.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.909722,
        38.593889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1253",
      "CONT_DATE": 2453931.5,
      "CONT_DOY": 196,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.205556,
        40.568889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 6,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2453759.5,
      "CONT_DOY": 24,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 3825.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.821111,
        37.391667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 169,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 13820.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.320833,
        37.555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1640",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1314.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.374444,
        42.471111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 246,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": 2453617.5,
      "CONT_DOY": 247,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 1050.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.175833,
        41.934167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1442",
      "CONT_DATE": 2453625.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.705556,
        43.645833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 262,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2453634.5,
      "CONT_DOY": 264,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1965.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.146111,
        42.355
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2453724.5,
      "CONT_DOY": 354,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5731.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.965,
        47.705556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 27,
      "DISCOVERY_TIME": "1346",
      "CONT_DATE": 2453031.5,
      "CONT_DOY": 27,
      "CONT_TIME": "2019",
      "FIRE_SIZE": 3014.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.773889,
        41.018889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1830",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.643889,
        43.9325
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1816",
      "CONT_DATE": 2452865.5,
      "CONT_DOY": 226,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.066667,
        44.35
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2452863.5,
      "CONT_DOY": 224,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 3000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.387778,
        45.385
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": 2452855.5,
      "CONT_DOY": 216,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9998.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.166667,
        46.083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2453004.5,
      "CONT_DOY": 365,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 25680.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.826111,
        46.6225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 323,
      "DISCOVERY_TIME": "2000",
      "CONT_DATE": 2452963.5,
      "CONT_DOY": 324,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.265278,
        44.875
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 153,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 33000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.993333,
        37.044167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 151,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2452426.5,
      "CONT_DOY": 152,
      "CONT_TIME": "1430",
      "FIRE_SIZE": 10000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.783333,
        38.716667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 151,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 15000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.720833,
        38.620278
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 151,
      "DISCOVERY_TIME": "1305",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.233333,
        38.683333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2452483.5,
      "CONT_DOY": 209,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.345278,
        41.173333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 123,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5038.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.6,
        38.55
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 126,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6355.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.533333,
        38.683333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1356",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 99090.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.997222,
        47.808333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 142,
      "DISCOVERY_TIME": "1510",
      "CONT_DATE": 2455350.5,
      "CONT_DOY": 154,
      "CONT_TIME": "1647",
      "FIRE_SIZE": 2608.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.196667,
        38.1158333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2455509.5,
      "CONT_DOY": 313,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2127.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.330833,
        47.4155556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2455436.5,
      "CONT_DOY": 240,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 4907.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.848333,
        43.6769444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 281,
      "DISCOVERY_TIME": "1140",
      "CONT_DATE": 2455477.5,
      "CONT_DOY": 281,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1245.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.360278,
        43.64
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1325",
      "CONT_DATE": 2455449.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 2015.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.475556,
        46.8658333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2455501.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1559",
      "FIRE_SIZE": 1462.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.562222,
        39.7597222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1340",
      "CONT_DATE": 2455496.5,
      "CONT_DOY": 300,
      "CONT_TIME": "0944",
      "FIRE_SIZE": 1144.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.317222,
        43.9722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2455496.5,
      "CONT_DOY": 300,
      "CONT_TIME": "0945",
      "FIRE_SIZE": 5429.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.578889,
        43.3280556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 9870.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3667,
        45.7183
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 249,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2455461.5,
      "CONT_DOY": 265,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6382.1,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.39331,
        40.03919
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 201,
      "DISCOVERY_TIME": "1053",
      "CONT_DATE": 2455404.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1550",
      "FIRE_SIZE": 1145.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6018,
        40.5494
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "1615",
      "CONT_DATE": 2455430.5,
      "CONT_DOY": 234,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7917.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0619,
        40.6831
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 306,
      "DISCOVERY_TIME": "1509",
      "CONT_DATE": 2455503.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1465.2,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.6753,
        45.0319
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1623",
      "CONT_DATE": 2455436.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1313",
      "FIRE_SIZE": 2879.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.09539,
        42.88208
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 277,
      "DISCOVERY_TIME": "1350",
      "CONT_DATE": 2455476.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 25093.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2975,
        43.0244
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "1931",
      "CONT_DATE": 2455466.5,
      "CONT_DOY": 270,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5261.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.8244,
        41.2831
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2455448.5,
      "CONT_DOY": 252,
      "CONT_TIME": "1552",
      "FIRE_SIZE": 6102.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8122,
        42.915
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 157,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2455531.5,
      "CONT_DOY": 335,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 6249.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5058,
        37.8064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 175,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2455538.5,
      "CONT_DOY": 342,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5572,
        40.4625
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 257,
      "DISCOVERY_TIME": "1455",
      "CONT_DATE": 2455493.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 5510.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.37,
        44.8367
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2455438.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 27898.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.16944444,
        47.55194444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 172,
      "DISCOVERY_TIME": "1524",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.908,
        38.663
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2455500.5,
      "CONT_DOY": 304,
      "CONT_TIME": null,
      "FIRE_SIZE": 1200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.9614,
        40.2084
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 248,
      "DISCOVERY_TIME": "1313",
      "CONT_DATE": 2455444.5,
      "CONT_DOY": 248,
      "CONT_TIME": "1313",
      "FIRE_SIZE": 2000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7016,
        40.6192
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "0551",
      "CONT_DATE": 2455398.5,
      "CONT_DOY": 202,
      "CONT_TIME": "0551",
      "FIRE_SIZE": 1452.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8376,
        39.6478
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2009,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "0010",
      "CONT_DATE": 2455094.5,
      "CONT_DOY": 263,
      "CONT_TIME": "0046",
      "FIRE_SIZE": 4409.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.9532,
        46.9655
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 251,
      "DISCOVERY_TIME": "1318",
      "CONT_DATE": 2455477.5,
      "CONT_DOY": 281,
      "CONT_TIME": null,
      "FIRE_SIZE": 2006.7,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.19569,
        43.39011
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 279,
      "DISCOVERY_TIME": "1407",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1800.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2986,
        41.1272
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2007,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2454299.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1452.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.412428,
        43.206566
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2008,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2454769.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1439",
      "FIRE_SIZE": 2250.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8642208,
        41.18986878
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1331",
      "CONT_DATE": 2453178.5,
      "CONT_DOY": 174,
      "CONT_TIME": null,
      "FIRE_SIZE": 5020.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3306411,
        42.83085162
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2004,
      "DISCOVERY_DOY": 27,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2453031.5,
      "CONT_DOY": 27,
      "CONT_TIME": null,
      "FIRE_SIZE": 6400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7281402,
        41.03882717
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 92,
      "DISCOVERY_TIME": "1708",
      "CONT_DATE": 2453827.5,
      "CONT_DOY": 92,
      "CONT_TIME": null,
      "FIRE_SIZE": 1500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8750412,
        41.15062805
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1415",
      "CONT_DATE": 2451784.5,
      "CONT_DOY": 241,
      "CONT_TIME": null,
      "FIRE_SIZE": 1300.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.9705631,
        44.49981412
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 9248.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.2225,
        42.996389
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2010,
      "DISCOVERY_DOY": 310,
      "DISCOVERY_TIME": "1520",
      "CONT_DATE": 2455507.5,
      "CONT_DOY": 311,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1199.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.696944,
        44.410833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2003,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2452943.5,
      "CONT_DOY": 304,
      "CONT_TIME": null,
      "FIRE_SIZE": 4515.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.845,
        45.611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 197,
      "DISCOVERY_TIME": "0830",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 23000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.949167,
        47.531667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2006,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1607",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.833333,
        47.183333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2005,
      "DISCOVERY_DOY": 254,
      "DISCOVERY_TIME": "1730",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1105.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.638333,
        37.711111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2002,
      "DISCOVERY_DOY": 153,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3090.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.724722,
        37.609167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2000,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2451762.5,
      "CONT_DOY": 219,
      "CONT_TIME": null,
      "FIRE_SIZE": 13666.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.81666666,
        43.88333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 181,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.95,
        37.56666666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2001,
      "DISCOVERY_DOY": 304,
      "DISCOVERY_TIME": null,
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.15,
        40.73333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1359",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 9670.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.39527778,
        43.56277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4686.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.10722222,
        43.88472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 255,
      "DISCOVERY_TIME": "1545",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2468.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.36444444,
        43.60166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 218,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2455872.5,
      "CONT_DOY": 311,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3982.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.67694444,
        46.20666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 236,
      "DISCOVERY_TIME": "1818",
      "CONT_DATE": 2455845.5,
      "CONT_DOY": 284,
      "CONT_TIME": null,
      "FIRE_SIZE": 4213.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.30805556,
        45.55416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2455872.5,
      "CONT_DOY": 311,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1167.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.61,
        45.96388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1134",
      "CONT_DATE": 2455826.5,
      "CONT_DOY": 265,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 34550.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.18138889,
        45.16944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2455841.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 6314.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.28444444,
        47.51944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "1416",
      "CONT_DATE": 2455849.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2160.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.71638889,
        47.86638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1555",
      "CONT_DATE": 2455841.5,
      "CONT_DOY": 280,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5183.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.41166667,
        47.59138889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1009",
      "CONT_DATE": 2455845.5,
      "CONT_DOY": 284,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2153.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.24,
        48.21527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1629",
      "CONT_DATE": 2455868.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1163.9,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.43944444,
        45.04611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1810",
      "CONT_DATE": 2455819.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 3800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.88805556,
        46.71611111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1416",
      "CONT_DATE": 2455842.5,
      "CONT_DOY": 281,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.42,
        44.52027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1442",
      "CONT_DATE": 2455816.5,
      "CONT_DOY": 255,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1012.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.20805556,
        38.25222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 267,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2455828.5,
      "CONT_DOY": 267,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5670.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.57027778,
        43.33861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 91,
      "DISCOVERY_TIME": "2025",
      "CONT_DATE": 2455671.5,
      "CONT_DOY": 110,
      "CONT_TIME": null,
      "FIRE_SIZE": 2939.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.38111111,
        40.53722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 50,
      "DISCOVERY_TIME": "1615",
      "CONT_DATE": 2455614.5,
      "CONT_DOY": 53,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2042.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.73722222,
        37.84472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 158,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2455732.5,
      "CONT_DOY": 171,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 9089.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.65111111,
        37.59583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 163,
      "DISCOVERY_TIME": "1511",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.66611111,
        38.2575
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "0910",
      "CONT_DATE": 2455774.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1044.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.55277778,
        37.66166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2455819.5,
      "CONT_DOY": 258,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 6343.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.31555556,
        44.96361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2455867.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 24237.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.5575,
        43.81472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1344",
      "CONT_DATE": 2455849.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1467.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.87611111,
        46.08666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "2118",
      "CONT_DATE": 2455849.5,
      "CONT_DOY": 288,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 13261.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.89972222,
        46.23444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2455836.5,
      "CONT_DOY": 275,
      "CONT_TIME": "0330",
      "FIRE_SIZE": 1847.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8607,
        48.2767
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1355",
      "CONT_DATE": 2455893.5,
      "CONT_DOY": 332,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 4537.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.68515,
        45.53382
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2455893.5,
      "CONT_DOY": 332,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 18970.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.887,
        45.6819
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1727",
      "CONT_DATE": 2455812.5,
      "CONT_DOY": 251,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1002.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.921,
        40.7236
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 219,
      "DISCOVERY_TIME": "1529",
      "CONT_DATE": 2455812.5,
      "CONT_DOY": 251,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 1744.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4455,
        39.2514
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1602",
      "CONT_DATE": 2455836.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2569.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.542783,
        45.50695
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1339",
      "CONT_DATE": 2455812.5,
      "CONT_DOY": 251,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 10714.8,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8117,
        45.2633
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "0022",
      "CONT_DATE": 2455795.5,
      "CONT_DOY": 234,
      "CONT_TIME": "2041",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0164,
        45.8358
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1001",
      "CONT_DATE": 2455812.5,
      "CONT_DOY": 251,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5481.8,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0681,
        45.7678
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2455804.5,
      "CONT_DOY": 243,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4212.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.43919,
        44.49828
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1415",
      "CONT_DATE": 2455803.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1906.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.5203,
        44.6986
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 275,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2455837.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1173.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.27864,
        44.10892
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "0920",
      "CONT_DATE": 2455803.5,
      "CONT_DOY": 242,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 14484.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.26299,
        41.95177
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 240,
      "DISCOVERY_TIME": "1104",
      "CONT_DATE": 2455802.5,
      "CONT_DOY": 241,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2573.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.33759,
        43.09648
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1619",
      "CONT_DATE": 2455798.5,
      "CONT_DOY": 237,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 2073.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.40922,
        42.94863
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2455804.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.2685,
        43.4035
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "0228",
      "CONT_DATE": 2455782.5,
      "CONT_DOY": 221,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 7462.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.089797,
        43.7146
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2455810.5,
      "CONT_DOY": 249,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 2670.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.35824,
        41.82539
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 264,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2455855.5,
      "CONT_DOY": 294,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1400.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.240097,
        42.253503
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 151,
      "DISCOVERY_TIME": "0700",
      "CONT_DATE": 2455717.5,
      "CONT_DOY": 156,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 6000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.2592,
        36.9986
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1535",
      "CONT_DATE": 2455840.5,
      "CONT_DOY": 279,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 2000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.2861,
        44.4581
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "0018",
      "CONT_DATE": 2455802.5,
      "CONT_DOY": 241,
      "CONT_TIME": null,
      "FIRE_SIZE": 2560.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8433,
        45.7817
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 154,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2455717.5,
      "CONT_DOY": 156,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 4500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.351667,
        37.7025
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 83,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1600.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.729722,
        39.4
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 180,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2455742.5,
      "CONT_DOY": 181,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.727778,
        38.536667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 79,
      "DISCOVERY_TIME": "0950",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1570.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.263333,
        39.761944
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 83,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": 2455644.5,
      "CONT_DOY": 83,
      "CONT_TIME": "2130",
      "FIRE_SIZE": 12000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.655,
        38.745278
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 150,
      "DISCOVERY_TIME": "0000",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6140.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.020833,
        37.211667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 158,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2455797.5,
      "CONT_DOY": 236,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 13312.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.468611,
        37.472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "2318",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 12000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.8775,
        43.223611
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 5000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.34,
        43.382778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 156,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2455733.5,
      "CONT_DOY": 172,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 35583.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.8375,
        37.566667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 176,
      "DISCOVERY_TIME": "1441",
      "CONT_DATE": 2456116.5,
      "CONT_DOY": 190,
      "CONT_TIME": "1745",
      "FIRE_SIZE": 5157.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.95777778,
        45.66861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 188,
      "DISCOVERY_TIME": "1240",
      "CONT_DATE": 2456222.5,
      "CONT_DOY": 296,
      "CONT_TIME": "1145",
      "FIRE_SIZE": 2562.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.21777778,
        45.55944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 243,
      "DISCOVERY_TIME": "2320",
      "CONT_DATE": 2456229.5,
      "CONT_DOY": 303,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5927.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.30722222,
        46.22861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1315",
      "CONT_DATE": 2456172.5,
      "CONT_DOY": 246,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2396.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.56666667,
        45.2825
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1032",
      "CONT_DATE": 2456135.5,
      "CONT_DOY": 209,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 62111.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.0525,
        45.2425
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1507",
      "CONT_DATE": 2456225.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 4186.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.15888889,
        47.54055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1306",
      "CONT_DATE": 2456225.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 4556.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.94361111,
        47.38083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "2046",
      "CONT_DATE": 2456232.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 4033.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.94444444,
        47.34472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "2133",
      "CONT_DATE": 2456225.5,
      "CONT_DOY": 299,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 5500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.66777778,
        47.60083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 254,
      "DISCOVERY_TIME": "1233",
      "CONT_DATE": 2456225.5,
      "CONT_DOY": 299,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5011.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.18388889,
        47.80055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2456246.5,
      "CONT_DOY": 320,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 8612.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.57527778,
        45.50638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1421",
      "CONT_DATE": 2456232.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1501",
      "FIRE_SIZE": 10515.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.10333333,
        45.40055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 194,
      "DISCOVERY_TIME": "1236",
      "CONT_DATE": 2456232.5,
      "CONT_DOY": 306,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 17319.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.86888889,
        47.40638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1807",
      "CONT_DATE": 2456238.5,
      "CONT_DOY": 312,
      "CONT_TIME": "1545",
      "FIRE_SIZE": 2021.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.1225,
        47.20444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1244",
      "CONT_DATE": 2456217.5,
      "CONT_DOY": 291,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 8189.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.95916667,
        44.43277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 156,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2456091.5,
      "CONT_DOY": 165,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 8333.51,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.37555556,
        42.19055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1742",
      "CONT_DATE": 2456126.5,
      "CONT_DOY": 200,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2200.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.85416667,
        44.08694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 182,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2456226.5,
      "CONT_DOY": 300,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 10517.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.08333333,
        41.11666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 169,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456107.5,
      "CONT_DOY": 181,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 4905.41,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.87972222,
        42.495
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "2200",
      "CONT_DATE": 2456191.5,
      "CONT_DOY": 265,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 98115.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.49027778,
        42.20083333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 135,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456069.5,
      "CONT_DOY": 143,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 7685.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.26805556,
        40.725
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 161,
      "DISCOVERY_TIME": "0600",
      "CONT_DATE": 2456108.5,
      "CONT_DOY": 182,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 87275.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.40361111,
        40.58944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 175,
      "DISCOVERY_TIME": "1203",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": "",
      "FIRE_SIZE": 18947.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.93333333,
        38.88333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 169,
      "DISCOVERY_TIME": "1155",
      "CONT_DATE": 2456114.5,
      "CONT_DOY": 188,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1100.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.43611111,
        38.945
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 86,
      "DISCOVERY_TIME": "1439",
      "CONT_DATE": 2456036.5,
      "CONT_DOY": 110,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4142.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.21694444,
        39.43583333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 290,
      "DISCOVERY_TIME": "1210",
      "CONT_DATE": 2456216.5,
      "CONT_DOY": 290,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1400.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.57944444,
        37.41055556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 135,
      "DISCOVERY_TIME": "1457",
      "CONT_DATE": 2456169.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 24931.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.24333333,
        37.4025
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "1337",
      "CONT_DATE": 2456271.5,
      "CONT_DOY": 345,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 45877.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.44361111,
        43.07305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "1450",
      "CONT_DATE": 2456225.5,
      "CONT_DOY": 299,
      "CONT_TIME": "0925",
      "FIRE_SIZE": 3373.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.75777778,
        43.39944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 176,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456223.5,
      "CONT_DOY": 297,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 65220.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.60055556,
        42.43416667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2456224.5,
      "CONT_DOY": 298,
      "CONT_TIME": "1122",
      "FIRE_SIZE": 29950.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.21111111,
        43.92555556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1338",
      "CONT_DATE": 2456204.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 6493.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.02416667,
        43.87972222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "0905",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": "",
      "FIRE_SIZE": 1515.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.81166667,
        44.11305556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 297,
      "DISCOVERY_TIME": "1310",
      "CONT_DATE": 2456244.5,
      "CONT_DOY": 318,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1998.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.0986,
        38.2069
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1635",
      "CONT_DATE": 2456123.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1059.6,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1886,
        40.3917
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 216,
      "DISCOVERY_TIME": "1216",
      "CONT_DATE": 2456161.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 5126.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.395,
        40.2853
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 156,
      "DISCOVERY_TIME": "1606",
      "CONT_DATE": 2456088.5,
      "CONT_DOY": 162,
      "CONT_TIME": "1415",
      "FIRE_SIZE": 1154.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3347,
        40.9017
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 179,
      "DISCOVERY_TIME": "1344",
      "CONT_DATE": 2456120.5,
      "CONT_DOY": 194,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 13920.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.388,
        39.2358
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 146,
      "DISCOVERY_TIME": "1647",
      "CONT_DATE": 2456085.5,
      "CONT_DOY": 159,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5742.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.9889,
        38.4358
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 174,
      "DISCOVERY_TIME": "1615",
      "CONT_DATE": 2456132.5,
      "CONT_DOY": 206,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 10133.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3025,
        37.2708
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 4,
      "DISCOVERY_TIME": "1657",
      "CONT_DATE": 2455946.5,
      "CONT_DOY": 20,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 6500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.9951,
        48.6153
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 4,
      "DISCOVERY_TIME": "1757",
      "CONT_DATE": 2455946.5,
      "CONT_DOY": 20,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 12000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.964,
        48.5305
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1330",
      "CONT_DATE": 2456202.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 40084.8,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2153,
        46.4931
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 157,
      "DISCOVERY_TIME": "1930",
      "CONT_DATE": 2456202.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1382.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.7314,
        46.5144
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456202.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 22045.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6661,
        46.2789
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1511",
      "CONT_DATE": 2456202.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 1540.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.9197,
        46.4289
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2456167.5,
      "CONT_DOY": 241,
      "CONT_TIME": "1820",
      "FIRE_SIZE": 3789.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.3439,
        45.8386
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1632",
      "CONT_DATE": 2456231.5,
      "CONT_DOY": 305,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 1851.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.0578,
        46.6581
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 181,
      "DISCOVERY_TIME": "1415",
      "CONT_DATE": 2456147.5,
      "CONT_DOY": 221,
      "CONT_TIME": "1900",
      "FIRE_SIZE": 3143.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2487,
        45.5289
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456132.5,
      "CONT_DOY": 206,
      "CONT_TIME": "2203",
      "FIRE_SIZE": 1742.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3007,
        45.4922
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0710",
      "CONT_DATE": 2456142.5,
      "CONT_DOY": 216,
      "CONT_TIME": "2104",
      "FIRE_SIZE": 82127.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1676,
        45.7464
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0001",
      "CONT_DATE": 2456141.5,
      "CONT_DOY": 215,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 1500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2159,
        45.6897
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0735",
      "CONT_DATE": 2456143.5,
      "CONT_DOY": 217,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.342,
        45.7544
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0900",
      "CONT_DATE": 2456141.5,
      "CONT_DOY": 215,
      "CONT_TIME": "2030",
      "FIRE_SIZE": 2000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.0206,
        45.75
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 233,
      "DISCOVERY_TIME": "1344",
      "CONT_DATE": 2456163.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1933.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3474,
        45.7347
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1152",
      "CONT_DATE": 2456114.5,
      "CONT_DOY": 188,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 15341.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 10.0,
      "STAT_CAUSE_DESCR": "Fireworks"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.555,
        45.6128
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 258,
      "DISCOVERY_TIME": "1255",
      "CONT_DATE": 2456189.5,
      "CONT_DOY": 263,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 33318.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6504,
        48.3231
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1748",
      "CONT_DATE": 2456179.5,
      "CONT_DOY": 253,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9864.2,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5143,
        47.7016
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "1321",
      "CONT_DATE": 2456222.5,
      "CONT_DOY": 296,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1212.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.8645,
        47.1635
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 239,
      "DISCOVERY_TIME": "1204",
      "CONT_DATE": 2456166.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 1624.2,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8761,
        48.0653
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 255,
      "DISCOVERY_TIME": "1512",
      "CONT_DATE": 2456186.5,
      "CONT_DOY": 260,
      "CONT_TIME": "2100",
      "FIRE_SIZE": 9709.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4736,
        48.383
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 257,
      "DISCOVERY_TIME": "1254",
      "CONT_DATE": 2456186.5,
      "CONT_DOY": 260,
      "CONT_TIME": "2300",
      "FIRE_SIZE": 1696.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.0836,
        48.345
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1240",
      "CONT_DATE": 2456155.5,
      "CONT_DOY": 229,
      "CONT_TIME": "0727",
      "FIRE_SIZE": 12160.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.1706,
        47.4828
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1516",
      "CONT_DATE": 2456137.5,
      "CONT_DOY": 211,
      "CONT_TIME": "1906",
      "FIRE_SIZE": 1583.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2,
        47.2833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 211,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456138.5,
      "CONT_DOY": 212,
      "CONT_TIME": "2020",
      "FIRE_SIZE": 1526.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3167,
        47.3081
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "0930",
      "CONT_DATE": 2456155.5,
      "CONT_DOY": 229,
      "CONT_TIME": "0945",
      "FIRE_SIZE": 3290.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0581,
        47.5128
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "1432",
      "CONT_DATE": 2456144.5,
      "CONT_DOY": 218,
      "CONT_TIME": "1511",
      "FIRE_SIZE": 1046.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0869,
        47.3289
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "1334",
      "CONT_DATE": 2456146.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 1400.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.1058,
        47.6189
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1153",
      "CONT_DATE": 2456169.5,
      "CONT_DOY": 243,
      "CONT_TIME": "1813",
      "FIRE_SIZE": 3300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2947,
        47.0031
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 89,
      "DISCOVERY_TIME": "1700",
      "CONT_DATE": 2456017.5,
      "CONT_DOY": 91,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.958,
        47.6505
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1517",
      "CONT_DATE": 2456204.5,
      "CONT_DOY": 278,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 10924.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2667,
        48.0667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 73,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2456001.5,
      "CONT_DOY": 75,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4805.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 6.0,
      "STAT_CAUSE_DESCR": "Railroad"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.493,
        48.5889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 90,
      "DISCOVERY_TIME": "1428",
      "CONT_DATE": 2456017.5,
      "CONT_DOY": 91,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2034.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.8136,
        48.3967
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1757",
      "CONT_DATE": 2456119.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 7568.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.0764,
        45.9731
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 187,
      "DISCOVERY_TIME": "0548",
      "CONT_DATE": 2456115.5,
      "CONT_DOY": 189,
      "CONT_TIME": "1230",
      "FIRE_SIZE": 6169.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.362,
        45.085
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2456123.5,
      "CONT_DOY": 197,
      "CONT_TIME": "1935",
      "FIRE_SIZE": 1348.6,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.91148,
        45.89645
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1541",
      "CONT_DATE": 2456123.5,
      "CONT_DOY": 197,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1917.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.601943,
        45.811943
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1900",
      "CONT_DATE": 2456131.5,
      "CONT_DOY": 205,
      "CONT_TIME": "2339",
      "FIRE_SIZE": 2365.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6544,
        46.8644
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0415",
      "CONT_DATE": 2456153.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4024.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4269,
        46.1286
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2456157.5,
      "CONT_DOY": 231,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 152261.1,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2111,
        46.1614
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0914",
      "CONT_DATE": 2456153.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1362.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2325,
        46.0414
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456141.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 3315.9,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.68093,
        46.09947
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1253",
      "CONT_DATE": 2456153.5,
      "CONT_DOY": 227,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 9016.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1817,
        46.1586
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2456142.5,
      "CONT_DOY": 216,
      "CONT_TIME": "1815",
      "FIRE_SIZE": 1008.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.1427,
        45.15253
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2456154.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1000",
      "FIRE_SIZE": 1116.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1537,
        45.68047
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 220,
      "DISCOVERY_TIME": "0800",
      "CONT_DATE": 2456149.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1430",
      "FIRE_SIZE": 1805.8,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.3667,
        45.01952
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 254,
      "DISCOVERY_TIME": "1345",
      "CONT_DATE": 2456185.5,
      "CONT_DOY": 259,
      "CONT_TIME": "1930",
      "FIRE_SIZE": 19247.1,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.8869,
        45.1497
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 258,
      "DISCOVERY_TIME": "2100",
      "CONT_DATE": 2456194.5,
      "CONT_DOY": 268,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 10473.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.5719,
        45.8369
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 134,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456065.5,
      "CONT_DOY": 139,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 1231.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.17683,
        45.31408
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1622",
      "CONT_DATE": 2456135.5,
      "CONT_DOY": 209,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 249562.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.46917,
        45.66972
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 260,
      "DISCOVERY_TIME": "1419",
      "CONT_DATE": 2456190.5,
      "CONT_DOY": 264,
      "CONT_TIME": "1248",
      "FIRE_SIZE": 1740.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8267,
        45.4933
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 266,
      "DISCOVERY_TIME": "1522",
      "CONT_DATE": 2456198.5,
      "CONT_DOY": 272,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 4150.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.55736,
        45.44069
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 90,
      "DISCOVERY_TIME": "1130",
      "CONT_DATE": 2456016.5,
      "CONT_DOY": 90,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1760.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.8577,
        48.3769
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1753",
      "CONT_DATE": 2456125.5,
      "CONT_DOY": 199,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2442.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4647,
        44.66216
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1740",
      "CONT_DATE": 2456148.5,
      "CONT_DOY": 222,
      "CONT_TIME": "1630",
      "FIRE_SIZE": 1315.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.4673,
        44.5765
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 241,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2456170.5,
      "CONT_DOY": 244,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2031.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.459,
        44.69944
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2456203.5,
      "CONT_DOY": 277,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1250.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.43947,
        44.73703
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 265,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456200.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 5779.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.13225,
        44.99911
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2456111.5,
      "CONT_DOY": 185,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 27677.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.4675,
        44.44
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 196,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456130.5,
      "CONT_DOY": 204,
      "CONT_TIME": "0700",
      "FIRE_SIZE": 14140.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.86,
        42.3961
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "2007",
      "CONT_DATE": 2456209.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5882.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.659897,
        42.7459
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 253,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2456201.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 15556.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.31263,
        42.71147
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 274,
      "DISCOVERY_TIME": "1616",
      "CONT_DATE": 2456201.5,
      "CONT_DOY": 275,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1044.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.89856,
        43.20397
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 161,
      "DISCOVERY_TIME": "1648",
      "CONT_DATE": 2456094.5,
      "CONT_DOY": 168,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 2810.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7555,
        42.2844
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 272,
      "DISCOVERY_TIME": "1815",
      "CONT_DATE": 2456200.5,
      "CONT_DOY": 274,
      "CONT_TIME": "1330",
      "FIRE_SIZE": 1122.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.97172,
        44.47236
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "0742",
      "CONT_DATE": 2456114.5,
      "CONT_DOY": 188,
      "CONT_TIME": "0600",
      "FIRE_SIZE": 1506.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.605697,
        44.3621
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 157,
      "DISCOVERY_TIME": "1103",
      "CONT_DATE": 2456089.5,
      "CONT_DOY": 163,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1733.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.3451,
        44.087503
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 181,
      "DISCOVERY_TIME": "2337",
      "CONT_DATE": 2456209.5,
      "CONT_DOY": 283,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 61416.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.2844,
        43.9148
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 203,
      "DISCOVERY_TIME": "1504",
      "CONT_DATE": 2456163.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 3829.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.9128,
        42.1861
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "1048",
      "CONT_DATE": 2456163.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 8796.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1967,
        42.2594
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 249,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2456186.5,
      "CONT_DOY": 260,
      "CONT_TIME": "1043",
      "FIRE_SIZE": 1001.5,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.96546,
        41.20316
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 178,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2456110.5,
      "CONT_DOY": 184,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3926.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2781,
        43.8386
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 209,
      "DISCOVERY_TIME": "0815",
      "CONT_DATE": 2456224.5,
      "CONT_DOY": 298,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 1498.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.3233,
        44.6806
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1545",
      "CONT_DATE": 2456224.5,
      "CONT_DOY": 298,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 3540.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.6386,
        44.6669
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2456151.5,
      "CONT_DOY": 225,
      "CONT_TIME": null,
      "FIRE_SIZE": 9468.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8883,
        47.51873
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1943",
      "CONT_DATE": 2456120.5,
      "CONT_DOY": 194,
      "CONT_TIME": null,
      "FIRE_SIZE": 5265.5,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.9093,
        45.9773
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 185,
      "DISCOVERY_TIME": "1542",
      "CONT_DATE": 2456112.5,
      "CONT_DOY": 186,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 2240.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8417,
        45.7433
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "0837",
      "CONT_DATE": 2456154.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 2939.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1927,
        46.4818
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "0819",
      "CONT_DATE": 2456127.5,
      "CONT_DOY": 201,
      "CONT_TIME": "1230",
      "FIRE_SIZE": 4680.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0667,
        45.3167
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "1427",
      "CONT_DATE": 2456165.5,
      "CONT_DOY": 239,
      "CONT_TIME": "1812",
      "FIRE_SIZE": 2087.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.0803,
        48.3745
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1921",
      "CONT_DATE": 2456140.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3348.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.166,
        45.54
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1627",
      "CONT_DATE": 2456141.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1938",
      "FIRE_SIZE": 3176.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.0083,
        47.2417
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 266,
      "DISCOVERY_TIME": "1406",
      "CONT_DATE": 2456197.5,
      "CONT_DOY": 271,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 4100.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.4358,
        46.367
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 234,
      "DISCOVERY_TIME": "1646",
      "CONT_DATE": 2456166.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1450",
      "FIRE_SIZE": 1450.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.935,
        46.955
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1724",
      "CONT_DATE": 2456119.5,
      "CONT_DOY": 193,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1800.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.537,
        45.7058
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 254,
      "DISCOVERY_TIME": "1338",
      "CONT_DATE": 2456202.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4325.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.2778,
        46.1728
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2456150.5,
      "CONT_DOY": 224,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5000.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.3546,
        42.557033
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 78,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456006.5,
      "CONT_DOY": 80,
      "CONT_TIME": "0000",
      "FIRE_SIZE": 24000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.455556,
        40.016667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 177,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2456104.5,
      "CONT_DOY": 178,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 45000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.591667,
        39.740833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "0858",
      "CONT_DATE": 2456560.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 6000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.35194444,
        46.74666667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1035",
      "CONT_DATE": 2456582.5,
      "CONT_DOY": 290,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 6768.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.91388889,
        44.80777778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 195,
      "DISCOVERY_TIME": "1657",
      "CONT_DATE": 2456532.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 6282.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.9425,
        47.21444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1522",
      "CONT_DATE": 2456533.5,
      "CONT_DOY": 241,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 1417.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.82583333,
        37.43
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 201,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456551.5,
      "CONT_DOY": 259,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 24515.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.72583333,
        43.96888889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456553.5,
      "CONT_DOY": 261,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 10850.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.73055556,
        45.25722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 242,
      "DISCOVERY_TIME": "0830",
      "CONT_DATE": 2456560.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1782.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.66416667,
        43.68861111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1451",
      "CONT_DATE": 2456583.5,
      "CONT_DOY": 291,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 3500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.63777778,
        46.07694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 199,
      "DISCOVERY_TIME": "1630",
      "CONT_DATE": 2456561.5,
      "CONT_DOY": 269,
      "CONT_TIME": "1600",
      "FIRE_SIZE": 12379.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.00916667,
        47.80388889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 230,
      "DISCOVERY_TIME": "0146",
      "CONT_DATE": 2456560.5,
      "CONT_DOY": 268,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 4902.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.25083333,
        46.77222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1543",
      "CONT_DATE": 2456601.5,
      "CONT_DOY": 309,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 8246.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.33305556,
        47.675
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 170,
      "DISCOVERY_TIME": "2049",
      "CONT_DATE": 2456596.5,
      "CONT_DOY": 304,
      "CONT_TIME": "1300",
      "FIRE_SIZE": 49628.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.16666667,
        37.68333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 215,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2456595.5,
      "CONT_DOY": 303,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 1065.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.85638889,
        43.35694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 159,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2456474.5,
      "CONT_DOY": 182,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1152.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.98277778,
        38.38944444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 203,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456501.5,
      "CONT_DOY": 209,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1335.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.86638889,
        42.73472222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 156,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456618.5,
      "CONT_DOY": 326,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 58570.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.94388889,
        37.4625
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 162,
      "DISCOVERY_TIME": "1240",
      "CONT_DATE": 2456482.5,
      "CONT_DOY": 190,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 3218.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3503,
        38.4539
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 170,
      "DISCOVERY_TIME": "1835",
      "CONT_DATE": 2456495.5,
      "CONT_DOY": 203,
      "CONT_TIME": "1545",
      "FIRE_SIZE": 13572.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.926517,
        37.432225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 170,
      "DISCOVERY_TIME": "1350",
      "CONT_DATE": 2456480.5,
      "CONT_DOY": 188,
      "CONT_TIME": "0930",
      "FIRE_SIZE": 1065.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.8708,
        39.7583
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2456510.5,
      "CONT_DOY": 218,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1986.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.2167,
        40.2844
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 229,
      "DISCOVERY_TIME": "1302",
      "CONT_DATE": 2456536.5,
      "CONT_DOY": 244,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1010.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.2894,
        40.5192
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 8,
      "DISCOVERY_TIME": "1135",
      "CONT_DATE": 2456300.5,
      "CONT_DOY": 8,
      "CONT_TIME": "1532",
      "FIRE_SIZE": 2756.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.8604,
        45.38
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 323,
      "DISCOVERY_TIME": "1535",
      "CONT_DATE": 2456616.5,
      "CONT_DOY": 324,
      "CONT_TIME": "0300",
      "FIRE_SIZE": 1537.9,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.7856,
        48.1972
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 208,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2456532.5,
      "CONT_DOY": 240,
      "CONT_TIME": "1224",
      "FIRE_SIZE": 1570.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.9744,
        47.1711
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 117,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2456414.5,
      "CONT_DOY": 122,
      "CONT_TIME": "1545",
      "FIRE_SIZE": 1508.6,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.29522,
        44.86286
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "0830",
      "CONT_DATE": 2456568.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 4240.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.3108,
        44.3433
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "0926",
      "CONT_DATE": 2456568.5,
      "CONT_DOY": 276,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 7299.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.5514,
        44.5856
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 74,
      "DISCOVERY_TIME": "1146",
      "CONT_DATE": 2456366.5,
      "CONT_DOY": 74,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.1867,
        40.5891
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 164,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2456462.5,
      "CONT_DOY": 170,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 16580.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.763,
        38.9872
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2013,
      "DISCOVERY_DOY": 161,
      "DISCOVERY_TIME": null,
      "CONT_DATE": 2456463.5,
      "CONT_DOY": 171,
      "CONT_TIME": "2230",
      "FIRE_SIZE": 8500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.22319,
        42.11466
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2012,
      "DISCOVERY_DOY": 283,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": "",
      "FIRE_SIZE": 3498.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.563333,
        40.361111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 97,
      "DISCOVERY_TIME": "1000",
      "CONT_DATE": 2455666.5,
      "CONT_DOY": 105,
      "CONT_TIME": "1250",
      "FIRE_SIZE": 14000.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -103.0,
        38.0
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2011,
      "DISCOVERY_DOY": 237,
      "DISCOVERY_TIME": "2100",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": "",
      "FIRE_SIZE": 2500.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.907222,
        43.026111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "0826",
      "CONT_DATE": 2456944.5,
      "CONT_DOY": 287,
      "CONT_TIME": "0800",
      "FIRE_SIZE": 1277.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.21666667,
        47.69333333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1656",
      "CONT_DATE": 2456911.5,
      "CONT_DOY": 254,
      "CONT_TIME": "1726",
      "FIRE_SIZE": 1529.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.66888889,
        44.33527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 204,
      "DISCOVERY_TIME": "1429",
      "CONT_DATE": 2456877.5,
      "CONT_DOY": 220,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 19569.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.05758,
        40.70036
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 198,
      "DISCOVERY_TIME": "1507",
      "CONT_DATE": 2456957.5,
      "CONT_DOY": 300,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1319.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.5892,
        47.2717
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 171,
      "DISCOVERY_TIME": "1422",
      "CONT_DATE": 2456832.5,
      "CONT_DOY": 175,
      "CONT_TIME": "1827",
      "FIRE_SIZE": 1331.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.99219,
        47.35469
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 231,
      "DISCOVERY_TIME": "1122",
      "CONT_DATE": 2456892.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1438",
      "FIRE_SIZE": 1032.8,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.77745,
        47.11059
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 213,
      "DISCOVERY_TIME": "0654",
      "CONT_DATE": 2456870.5,
      "CONT_DOY": 213,
      "CONT_TIME": "1549",
      "FIRE_SIZE": 3670.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.3783,
        48.9205
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 205,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": 2456866.5,
      "CONT_DOY": 209,
      "CONT_TIME": "1733",
      "FIRE_SIZE": 1369.9,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.78558,
        47.11245
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1318",
      "CONT_DATE": 2456864.5,
      "CONT_DOY": 207,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 9363.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 11.0,
      "STAT_CAUSE_DESCR": "Powerline"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.59078,
        46.5721
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 312,
      "DISCOVERY_TIME": "1048",
      "CONT_DATE": 2456972.5,
      "CONT_DOY": 315,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1170.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7947,
        44.3342
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2014,
      "DISCOVERY_DOY": 98,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2500.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.2555556,
        40.2988889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "2124",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 6313.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.24527778,
        45.51527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1720",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1175.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.48666667,
        47.46222222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1242",
      "CONT_DATE": 2457329.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 20717.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.42944444,
        47.94694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1435",
      "CONT_DATE": 2457329.5,
      "CONT_DOY": 307,
      "CONT_TIME": "1100",
      "FIRE_SIZE": 69435.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.58916667,
        47.84722222
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 223,
      "DISCOVERY_TIME": "0832",
      "CONT_DATE": 2457332.5,
      "CONT_DOY": 310,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 7000.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.81638889,
        48.75
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1419",
      "CONT_DATE": 2457331.5,
      "CONT_DOY": 309,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2495.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.60694444,
        48.24027778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1938",
      "CONT_DATE": 2457331.5,
      "CONT_DOY": 309,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1018.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.94,
        48.65638889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 225,
      "DISCOVERY_TIME": "2344",
      "CONT_DATE": 2457311.5,
      "CONT_DOY": 289,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 8967.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.84972222,
        48.10694444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1425",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4681.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.70083333,
        48.30166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 224,
      "DISCOVERY_TIME": "1600",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 53640.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.05638889,
        48.17166667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1411",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 13351.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.84944444,
        46.87277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 222,
      "DISCOVERY_TIME": "2101",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 3011.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.63416667,
        47.0125
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1008",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1005.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.74,
        48.15833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "0051",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 4966.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.84416667,
        48.14444444
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1223",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2680.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.96861111,
        48.17277778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 9863.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.95638889,
        47.73833333
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 238,
      "DISCOVERY_TIME": "1432",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 2895.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.95444444,
        47.61527778
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1550",
      "CONT_DATE": 2457253.5,
      "CONT_DOY": 231,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 1026.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.68872,
        40.87406
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 85,
      "DISCOVERY_TIME": "1100",
      "CONT_DATE": 2457108.5,
      "CONT_DOY": 86,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1200.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.7639,
        39.5658
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1800",
      "CONT_DATE": 2457230.5,
      "CONT_DOY": 208,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 1500.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.766847,
        46.0169
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 285,
      "DISCOVERY_TIME": "1421",
      "CONT_DATE": 2457309.5,
      "CONT_DOY": 287,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 1194.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -112.041583,
        44.656283
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 87,
      "DISCOVERY_TIME": "1500",
      "CONT_DATE": 2457115.5,
      "CONT_DOY": 93,
      "CONT_TIME": "1500",
      "FIRE_SIZE": 2043.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.319317,
        46.064281
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1048",
      "CONT_DATE": 2457259.5,
      "CONT_DOY": 237,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 8721.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.4421,
        46.0553
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1815",
      "CONT_DATE": 2457230.5,
      "CONT_DOY": 208,
      "CONT_TIME": "1359",
      "FIRE_SIZE": 1778.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.3958,
        45.6361
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 343,
      "DISCOVERY_TIME": "1430",
      "CONT_DATE": 2457365.5,
      "CONT_DOY": 343,
      "CONT_TIME": "2200",
      "FIRE_SIZE": 2707.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.6475,
        48.4653
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 226,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2457279.5,
      "CONT_DOY": 257,
      "CONT_TIME": "1631",
      "FIRE_SIZE": 3073.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -114.3914,
        47.4289
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 255,
      "DISCOVERY_TIME": "1515",
      "CONT_DATE": 2457277.5,
      "CONT_DOY": 255,
      "CONT_TIME": "2154",
      "FIRE_SIZE": 1034.6,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1236,
        48.1828
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1400",
      "CONT_DATE": 2457293.5,
      "CONT_DOY": 271,
      "CONT_TIME": "1435",
      "FIRE_SIZE": 4850.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.6342,
        48.6669
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 221,
      "DISCOVERY_TIME": "1349",
      "CONT_DATE": 2457331.5,
      "CONT_DOY": 309,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 18847.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -113.6161,
        48.544
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 232,
      "DISCOVERY_TIME": "1356",
      "CONT_DATE": 2457257.5,
      "CONT_DOY": 235,
      "CONT_TIME": "1529",
      "FIRE_SIZE": 1107.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0497,
        47.4078
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 183,
      "DISCOVERY_TIME": "1337",
      "CONT_DATE": 2457216.5,
      "CONT_DOY": 194,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 5762.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0889,
        47.4383
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 210,
      "DISCOVERY_TIME": "1542",
      "CONT_DATE": 2457233.5,
      "CONT_DOY": 211,
      "CONT_TIME": "1731",
      "FIRE_SIZE": 2291.4,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7717,
        45.7403
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 212,
      "DISCOVERY_TIME": "1440",
      "CONT_DATE": 2457236.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1640",
      "FIRE_SIZE": 3507.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7806,
        45.7178
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1242",
      "CONT_DATE": 2457250.5,
      "CONT_DOY": 228,
      "CONT_TIME": "1044",
      "FIRE_SIZE": 1967.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7675,
        45.8047
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 71,
      "DISCOVERY_TIME": "1319",
      "CONT_DATE": 2457094.5,
      "CONT_DOY": 72,
      "CONT_TIME": "1542",
      "FIRE_SIZE": 3365.3,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.3369,
        46.0117
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 87,
      "DISCOVERY_TIME": "2315",
      "CONT_DATE": 2457110.5,
      "CONT_DOY": 88,
      "CONT_TIME": "1734",
      "FIRE_SIZE": 3203.4,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.7833,
        45.7833
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 81,
      "DISCOVERY_TIME": "1300",
      "CONT_DATE": 2457105.5,
      "CONT_DOY": 83,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 4194.5,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2556,
        45.7114
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2457222.5,
      "CONT_DOY": 200,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 5723.6,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 2.0,
      "STAT_CAUSE_DESCR": "Equipment Use"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.1219,
        45.03033
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 206,
      "DISCOVERY_TIME": "1447",
      "CONT_DATE": 2457236.5,
      "CONT_DOY": 214,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 2322.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.73,
        45.5489
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 214,
      "DISCOVERY_TIME": "1533",
      "CONT_DATE": 2457245.5,
      "CONT_DOY": 223,
      "CONT_TIME": "1730",
      "FIRE_SIZE": 1655.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.345,
        44.849603
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 192,
      "DISCOVERY_TIME": "1306",
      "CONT_DATE": 2457226.5,
      "CONT_DOY": 204,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 5723.6,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.150067,
        44.950094
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 284,
      "DISCOVERY_TIME": "1004",
      "CONT_DATE": 2457314.5,
      "CONT_DOY": 292,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 9516.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.2856,
        42.8758
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 38,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": 2457061.5,
      "CONT_DOY": 39,
      "CONT_TIME": "1200",
      "FIRE_SIZE": 1010.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -105.43958,
        42.48847
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 207,
      "DISCOVERY_TIME": "1502",
      "CONT_DATE": 2457237.5,
      "CONT_DOY": 215,
      "CONT_TIME": "1700",
      "FIRE_SIZE": 2487.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.2086,
        41.26
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 228,
      "DISCOVERY_TIME": "1653",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": "",
      "FIRE_SIZE": 1410.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 4.0,
      "STAT_CAUSE_DESCR": "Campfire"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.4583,
        43.2481
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 252,
      "DISCOVERY_TIME": "0941",
      "CONT_DATE": 2457324.5,
      "CONT_DOY": 302,
      "CONT_TIME": "0900",
      "FIRE_SIZE": 2556.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.588,
        44.5735
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 82,
      "DISCOVERY_TIME": "1530",
      "CONT_DATE": 2457104.5,
      "CONT_DOY": 82,
      "CONT_TIME": "2130",
      "FIRE_SIZE": 1892.0,
      "STATE": "WY",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.7314,
        41.6175
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 227,
      "DISCOVERY_TIME": "1404",
      "CONT_DATE": 2457256.5,
      "CONT_DOY": 234,
      "CONT_TIME": "1009",
      "FIRE_SIZE": 4472.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 1.0,
      "STAT_CAUSE_DESCR": "Lightning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.3642,
        47.334
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 87,
      "DISCOVERY_TIME": "1529",
      "CONT_DATE": 2457114.5,
      "CONT_DOY": 92,
      "CONT_TIME": "1400",
      "FIRE_SIZE": 5086.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 5.0,
      "STAT_CAUSE_DESCR": "Debris Burning"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.1142,
        45.6561
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 202,
      "DISCOVERY_TIME": "1134",
      "CONT_DATE": 2457231.5,
      "CONT_DOY": 209,
      "CONT_TIME": "0110",
      "FIRE_SIZE": 1616.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 7.0,
      "STAT_CAUSE_DESCR": "Arson"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.2267,
        46.335
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 193,
      "DISCOVERY_TIME": "1645",
      "CONT_DATE": 2457219.5,
      "CONT_DOY": 197,
      "CONT_TIME": "2000",
      "FIRE_SIZE": 5037.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.1567,
        45.7807
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 284,
      "DISCOVERY_TIME": "1220",
      "CONT_DATE": 2457311.5,
      "CONT_DOY": 289,
      "CONT_TIME": "1800",
      "FIRE_SIZE": 8300.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 9.0,
      "STAT_CAUSE_DESCR": "Miscellaneous"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.4225,
        45.9221
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 81,
      "DISCOVERY_TIME": "1200",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1384.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -107.6502778,
        46.3180556
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 87,
      "DISCOVERY_TIME": "2336",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 1700.0,
      "STATE": "MT",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -108.0225,
        46.4091667
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "FIRE_YEAR": 2015,
      "DISCOVERY_DOY": 261,
      "DISCOVERY_TIME": "1305",
      "CONT_DATE": null,
      "CONT_DOY": null,
      "CONT_TIME": null,
      "FIRE_SIZE": 11699.0,
      "STATE": "CO",
      "STAT_CAUSE_CODE": 13.0,
      "STAT_CAUSE_DESCR": "Missing/Undefined"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -104.5646,
        40.3947
      ]
    }
  }]

  // Create a marker group to hold the markers
var markerGroup = L.layerGroup().addTo(myMap);

// Get unique years from fireData
var years = fireData.map(function (fire) {
  return fire.properties.FIRE_YEAR;
}).filter(function (value, index, self) {
  return self.indexOf(value) === index;
}).sort(function (a, b) {
  return b - a; // Sort in descending order
});

// Populate the year dropdown
var yearDropdown = document.getElementById("year-filter");

years.forEach(function (year) {
  var option = document.createElement("option");
  option.text = year;
  option.value = year;
  yearDropdown.appendChild(option);
});

var allOption = document.createElement("option");
allOption.text = "All";
allOption.value = "All";
yearDropdown.insertBefore(allOption, yearDropdown.firstChild);

// Event listener for year selection
yearDropdown.addEventListener("change", function () {
  var selectedYear = yearDropdown.value;

  // Clear existing markers
  markerGroup.clearLayers();

  // Filter and add markers based on the selected year
  if (selectedYear === "All") {
    // Add markers for all fires
    fireData.forEach(function (fire) {
      addMarker(fire);
    });
  } else {
    // Add markers for fires of the selected year
    var filteredFires = fireData.filter(function (fire) {
      return fire.properties.FIRE_YEAR == selectedYear;
    });
    filteredFires.forEach(function (fire) {
      addMarker(fire);
    });
  }
});

// Loop through the fireData array and create one marker for each fire incident
for (var i = 0; i < fireData.length; i++) {
  var fire = fireData[i];
  var lat = fire.geometry.coordinates[1];
  var lng = fire.geometry.coordinates[0];
  var fireYear = fire.properties.FIRE_YEAR;
  var fireSize = fire.properties.FIRE_SIZE;
  var causeDescr = fire.properties.STAT_CAUSE_DESCR;  

  // Create a marker with a popup containing fire information
  var marker = L.circle([lat, lng], {
    fillOpacity: 0.50,
    color: "black",
    fillColor: "red",
    // Set the circle radius equal to output of function above
    radius: markerSize(fireData[i].properties.FIRE_SIZE)
  })
  var popupContent = `
    <b>Fire Information</b><br>
    Year: ${fireYear}<br>
    Size: ${fireSize} acres<br>
    Cause: ${causeDescr}
  `;
  marker.bindPopup(popupContent);
  marker.addTo(markerGroup); // Add marker to the markerGroup
}