const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  let route = request.url === '/' ? '/home' : request.url;
  let filePath = path.join(__dirname, 'views', `${route}.html`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err}`);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('File not found');
    } else {
      console.log(`File ${route}.html read`);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

