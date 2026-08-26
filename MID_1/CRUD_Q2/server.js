const express = require('express'); //This imports Express.
const mongoose = require("mongoose"); //This imports Mongoose.
const Book = require("./model/book"); //This imports the Book model.

const app = express(); //app is our Express application.

app.use(express.json()); //This allows our API to receive JSON data.

mongoose.connect("mongodb://Shreya:Shreya21112004@ac-2ebxc97-shard-00-00.hyplnj8.mongodb.net:27017,ac-2ebxc97-shard-00-01.hyplnj8.mongodb.net:27017,ac-2ebxc97-shard-00-02.hyplnj8.mongodb.net:27017/bookDB?ssl=true&replicaSet=atlas-yh4bt8-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{ //This connects to the MongoDB database using Mongoose.
    console.log("MongoDB Connected"); //Logs a message to the console if the connection is successful.
})
.catch((error)=>{ //This catches any errors that occur during the connection attempt.
    console.log("MongoDB connection error:",error); //Logs an error message to the console if the connection fails.
})

app.get("/",(req,res)=>{ //This is a GET request handler for the root endpoint ("/"). It sends a response indicating that the Book API is running.
    res.send("Book API is running"); //Sends a response indicating that the Book API is running.
});


//POST API to add a new book to the database.
app.post("/books", async (req,res)=>{ //This is an asynchronous function that handles POST requests to the "/books" endpoint.
    try{
        const book = new Book(req.body); //Creates a new Book instance with the data from the request body.
        const savedbook = await book.save(); //Saves the book to the database.
        res.status(201).json(savedbook); //Returns the saved book with a 201 status code.
    }
    catch(error){
        res.status(500).json({ //Returns a 500 status code and an error message if there is an error.
            message: "Error adding book", //Error message 
            error: error.message //Error details
        });
    }
});

//GET API to retrieve all books from the database.
app.get("/books", async (req,res)=> { //This is an asynchronous function that handles GET requests to the "/books" endpoint.
    try{
        const books = await Book.find(); //Retrieves all books from the database.
        res.json(books); //Returns the list of books in JSON format.
    }
    catch(error){ //Returns a 500 status code and an error message if there is an error.
        res.status(500).json({ //Returns a 500 status code and an error message if there is an error.
            message: "Error fetching books", //Error message
            error: error.message //Error details
        });
    }
});

//GET API to retrieve a book by its ID from the database.
app.get("/books/:id", async (req,res) => {  //This is an asynchronous function that handles GET requests to the "/books/:id" endpoint, where ":id" is a placeholder for the book's ID.
    try{
        const books = await Book.findById(req.params.id);  //Retrieves the book with the specified ID from the database.
        res.json(books); //Returns the book in JSON format.
    }
    catch(error){ //Returns a 500 status code and an error message if there is an error.
        res.status(500).json({ // Returns a 500 status code and an error message if there is an error.
            message: "Error fetching book", //Error message
            error : error.message //Error details
        });
    }
});

//PUT API to update a book by its ID in the database.
app.put("/books/:id", async (req, res)=>{ //This is an asynchronous function that handles PUT requests to the "/books/:id" endpoint, where ":id" is a placeholder for the book's ID.
    try{ //This is an asynchronous function that handles PUT requests to the "/books/:id" endpoint, where ":id" is a placeholder for the book's ID.
        const books = await Book.findByIdAndUpdate( //Updates the book with the specified ID in the database.
            req.params.id, //The ID of the book to update, obtained from the request parameters.
            req.body, //The updated book data, obtained from the request body.
            {new : true } //This option ensures that the updated book document is returned after the update operation.
        ); 
        res.json(books); //Returns the updated book in JSON format.
    }
    catch(error){ //Returns a 500 status code and an error message if there is an error.
        res.status(500).json({ //Returns a 500 status code and an error message if there is an error.
            message : "Error updating book", //Error message
            error : error.message //Error details
        });
    }
});

//DELETE API to delete a book by its ID from the database.
app.delete("/books/:id", async (req, res)=> { //This is an asynchronous function that handles DELETE requests to the "/books/:id" endpoint, where ":id" is a placeholder for the book's ID.
    try{ //This is an asynchronous function that handles DELETE requests to the "/books/:id" endpoint, where ":id" is a placeholder for the book's ID.
        const books = await Book.findByIdAndDelete(req.params.id); //Deletes the book with the specified ID from the database.
        res.json({ // Returns a JSON response indicating that the book was deleted successfully.
            message: "Book deleted successfully", //Returns a success message indicating that the book was deleted.
            books : books  // Returns the details of the deleted book.
        })
    }
    catch(error) { //Returns a 500 status code and an error message if there is an error.
        res.status(500).json({ //Returns a 500 status code and an error message if there is an error.
            message:  "Error deleting book", //Returns a 500 status code and an error message if there is an error.
            error : error.message //Error details   
        });
    }
});

app.listen(5000,()=>{ //This starts the Express server and listens for incoming requests on port 5000.
    console.log("Server running on http://localhost:5000"); //Logs a message to the console indicating that the server is running and provides the URL where it can be accessed.
});