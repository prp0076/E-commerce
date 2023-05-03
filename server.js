const express = require("express");
const app = express();
app.get("/",(req,res)=>{
 res.send({
    message:"welcome to server"
 })
})
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server is runing on ${PORT}`)
})