const http = require('http');
const fs = require('fs');

const port = 2222;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    switch (true) {
        case req.url === "/" && req.method === "GET":
            fs.readFile('./views/index.html', (err, data) => {
                res.setHeader('content-type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/script.js" && req.method === "GET":
            fs.readFile('./public/script.js', (err, data) => {
                res.setHeader('content-type', 'application/javascript');
                res.writeHead(200);
                res.end(data);
            });
            break;


        default:
            res.setHeader('content-Type', 'text/html');
            res.writeHead(404);
            res.end('<h1>HIBA<h1><a href="/">Vissza a fooldalra</a>');
            break;
    }
});
server.listen(port);