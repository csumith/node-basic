const express= require('express')
const app = express()
app.get( "",(req,res)=>{
    console.log("Data send by browser", req.query.name) // localhost:4000?name:sumit this params came from frontend
res.send("This is home page")
})
app.get( "/about",(req,res)=>{
    res.send("This is about page")
})
app.get('/help',(req,res)=>{
  res.send("This is help page")
})
app.listen(4000,()=>{
    console.log("server run successfully")
})