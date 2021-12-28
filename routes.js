const events = require("./event");
const readFile = require("./readFile").readFile;
const googleApiCall = require("./googleApiCall").googleApiCall;
const multiLineFile = require("./multiLineFile").multiLineFile;

const routes = (url, req, res) => {
  switch (url) {
    case "/":
      res.write("<b>Welcome Home</b>");
      break;
    case "/open":
      res.write("<b>Open</b>");
      events.eventEmitter.emit("open");
      break;
    case "/close":
      res.write("<b>Closed</b>");
      events.eventEmitter.emit("close");
      break;
    case "/readFile":
      const path = __dirname + "/serve/data.txt";
      const fileData = readFile(path);
      res.write(`<b>${fileData}</b>`);
      break;
    case "/google":
      googleApiCall(req, res);
      break;
    case "/read":
      const pathe = __dirname + "/serve/data.txt";
      multiLineFile(pathe);
      res.write("Reading file");
      break;
    default:
      res.write("<b>Error</b>");
  }
};

module.exports = {
  routes,
};
