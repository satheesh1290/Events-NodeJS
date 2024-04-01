//Create an event that will be called once every 2 seconds for 5 times only.

var EventEmitter = require("node:events").EventEmitter;
var ee = new EventEmitter();

const listener = () => console.log("Events are fun");
ee.addListener("foo", listener);

const interval = setInterval(() => {
  ee.emit("foo");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 11000);
