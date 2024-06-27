console.log("HELLO WORLD");

// Server.js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello Node!!!!!</h1>\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http:${hostname}:${port}/`);
});