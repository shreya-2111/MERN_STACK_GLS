const mongoose = require("mongoose"); // Import Mongoose

// Connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("MongoDB Connected");
    }
    catch(error) {
        console.log("MongoDB Connection error:",error.message);
    }
}

module.exports = connectDB;