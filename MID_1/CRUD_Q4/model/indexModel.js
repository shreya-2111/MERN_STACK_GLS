const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    },
    disease : {
        type : String
    },
    doctor : {
        type : String
    }
});

module.exports = mongoose.model("Patient",patientSchema)