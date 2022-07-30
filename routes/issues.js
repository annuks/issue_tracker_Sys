const express = require("express");
const router = express.Router();
// setting reference for issues controller
const issuesController = require('../controllers/issuesController');
// routes for further route
router.post('/create',issuesController.createIssue);
router.get('/delete/:id',issuesController.deleteIssue);
module.exports = router;


