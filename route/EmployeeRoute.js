const express = require('express');
const router = express.Router();

const employeeController = require('../controller/EmployeeController');

router.post('/create', employeeController.createEmployee);
router.get('/find/:employeeId', employeeController.findEmployee);
router.put('/update/:employeeId', employeeController.updateEmployee);
router.delete('/remove/:employeeId', employeeController.deleteEmployee);
router.get('/find-all', employeeController.findAllEmployee);

module.exports=router; 