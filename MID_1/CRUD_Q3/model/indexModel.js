const mongoose = require("mongoose"); // Import Mongoose

const employeeSchema = new mongoose.Schema({ // Create Employee Schema
    // Then our five fields:
    name : {
        type: String,
        required: true
    },
    email :{
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    }
});

//Create Model
const Employee = mongoose.model("Employee",employeeSchema);


//Export
module.exports = Employee;