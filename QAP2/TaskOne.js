const http = require('http');

const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/about':
      console.log("About page accessed");
      response.end("About Page");
      break;
    case '/contact':
      console.log("Contact page accessed");
      response.end("Contact Page");
      break;
    case '/products':
      console.log("Products page accessed");
      response.end("Products Page");
      break;
    case '/subscribe':
      console.log("Subscribe page accessed");
      response.end("Subscribe Page");
      break;
    default:
      console.log("Home page accessed");
      response.end("Home Page");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
