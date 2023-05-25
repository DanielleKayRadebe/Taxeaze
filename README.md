# Taxeazy
An informative website that keeps track of all The taxi routes in and around Durban central and tells you where all your closest stops are.

more details to be added soon

# Git Commands

## Create a new Branch
`git checkout -b "branch name"`


## Languages
`JavaScript` `html` `CSS`

## Libraries
`MapBox GL JS`

# Code Functionality 

## Mapbox code
`Mapbox Access Tokens:` The Mapbox access tokens are assigned to the L.mapbox.accessToken and mapboxgl.accessToken variables. These tokens are necessary for authenticating requests to the Mapbox API.

`GeoJSON Data:` The geojson variable contains a sample GeoJSON dataset. It includes a single feature representing a point on the map with properties such as title, description, routes, landmarks, geolocation, and an image URL.

`Map Initialization:` The map variable initializes a Mapbox map using the L.mapbox.map function. It sets the initial view and adds a satellite style layer.

`Listings and Locations:` The listings variable references the DOM element with the ID "listings" where the sidebar listings will be populated. The locations variable creates a Mapbox feature layer that will hold the marker data.

`Marker Creation and Interaction:` The locations.eachLayer function iterates over each feature in the geojson data and creates markers on the map. It also populates the sidebar listings with corresponding information. Clicking on a listing or a marker will center the map on the location, open a popup with detailed information, and highlight the active listing.

`Marker Styling:` The locale.setIcon function sets the icon for each marker using a custom image file called "transport.png".

`Search Box Functionality:` The code adds an event listener to the search box with the ID "search-box". When the user types in the search box, it filters the markers and listings based on the entered text. If a match is found, the marker becomes visible, and the map pans to the marker's location.

`Background:` Currently it uses a satellite imagery overlay, as this more clearly shows landmarks. For this to load, the API key must be up to date. 



