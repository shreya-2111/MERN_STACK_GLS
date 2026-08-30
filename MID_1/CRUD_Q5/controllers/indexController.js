const Event = require("../model/indexModel.js");

//POST API
const create = async (req,res) => {
    try{
        const event = await Event.create(req.body);
        res.json(event);
    }
    catch(err) {
        console.log(err.message);
    }
}


//GET API
const gete = async (req,res) => {
    try{
        const event = await Event.find();
        res.json(event);
    }
    catch(err){
        console.log(err.message);
    }
}


// GET API (BY ID)
const getbyid = async (req,res) =>{
    try{
        const event = await Event.findById(req.params.id);
        res.json(event);
    }
    catch(err){
        console.log(err.message);
    }
}

// PUT API (UPDATE)
const update = async (req,res) => {
    try{
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
    }
    catch(err) {
        console.log(err.message);
    }
}

module.exports = {create , gete , getbyid , update };