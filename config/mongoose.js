
// connecting mongoose with database 
const mongoose = require('mongoose');
// db address on cloud
mongoose.connect(DB="mongodb+srv://annukumarsingh:sXuWgQ5RyzZkpd1U@cluster0.skfggd8.mongodb.net/issue_tracker_sys");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connection Established with MongoDB:');
});

module.exports = db;