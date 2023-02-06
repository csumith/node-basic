const express = require('express')
const app = express()
const path = require('path')
const publicpathss = path.join(__dirname,"public")

app.set('view engine','ejs')

app.get('/profile',(req,resp)=>{
    const user = {
        name:"Sumit",
        surname:"Chouhan",
        skills:["html","css","python","java"]
    }
    resp.render('profile',{user})
})

app.listen(3500,(err)=>{
 if(!err)console.log('Server run at 3500 successfully')
})
