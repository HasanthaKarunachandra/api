const express = require('express');
const router = express.Router();

const projectController = require('../controller/ProjectController');

router.post('/create', projectController.createProject);
router.get('/find/:projectId', projectController.findProject);
router.put('/update/:projectId', projectController.updateProject);
router.delete('/remove/:projectId', projectController.deleteProject);
router.get('/find-all', projectController.findAllProject);

module.exports=router; 