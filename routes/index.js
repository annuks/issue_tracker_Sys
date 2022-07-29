const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
router.get('/',homeController.home);

router.use('/projects',require('./projects'));
router.use('/issues',require('./issues'));


module.exports = router;
