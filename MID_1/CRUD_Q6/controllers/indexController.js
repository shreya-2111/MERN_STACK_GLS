const Room = require("../model/indexModel.js");

// POST API
const create = async (req,res) => {
    try{
        const room = await Room.create(req.body);
        res.json(room);
    }
    catch(err) {
        console.log(err.message);
    }
}

// GET API 
const getr = async (req,res) => {
   try{
        const room = await Room.find();
        res.json(room);
    }
    catch(err) {
        console.log(err.message);
    }
}

// GET BY ID 
const getbyid = async (req,res) => {
   try{
        const room = await Room.findById(req.params.id);
        res.json(room);
    }
    catch(err) {
        console.log(err.message);
    }
}

// PUT API (UPDATE) BY ID
const update = async (req,res) => {
   try{
        const room = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true }
        );
        res.json(room);
    }
    catch(err) {
        console.log(err.message);
    }
}

// DELETE API BY ID
const deleter = async (req,res) => {
   try{
        const room = await Room.findByIdAndDelete(req.params.id);
        res.json(room);
    }
    catch(err) {
        console.log(err.message);
    }
}

module.exports = {create , getr , getbyid , update, deleter };