const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema ({
    eventname : String,
    date : String,
    venue : String,
    organizer : String,
    capacity : Number
});

module.exports = mongoose.model("Event",eventSchema);