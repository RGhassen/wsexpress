const express = require('express')
const { path } = require('express/lib/application')
const res = require('express/lib/response')
const app = express()
port = 4000
const {addTime} = require('./midelware/time')
const home = __dirname+'/public/home.html'
const contact = __dirname+'/public/contact.html'
const service = __dirname+'/public/service.html'

// app.get("/", (req,res)=>{
//     res.send('hello')
// })

app.get('/',addTime, (req,res)=>{
    res.sendFile(home)
})
app.get('/contact',addTime, (req,res)=>{
    res.sendFile(contact)
})
app.get('/service',addTime,(req,res)=>{
    res.sendFile(service)
})
app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/public/css/main.css")
})







app.listen(port, (err)=>{
    err? console.log(err) : console.log('server is runnig on port 4000')
})