const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname,'crud')
const takefilepath = `${filepath}/sumit.txt`

//fs.writeFileSync( takefilepath, 'This is my devil world')
//fs.readFile(takefilepath,'utf8',(err,item)=>{
  //  console.log(item)
//})

//fs.appendFile(takefilepath,"this is not devil world", (err)=>{
 // if(!err) console.log("File updated is successfully")
//})

//fs.rename(takefilepath,`${filepath}/Amit.txt`,(err)=>{
//if(!err)console.log("File rename successfully")
//})
fs.unlinkSync(`${takefilepath}/Amit.txt`)

