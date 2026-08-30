require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const patientRoutes = require("./routes/indexRoute.js")


const app = express();

app.use(express.json());
app.use("/patient",patientRoutes);


connectDB();

app.listen(5000, ()=> {
  console.log("Server is running on port 5000");
});