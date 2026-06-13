const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { geocode } = require("./geocoder");

require("dotenv").config({ path: "../.env" });  // ← point to root .env
const MONGO_URL = process.env.ATLASDB_URL;

async function seedCoords() {
    await mongoose.connect(MONGO_URL);
    const listings = await Listing.find({});
    console.log(`Updating ${listings.length} listings...`);
    for (let listing of listings) {
        const { coordinates } = await geocode(listing.location, listing.country);
        listing.geometry = { type: "Point", coordinates };
        await listing.save();
        console.log(`✓ ${listing.title} → ${coordinates}`);
        await new Promise(r => setTimeout(r, 1000));
    }
    console.log("Done!");
    mongoose.connection.close();
}

seedCoords();