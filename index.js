const express = require("express");
const app = express();
require("dotenv").config();
const dbInit = require("./server");
const PORT = process.env.PORT || 3000;

// Initiating DB
dbInit();

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
