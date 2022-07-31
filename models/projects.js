
//setting model schema for db uses
// creating projects model
const mongoose = require("mongoose");
const projectsSchema = new mongoose.Schema({
  projectTitle: {
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
  issues:[{
    type:mongoose.Schema.Types.ObjectId,
    ref : 'Issues'    
  }],
  labels: [{
    type:String,
  }],
},
{
  timestamps:true,
}
);
const Projects = mongoose.model( "Projects",projectsSchema);
module.exports = Projects;