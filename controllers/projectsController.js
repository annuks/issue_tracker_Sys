//calling required datamodel
const Projects = require('../models/projects');
const Issues = require('../models/issues');

// creating  controller action for creating an issue
module.exports.createProject = async (req, res) => {
  try {
    let projects = await Projects.create(req.body)
    return res.redirect('back')
  } catch (error) {
    console.log("Error in Project Creation",error)
  }  
  };

   
  // creating  controller action for deletion of an issue
  module.exports.deleteProject = async (req, res) => {
    try {
      let projects = await Projects.findByIdAndDelete(req.params.id)
      let issues = await Issues.deleteMany({_id:projects.issues})
      return res.redirect('back')
    } catch (error) {
      console.log("Error in Project Deletion",error)
    }  
    };

    module.exports.updateProject = async (req, res) => {
      try {
        let projects = await Projects.findByIdAndUpdate(req.params.id,req.body)
        return res.redirect('back')
      } catch (error) {
        console.log("Error in Project Creation",error)
      }  
      };
       

module.exports.projectDetails = async (req,res)=>{
  const project = await Projects.findById(req.params.id).populate('issues');
  console.log(project);
  return res.render('projectDetails',{
      title:'Project-Details',
      project,
  });
} 