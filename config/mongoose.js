const mongoose = require('mongoose');
mongoose.connect(DB="mongodb+srv://annukumarsingh:HdiaunmRTKVFCJd3@cluster0.skfggd8.mongodb.net/issue_tracker_sys");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connection Established with MongoDB:');
});

module.exports = db;