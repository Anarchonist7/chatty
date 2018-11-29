const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
let clients = 0;


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  function genColor() {
    let genny = Math.floor(Math.random() * 4 + 1)

    if (genny === 1) {
      return 'purple';
    } else if (genny === 2) {
      return 'green';
    } else if (genny === 3) {
      return 'red';
    } else {
      return 'blue';
    }
  }
  ws.color = genColor();
  clients++;
  // console.log('we have ' + clients + ' number of users online')
  let population1 = {type: 'pop', population: clients}
  wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(population1));
        }
      });

  console.log('Client connecterooood');
   ws.on('message', function incoming(message) {
    const msg = JSON.parse(message);
switch (msg.type) {
  case 'postMessage':
      const withId = JSON.parse(message);
      const uuidv1 = require('uuid/v1')
      withId.id = uuidv1();
      withId.type = 'incomingMessage';
      withId.color = ws.color;
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(withId));
        }
      });
    break;
  case 'postNotification':
    msg.type = 'incomingNotification';
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    break;
    }
  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    clients--;
    let population2 = {type: 'pop', population: clients}
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(population2));
        }
      });
    // console.log('we have ' + clients + ' number of clients')
    });
});