const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const PORT = process.env.PORT || 3000;
const DB = process.env.DB;
const dbconn = require("./config/db");




// dbconn();
const app = express();
app.use(express.json());
// app.use(express.urlencoded("extended: true"));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/api/test', (req, res)=> {
    res.render('index')
});

app.get('/api/home', (req, res)=> {
    res.render("index");
})





app.listen(3000 , ()=> {
    console.log(`listening on ${PORT}`);
});