const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<b>Hello there</b>");
    res.end();
  })
  .listen(8000, () => {
    console.log("Server running at 8000");
  });
