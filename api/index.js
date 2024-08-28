const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
});

app.listen("3000", () => {
    console.log("Backend is running")
})