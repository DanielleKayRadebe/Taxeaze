mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsbGVrYXkiLCJhIjoiY2xocWE5MDhxMXlwODNlb2Q3YXN5Nm5oYSJ9.DcZ5eE4st86HnUjsNBI9Vg';

        const geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Clover',
                        'iconSize': [20, 20]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [30.876734997135863, -29.866176759221588]
                    }
                },
            ]
        };

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [31.0218, -29.8587],
            zoom: 11,
        });

        //creates a marker over durban central
        new mapboxgl.Marker()
            .setLngLat([30.876734997135863, -29.866176759221588])
            .addTo(map);


        // Add markers to the map.
        for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = 'marker';
            // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = '100%';

            el.addEventListener('click', () => {
                window.alert(marker.properties.message);
            });

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }
