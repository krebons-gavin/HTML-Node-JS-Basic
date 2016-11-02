/**
 * Created by Gavin on 2016/11/1 0001.
 * Nodejs Hello World Example
 * https://nodejs.org/dist/latest-v6.x/docs/api/synopsis.html
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h2>Hello World, Today is 2016-11-01.</h2>\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

