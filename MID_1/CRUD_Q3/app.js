const express = require("express"); // Import Express
const dotenv = require("dotenv"); // Import dotenv to load environment variables from .env file

dotenv.config(); // Load environment variables from .env file 

const connectDB = require("./config/db"); // Import the connectDB function from the db.js file
const employeeRoutes = require("./routes/indexRoute");   // Import the employeeRoutes from the indexRoute.js file

const app = express(); // Create an instance of the Express application 
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();        

app.use(express.json()); // Middleware to parse incoming JSON requests


// Define a route for the root URL ("/") that sends a simple response
app.get("/",(req,res)=> {
    res.send("API is running...");
});


app.use("/employee",employeeRoutes);

// Start the server and listen on the configured port
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});
