const fs = require("fs");

const readFile = (path) => {
  const fileData = fs.readFileSync(path);
  return fileData.toString();
};

module.exports = {
  readFile,
};
