
/**
 * Mapbox API Access token added by Ryshan Ramlall 
 * Account owner 
 * Need to pay attention to the pricing if it the amount of user increases substantially
 * Currently only using the Map from the API 
 */
L.mapbox.accessToken =
"pk.eyJ1Ijoic3R1cnRpdW0iLCJhIjoiY2tnaHd6cHZjMDAxMzJybG9sM3huOTVpZCJ9.FPujWyjCdiqERPlvNhlU5w";

mapboxgl.accessToken =
"pk.eyJ1Ijoic3R1cnRpdW0iLCJhIjoiY2tnaHd6cHZjMDAxMzJybG9sM3huOTVpZCJ9.FPujWyjCdiqERPlvNhlU5w";


//Navigation controls. For finding directions//

//The actual dataset
//Note: this is going to be hundreds of lines. Don't delete sections or move them//

/**
 * Image attribution for icon:
 * <a href="https://www.flaticon.com/free-icons/mini-bus" title="mini bus icons">Mini bus icons created by Vectors Tank - Flaticon</a>
 */

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.02419444, -29.86011111],
      },
      properties: {
        title: "Durban Central",
        description: "Durban Central Area",
        routes: "None",
        landmarks: "Schwarma Palace",
        geolocation: "-29.86011111, 31.02419444",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.02527778, -29.85661111],
      },
      properties: {
        title: "Workshop rank, Substation 2, Free taxi",
        description: "Durban Central Area",
        routes: "Takes you to English Market",
        landmarks: "N/A",
        geolocation: "-29.85661111, 31.02527778",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.019739, -29.853105],
      },
      properties: {
        title: "Soldiers Way Taxi Rank",
        description: "Durban Central Area",
        routes: "English Market",
        landmarks: "N/A",
        geolocation: "-29.853105, 31.019739",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.012244, -29.855863],
      },
      properties: {
        title: "R102 04 Market Road",
        description: "Durban Central Area",
        routes: "N/A",
        landmarks: "One of the main market entrances",
        geolocation: "-29.855863, 31.012244",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.011273, -29.858300],
      },
      properties: {
        title: "Rank no. 95",
        description: "Durban Central Area",
        routes: "N/A",
        landmarks: "Near English market sign",
        geolocation: "-29.858300, 31.011273",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.010411, -29.857278],
      },
      properties: {
        title: "Scala Rank",
        description: "Durban Central Area",
        routes: "N/A",
        landmarks: "N/A",
        geolocation: "-29.857278, 31.010411",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.996755, -29.855856],
      },
      properties: {
        title: "Unnamed Rank",
        description: "Durban Central Area",
        routes: "N/A",
        landmarks: "N/A",
        geolocation: "-29.855856, 30.996755",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.901346, -29.872902],
      },
      properties: {
        title: "Spar in Escomb",
        description: "Escomb",
        routes: "Northdene to Durban Central, Workshop last stop",
        landmarks: "387 Main Rd, Escombe, Queensburgh, 4093",
        geolocation: "-29.872902, 30.901346",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.910390, -29.875108],
      },
      properties: {
        title: "Malvern Police Station",
        description: "Malvern",
        routes: "N/A",
        landmarks: "288-282 Main Rd, Escombe, Queensburgh, 4093",
        geolocation: "-29.875108, 30.910390",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.918938, -29.881410],
      },
      properties: {
        title: "Malvern Bus Stop",
        description: "Malvern",
        routes: "Malvern Pick 'n Pay",
        landmarks: "24 Coronation Rd, Malvern, Queensburgh, 4055",
        geolocation: "-29.881410, 30.918938",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.925605, -29.879843],
      },
      properties: {
        title: "Food Lovers Market",
        description: "Malvern",
        routes: "N/A",
        landmarks: "59-79 Sarnia Rd, Malvern, Queensburgh, 4055",
        geolocation: "-29.879843, 30.925605",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.939078, -29.887783],
      },
      properties: {
        title: "Unnamed Stop",
        description: "Malvern",
        routes: "N/A",
        landmarks: "1418 Sarnia Rd, Mount Vernon, Durban, 4094",
        geolocation: "-29.887783, 30.939078",
        image: "https://cdn.24.co.za/files/Cms/General/d/8082/8eedb832797b4ea599400a5dd23804e9.png",
      },
    },
  ],
};

