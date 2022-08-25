const express = require("express");
const app = express();
const port = process.env.PORT | 4000;

app.listen(port,function(err){
    console.log("Server is running...");
})

app.get("/",function(req,res){
    res.send("Hello world!");
})
app.get("/Bong-da",function(req,res){
    res.send("Bong Da 24h");
})