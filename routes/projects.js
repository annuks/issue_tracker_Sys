const express = require("express");
const router = express.Router();
const projectsController = require('../controllers/projectsController');


router.post('/create',projectsController.createProject);
router.post('/update',projectsController.updateProject);
router.post('/delete',projectsController.deleteProject);
router.get('/view'  ,projectsController.projectDetails);
module.exports = router;


