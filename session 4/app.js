const http = require('http');
const fileSystem = require('./file-system')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fileSystem.readFile(req, res, function(err, data){
        if(err){
            res.statusCode = 500
            res.end(err)
        } else{
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end(data)
        }
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});