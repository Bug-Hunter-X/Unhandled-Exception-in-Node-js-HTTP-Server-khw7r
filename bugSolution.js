const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    // throw new Error('Something went wrong!');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Additional safety net for uncaught exceptions
server.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});