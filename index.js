const http = require("http");
const Route = require("./routes");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;
    Route.routes(url, req, res);
    res.end();
  })
  .listen(8000, () => {
    console.log("Server running at 8000");
  });
