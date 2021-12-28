const https = require("https");

const googleApiCall = (req, res) => {
  https
    .get("https://www.google.com/", (response) => {
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);

      response.on("data", (d) => {
        res.writeHead(response.statusCode, response.headers);
        res.write(d);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
};

module.exports = {
  googleApiCall,
};
