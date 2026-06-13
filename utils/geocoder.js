// utils/geocoder.js
const fetch = require("node-fetch");

module.exports.geocode = async (location, country) => {
    const query = `${location}, ${country}`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

    const response = await fetch(url, {
        headers: {
            "User-Agent": "WanderlustApp/1.0"  // Nominatim requires this
        }
    });

    const data = await response.json();

    if (data.length === 0) {
        return { coordinates: [0, 0] };
    }

    return {
        coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)]
        //              longitude first ↑      latitude second ↑  (GeoJSON standard)
    };
};