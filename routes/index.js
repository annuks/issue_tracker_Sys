const express = require('express');
const router = express.Router();
//route for home controller
const homeController = require('../controllers/homeController');
router.get('/',homeController.home);

//routes for further movement
router.use('/projects',require('./projects'));
router.use('/issues',require('./issues'));


module.exports = router;
