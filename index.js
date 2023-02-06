const http = require('http')
http.createServer((req,resp)=>{
  resp.writeHead(200,{'content-Type':'application/json'})
  resp.write(JSON.stringify({
    "Name":"sumit",
    "Surname":"Chouhan"

    
  }))
  resp.end
}).listen(4000)