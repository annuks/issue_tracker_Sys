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
  labels: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
const Issues = mongoose.model( "Issues",issusSchema);
module.exports = Issues;