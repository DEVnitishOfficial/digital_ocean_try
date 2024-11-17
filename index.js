const express = require('express')
require("dotenv").config()

const app = express()

app.get("/",(req,res) => {
    res.send({name:"nitsh"})
})

app.get('/login',(req,res) => {
    res.send({
        email:"nitish.naroun123@gmail.com",
        password:"nk123"
    })
})

app.get("/getData",(req,res) => {
    res.send({
        laptop:"lenvo v15",
        ram:"8Gb",
        ssd:"512GB",
        color:"black",
        batter_cycle:"365"
    })
})

app.listen(process.env.port,(req,res) => {
    console.log(`port is listening on ${`http://localhost:${process.env.port}`}`);
})