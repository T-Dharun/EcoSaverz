const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const SerialPort = require('serialport');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const port = new SerialPort('COM3', { baudRate: 9600 });  // Adjust port accordingly

port.on('data', data => {
  // Broadcast data to all WebSocket clients
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data.toString());
    }
  });
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
