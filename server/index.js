//TODO - write a server here...

const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('hello from server at url'+req.url);
})

server.listen(3000)