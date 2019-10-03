const express = require('express')
const app= express()

app.use("/",express.static(__dirname+"/client"))
app.use("/",express.static(__dirname+"/src"))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.listen(5000,(err)=>{
    if (err) throw err
    
    console.log("listeing to port 5000");
    

})

