const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Handle incomming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });



  conn.on("connect", (data) => {
    console.log("Successfully connected to game server")
    conn.write("Name: FK")
  });

  
  return conn;
};

module.exports = connect;