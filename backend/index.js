const express = require('express')
const app = express()
const path =  require('path')
const PORT = 8000


// middleware
app.use(express.static(path.join(__dirname ,'../frontend')))


// rest apis
// GET , POST , PUT / PATCH , delete



app.get('/home' , (req,res)=>{
    res.send('This is Home Page')
})




app.get('/about' , (req,res)=>{
    res.sendFile(path.join(__dirname ,'../frontend' , 'About.html'))
})

app.get('/help' , (req,res)=>{
    res.send('This is Help Page')
})





app.listen(PORT , ()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})