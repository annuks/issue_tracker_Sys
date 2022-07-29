const express = require("express");
const router = express.Router();
const issuesController = require('../controllers/issuesController');

router.post('/create',issuesController.createIssue);
router.post('/delete',issuesController.deleteIssue);
router.get('/view',issuesController.issueDetails);
module.exports = router;


