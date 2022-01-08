const express = require("express");
const bodyparser = require("body-parser");
const http = require("https");
const { urlencoded } = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html")
});

app.post("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});



app.listen(process.env.PORT || 3000,function(req,res){
    console.log("server is started on port 3000");
});