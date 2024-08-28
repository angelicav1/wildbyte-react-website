const express = require("express");
const app = express();

app.use("/",(reg,res)=>{
    console.log("hey this is main url")
})

app.listen("3000", () => {
    console.log("Backend is running")
})