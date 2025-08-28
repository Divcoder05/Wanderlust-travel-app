require('dotenv').config({ path: '../.env' });  // go up one folder since .env is in MAJORPROJECT

const mongoose = require('mongoose');
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  console.log("MONGO_URI from .env:", dbUrl); // debug line
  await mongoose.connect(dbUrl);
  console.log("MongoDB connected successfully");
}

main().catch(err => console.log(err));



//const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
//const dbUrl = process.env.ATLASDB_URL;
console.log(dbUrl);
// main()
//     .then(()=>{
//         console.log("connted to DB");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// async function main() {
//     await mongoose.connect(dbUrl);
// }
const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6815cc69470a64cac9660a29"}));
    await Listing.insertMany(initData.data);
    console.log("data was initalized");
}

initDB();