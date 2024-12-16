const express = require('express');

const app = express();
app.use("/",(req,res)=>{
    res.send("This is injob Server");
})

app.listen(3001,(req,res)=>{
    console.log("Server is running");
    
})