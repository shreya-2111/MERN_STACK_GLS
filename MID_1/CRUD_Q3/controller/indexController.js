const Employee = require("../model/indexModel.js");

// POST API to create a new employee
const createEmployee = async (req,res) => {
    try {
        const employee = new Employee(req.body); // Create a new Employee instance with the request body
        const savedEmployee = await employee.save(); // Save the employee to the database
        res.status(201).json(savedEmployee); // Send a 201 response with the saved employee data
    }
    catch(error) {
        res.status(400).json({message: error.message}); // Send a 400 response with the error message
    }
};


// GET API to retrieve all employees
const getEmployee = async (req,res) => {
    try {
        const employees = await Employee.find(); // Retrieve all employees from the database
        res.status(200).json(employees); // Send a 200 response with the employee data
    }
    catch(error) {
        res.status(400).json({message: error.message}); // Send a 400 response with the error message
    }
};

// GET BY ID API to retrieve a specific employee by ID
const getEmployeeById = async (req,res) => {
    try {
        const employee = await Employee.findById(req.params.id); // Retrieve an employee by ID from the database
        if (!employee) {
            return res.status(404).json({message: "Employee not found"}); // Send a 404 response if the employee is not found
        }
        res.status(200).json(employee); // Send a 200 response with the employee data
    }
    catch(error) {
        res.status(400).json({message: error.message}); // Send a 400 response with the error message
    }
};

// PUT API to update a specific employee by ID
const updateEmployeeById = async (req,res) => {
    try {
        const updatedEmployeeById = await Employee.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" }); // Update an employee by ID with the request body and return the updated document               
        if (!updatedEmployeeById) {
            return res.status(404).json({message: "Employee not found"}); // Send a 404 response if the employee is not found
        }               
        res.status(200).json(updatedEmployeeById); // Send a 200 response with the updated employee data
    }
    catch(error) { 
        res.status(400).json({message: error.message}); // Send a 400 response with the error message
    }
};

// DELETE API to delete a specific employee by ID
const deleteEmployeeById = async (req,res) => {
    try {
        const deletedEmployeeById = await Employee.findByIdAndDelete(req.params.id); // Delete an employee by ID from the database
        if (!deletedEmployeeById) {
            return res.status(404).json({message: "Employee not found"}); // Send a 404 response if the employee is not found
        }
        res.status(200).json({message: "Employee deleted successfully"}); // Send a 200 response with a success message
    }
    catch(error) {
        res.status(400).json({message: error.message}); // Send a 400 response with the error message
    }
};

module.exports = { createEmployee, getEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById }; // Export the createEmployee, getEmployee, getEmployeeById, updateEmployeeById, and deleteEmployeeById functions
