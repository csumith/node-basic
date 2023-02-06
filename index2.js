const http = require('http')
http.createServer((req,resp)=>{
  resp.writeHead(200,{'content-Type':'application/json'})
  resp.write(JSON.stringify({
    "name":"Amit",
    "Surname":"Rana"
  }))
  resp.end

}).listen(3000)