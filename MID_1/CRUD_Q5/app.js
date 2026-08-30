require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const eventsRoutes = require("./routes/indexRoute.js");

const app = express();
app.use(express.json());

app.use("/event",eventsRoutes);

connectDB();

app.listen(5000, ()=>{
    console.log("Server is running on http://localhost:5000");
});