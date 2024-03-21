const express = require('express');
const router = express.Router();

const taskController = require('../controller/TaskController');

router.post('/create', taskController.createTask);
router.get('/find/:taskId', taskController.findTask);
router.put('/update/:taskId', taskController.updateTask);
router.delete('/remove/:taskId', taskController.deleteTask);
router.get('/find-all', taskController.findAllTask);

module.exports=router; 