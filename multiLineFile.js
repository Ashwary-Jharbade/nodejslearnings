const fs = require("fs");
const readline = require("readline");
const multiLineFile = (path) => {
  const file = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false,
  });
  file.on("line", (line) => {
    console.log(line);
  });
};

module.exports = {
  multiLineFile,
};
