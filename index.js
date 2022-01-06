const express = require("express");
const app = express();
const rateLimitAPI = require("./rateLimitMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.get("/movie", (req, res) => {
  const flag = rateLimitAPI(req, res);
  if (!flag)
    return res.status(429).json({
      message: "API requests exceeded",
    });
  return res.status(200).json({
    message: "API call succeded",
  });
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
