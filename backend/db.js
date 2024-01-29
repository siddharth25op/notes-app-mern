const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/Notes-Data-MERN";

const connection = () => {
  mongoose.connect(MONGO_URI);
};

module.exports = connection;
