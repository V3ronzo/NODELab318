const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Wassssaaaap!\n');
  });

//    // Root route
//    if (req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   } 

//    // About route
//    else if (req.url === '/about') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('This is the About page.\n');
//   }
//   // Contact route
//   else if (req.url === '/contact') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('This is the Contact page.\n');
//   }


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


