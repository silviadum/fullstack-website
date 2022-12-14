require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/admin", () => {
    console.log("Connected to MongoDB");
  })
  .catch(e => console.log(e));

mongoose.connection.on('error', err => {
    console.log(err);
  });
