const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const URL = DB_URL + DB_NAME;

const initDB = () => {
  mongoose.connect(URL, (err) => {
    if (err) {
      process.exit(0);
    }
    console.log("DB started");
  });
};

module.exports = initDB;
