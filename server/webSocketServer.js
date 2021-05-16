let WSS = require("ws").Server;
let mockData = require("./mockData");
let _ = require("lodash");

const webSocketServer = new WSS({ port: 8081 });

// When a connection is established
webSocketServer.on("connection", function (socket) {
  console.log("Opened connection");

  // Send data back to the client
  var json = JSON.stringify(mockData);
  socket.send(json);

  // When data is received
  socket.on("message", function (message) {
    console.log("Received: " + message);
  });

  // The connection was closed
  socket.on("close", function () {
    console.log("Closed Connection");
  });
});

// broadcast stock data to all connected clients
var broadcast = function () {
  const mockStockData = _.cloneDeep(mockData);
  let updatedStockData = mockStockData.map((stockDetails) => {
    stockDetails.price =
      stockDetails.price + parseFloat(Math.random().toFixed(2));
    return stockDetails;
  });

  var json = JSON.stringify(updatedStockData);

  // webSocketServer.clients is an array of all connected clients
  webSocketServer.clients.forEach(function each(client) {
    client.send(json);
    // console.log("Sent: " + json);
  });
};

setInterval(broadcast, 500);
