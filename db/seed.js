const MONGO_URL = "mongodb://localhost:27017/dear-santa";
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Present = require("../models/modelPresent");

const presents = require("./data");

mongoose
  .connect(MONGO_URL)
  .then((res) => console.log("connected to Seed database"))
  .then(() => {
    Present.create(presents);
  })
  .catch((error) => console.log(error));
  
  module.exports = Present;