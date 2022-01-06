const express = require("express");
const app = express();
const rateLimitAPI = require("./rateLimitMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.get("/movie", rateLimitAPI, (req, res) => {
  return res.status(200).json({
    header: { "Content-Type": "text/html" },
    message: "API call succeded",
  });
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
