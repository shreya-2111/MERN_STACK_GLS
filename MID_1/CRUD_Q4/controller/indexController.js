const Patient = require("../model/indexModel.js")

// POST API
const create = async (req,res) => {
    try{
        const patient = await Patient.create(req.body);
        res.json(patient);
    }
    catch(err) {
        console.log(err.message);
    };
}


//GET API
const getp = async (req,res) => {
    try{
        const patient = await Patient.find();
        res.json(patient);
    }
    catch(err) {
        console.log(err.message);
    };
}

// GET API BY ID
const getbyid = async (req,res) =>{
    try{
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    }
    catch(err) {
        console.log(err.message);
    }
}

// PUT API ( UPDATE BY ID )
const updatebyid = async (req,res)=>{
    try{
        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.json(patient);
    }
    catch(err){
        console.log(err.message);
    }
}

// DELETE API
const deletep = async (req,res) =>{
   try {
     const patient = await Patient.findByIdAndDelete(req.params.id);
        res.json(patient);
   }
   catch (err) {
    console.log(err.message);
   }
}




module.exports = { create , getp , getbyid , updatebyid , deletep};