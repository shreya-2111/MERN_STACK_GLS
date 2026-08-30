const express = require("express");
const router = express.Router();

const {createEmployee, getEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById} = require("../controller/indexController.js");
router.post("/",createEmployee); // Define a POST route for creating a new employee
router.get("/",getEmployee); // Define a GET route for retrieving all employees
router.get("/:id",getEmployeeById); // Define a GET route for retrieving a specific employee by ID
router.put("/:id", updateEmployeeById); // Define a PUT route for updating a specific employee by ID
router.delete("/:id", deleteEmployeeById); // Define a DELETE route for deleting a specific employee by ID

module.exports = router;
