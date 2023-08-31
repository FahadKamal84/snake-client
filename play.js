const connect = require('./client');
const setupInput = require("./input");


console.log("Connecting ...");
   
let conn = connect()  // establishes a connection with the game server

setupInput(conn);

