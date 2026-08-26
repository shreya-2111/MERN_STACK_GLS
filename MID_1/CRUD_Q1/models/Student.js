const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    cgpa: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);