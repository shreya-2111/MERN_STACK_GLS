require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const hotelRoute = require("./routes/indexRoute.js");

const app = express();
app.use(express.json())

app.use("/hotel",hotelRoute);

connectDB();

app.listen(5000, () =>{
    console.log("Server is runnig on 5000")
});