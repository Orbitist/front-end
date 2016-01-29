// Mapbox GL Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoib3JiaXRpc3QiLCJhIjoiYnpUTnJBdyJ9.uxgaJ0R9ZNsCcEnPNfo2ag';

// Map Settings
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/orbitist/cijzm77xc00x990lxhs6xpvct',
    center: [-96, 37.8],
    zoom: 3
});

// Load GeoJSON and Markers
map.on('style.load', function () {
    map.addSource("markers", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-77.03238901390978, 38.913188059745586]
                },
                "properties": {
                    "title": "Mapbox DC",
                    "marker-symbol": "monument"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-122.414, 37.776]
                },
                "properties": {
                    "title": "Mapbox SF",
                    "marker-symbol": "harbor"
                }
            }]
        }
    });

    map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": "markers",
        "layout": {
            "icon-image": "{marker-symbol}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});