const event = require("events");
const eventEmitter = new event.EventEmitter();

eventEmitter.on("open", () => {
  console.log("Open event called");
});

eventEmitter.addListener("close", () => {
  console.log("Close event called");
});

module.exports = {
  eventEmitter,
};
