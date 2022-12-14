//setting model schema for db uses
// creating issues model
const mongoose = require("mongoose");
const issuesSchema = new mongoose.Schema({
  issueTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  labels: [{
    type:String,
  }],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Projects'
  }
},
  {
    timestamps: true,
  });
const Issues = mongoose.model( "Issues",issuesSchema);
module.exports = Issues;