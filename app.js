const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const PORT = process.env.PORT || 3000;
const DB = process.env.DB;
const dbconn = require("./config/db");



const app = express();
app.use(express.json());
app.use(express.urlencoded("extended: true"));

dbconn();

app.get('/api/test', (req, res)=> {
    res.sendFile({
        time : new Date(), 
    })
});

app.get('/api/home', (req, res)=> {
    res.send("Home api testing");   
})





app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`);
});