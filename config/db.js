const mongoose = require("mongoose");
require("dotenv").config(); // Make sure to load environment variables

const dbJobURI = process.env.dbJobURI;

mongoose
  .connect(dbJobURI)
  .then(() => {
    console.log("Connected to MongoDB-Jobs");
  })
  .catch((error) => {
    console.log("Error while creating mongodb connection", error);
  });
