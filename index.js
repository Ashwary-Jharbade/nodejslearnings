const express = require("express");
const app = express();
const jwtUtils = require("./utils/jwt/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.post("/create", (req, res) => {
  const payload = req.body;
  const token = jwtUtils.createToken(payload);
  res.status(200).json({ token });
});

app.get("/listen", jwtUtils.validateToken, (req, res) => {
  res.status(200).send("Listening music");
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
