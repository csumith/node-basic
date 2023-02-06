const express = require('express')
const app = express()
const path = require('path')
const publicpaths = path.join(__dirname,'public')

app.get('/', (_,resp)=>{
    resp.sendFile(`${publicpaths}/home.html`)
})
app.get('/Help', (_,resp)=>{
    resp.sendFile(`${publicpaths}/Help.html`)
})
app.get('/about', (_,resp)=>{
    resp.sendFile(`${publicpaths}/about.html`)
})
app.get('*', (_,resp)=>{
    resp.sendFile(`${publicpaths}/pnf.html`)
})

app.listen(4000,(err)=>{
   if(!err){
    console.log("Server is launch")
   }
})

