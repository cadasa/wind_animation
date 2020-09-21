const options = {
    // Required: API key
    key: 'gB4cSUS30RAGtgeokIWAcEs8cgxQP5tz', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 15.9,
    lon: 108.1,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([15.8, 108.1])
    //  .setContent('Bão No. 5 - Noul')
        .openOn(map);
});
