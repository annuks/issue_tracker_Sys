const express = require("express");
const router = express.Router();
// setting reference of project controllers
const projectsController = require('../controllers/projectsController');

// route for further different navigation
router.post('/create',projectsController.createProject);
router.get('/delete/:id',projectsController.deleteProject);
router.get('/view/:id'  ,projectsController.projectDetails);
router.get('/add/labels/:id/:label',projectsController.addLabels);
module.exports = router;


