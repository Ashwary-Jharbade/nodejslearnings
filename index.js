const express = require("express");
const apiResponse = require("./utils/apiResponse");
const app = express();
const jwtUtils = require("./utils/jwt/index");
const HTTP = require("./const").HTTP;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("<h1>Hello there</h1>");
});

app.post("/create", jwtUtils.createToken, (req, res) => {
  const token = req.token;
  return res.send(apiResponse("", HTTP.SUCCESS_CREATED, { token }));
});

app.get("/listen", jwtUtils.validateToken, (req, res) => {
  return res.send(apiResponse("Listening music", HTTP.SUCCESS, req.decoded));
});

app.all("*", (req, res) => {
  return res.send("<h1>Bad request</h1>");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
