// http_server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server listening on port 3000');
});

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', (message) => {
  console.log(`Received message: ${message}`);
});

eventEmitter.emit('customEvent', 'Hello, EventEmitter!');


const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File content:', data);
});

// npm_example.js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('Data:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

  

