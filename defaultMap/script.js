function initMap(){
    let mapOptions = {
        center: new google.maps.LatLng(-29.883333, 31.049999),
        zoom: 12,
        mapId: '689f9b3e6cf23043'
    };

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
}