const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}/`);
});
