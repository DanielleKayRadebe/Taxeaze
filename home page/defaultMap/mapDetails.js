mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsbGVrYXlyYWRlYmUiLCJhIjoiY2xqZTVlODhzMGQzcDNkbnE0cDM1b3pwYSJ9.gwObIdHOcf8CRkRKWP2z2w';
        const map = new mapboxgl.Map({
            container: 'map',
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [31.02419444, -29.86011111],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );