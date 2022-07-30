const Projects = require('../models/projects');
//home controller for handling action on home page
module.exports.home = async (req,res)=>{
  try {
    const projects = await Projects.find({}).populate('issues');
    console.log(projects)
      return res.render("home", {
        title: "Home|IssueTracker",
        projects,
        index:1,
      });
  } catch (error) {
    console.log("Error",error);
  }
  
    }