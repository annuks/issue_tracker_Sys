const Projects = require('../models/projects');

module.exports.home = async (req,res)=>{
  try {
    const projects = await Projects.find({}).populate('issues');
      return res.render("home", {
        title: "Home|IssueTracker",
        projects,
        index:1,
      });
  } catch (error) {
    console.log("Error",error);
  }
  
    }