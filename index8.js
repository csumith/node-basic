const express = require('express')
const app = express();

app.get('/',(req,resp)=>{
    resp.send([
        {
         name:"sumit",
         surname:"chouhan"
        }
])
})

app.listen(3000,(err)=>{
if(!err)console.log("Server run perfectly")
})