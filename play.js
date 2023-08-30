const net = require("net");
const connect = require('./client');

console.log("Connecting ...");


// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

connect();   // establishes a connection with the game server

setupInput();
// \u0003 maps to ctrl+c input
