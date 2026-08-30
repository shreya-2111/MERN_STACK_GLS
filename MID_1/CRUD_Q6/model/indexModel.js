const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    roomNumber : Number,
    roomType : String,
    price : Number,
    floor : Number,
    isAvailable : Boolean
})

module.exports = mongoose.model("Room",hotelSchema);