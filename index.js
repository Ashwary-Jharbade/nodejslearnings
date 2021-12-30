const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>");
});

app.get("/resource", (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.send("Missing Name query");
  }
  res.send(`Name: ${name}`);
});

app.get("/resource/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.send("Missing Id parameter");
  }
  res.send(`Id: ${id}`);
});

app.all("*", (req, res) => {
  res.send("<h1>Bad request</h1>");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