// Change Styles, Centre, View etc. 
var map = L.mapbox
  .map("map")
  .setView([-29.86011111, 31.02419444], 16)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/satellite-v9"));

var listings = document.getElementById("listings");
var locations = L.mapbox.featureLayer().addTo(map);

locations.setGeoJSON(geojson);

function setActive(el) {
  var siblings = listings.getElementsByTagName("div");
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].className = siblings[i].className
      .replace(/active/, "")
      .replace(/\s\s*$/, "");
  }

  el.className += " active";
}

locations.eachLayer(function (locale) {
  // Shorten locale.feature.properties to just `prop` so we're not
  // writing this long form over and over again.
  var prop = locale.feature.properties;

  // Each marker on the map.
  var popup = prop.title;

  var listing = listings.appendChild(document.createElement("div"));
  listing.className = "item";

  var link = listing.appendChild(document.createElement("a"));
  link.href = "#";
  link.className = "title";

  // ToDo: Need to add in titles/colons for each section in popup
  link.innerHTML = prop.title;
  if (prop.description) {
    link.innerHTML +=
      '<br /><small class="quiet">' + prop.description + "</small>";
    popup += '<br /><small class="quiet">' + prop.description + "</small>";
  }
  if (prop.routes) {
    link.innerHTML +=
      '<br /><small class="quiet">' + prop.routes + "</small>";
    popup += '<br /><small class="quiet">' + prop.routes + "</small>";
  }
  if (prop.landmarks) {
    link.innerHTML +=
      '<br /><small class="quiet">' + prop.landmarks + "</small>";
    popup += '<br /><small class="quiet">' + prop.landmarks + "</small>";
  }
  if (prop.geolocation) {
    link.innerHTML +=
      '<br /><small class="quiet">' + prop.geolocation + "</small>";
    popup += '<br /><small class="quiet">' + prop.geolocation + "</small>";
  }
  if (prop.image) {
    popup += '<img src="' + prop.image + '" alt="" width = 300 height = 300>';
  }

  link.onclick = function () {
    setActive(listing);

    // When a menu item is clicked, animate the map to center
    // its associated locale and open its popup.
    map.setView(locale.getLatLng(), 18);
    locale.openPopup();
    return false;
  };

  // Marker interaction
  locale.on("click", function (e) {
    // 1. center the map on the selected marker.
    map.panTo(locale.getLatLng());

    // 2. Set active the markers associated listing.
    setActive(listing);
  });

  popup += "</div>";
  locale.bindPopup(popup);

  locale.setIcon(
    L.icon({
      iconUrl: "transport.png",
      iconSize: [50, 50],
      iconAnchor: [30, 30],
      popupAnchor: [0, -20],
    })
  );
});


// Searchbox functionality
// Edit to change search parameters
var searchBox = document.getElementById("search-box");
searchBox.addEventListener("keyup", function (e) {
  var searchString = e.target.value.toLowerCase();

  locations.eachLayer(function (locale) {
    var title = locale.feature.properties.title.toLowerCase();
    var description = locale.feature.properties.description
      ? locale.feature.properties.description.toLowerCase()
      : "";
    var routes = locale.feature.properties.routes
      ? locale.feature.properties.routes.toLowerCase()
      : "";
    var geolocation = locale.feature.properties.geolocation
      ? locale.feature.properties.geolocation.toLowerCase()
      : "";

    if (
      title.indexOf(searchString) !== -1 ||
      description.indexOf(searchString) !== -1 ||
      routes.indexOf(searchString) !== -1 ||
      geolocation.indexOf(searchString) !== -1
    ) {
      locale.setOpacity(1);
      if (map.getBounds().contains(locale.getLatLng()) === false) {
        map.panTo(locale.getLatLng());
      }
    } else {
      locale.setOpacity(0);
    }
  });
});

