const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).
  catch(error => handleError(error));

app.use("/api/auth", authRoute);

app.listen("3000", () => {
    console.log("Backend is running")
})

//LOGIN

module.exports = router