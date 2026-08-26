const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

mongoose.connect("mongodb://Shreya:Shreya21112004@ac-2ebxc97-shard-00-00.hyplnj8.mongodb.net:27017,ac-2ebxc97-shard-00-01.hyplnj8.mongodb.net:27017,ac-2ebxc97-shard-00-02.hyplnj8.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-yh4bt8-shard-0&authSource=admin&appName=Cluster0")
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Student API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});