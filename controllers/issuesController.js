//calling required datamodel
const Issues = require('../models/issues');
const Projects =  require('../models/projects')

// creating  controller action for creating an issue

module.exports.createIssue = async (req, res) => {
  try {
    let issues = await Issues.create({
      issueTitle: req.body.issueTitle,
      description:req.body.description,
      author:req.body.author
    })
    if(typeof(req.body.labels)=='string'){
      issues.labels.push(req.body.labels);
      issues.save();
    }else{
      issues.labels = req.body.labels;
      issues.save();
    }

    let project = await Projects.findById(req.body.project)
    project.issues.push(issues._id);
    project.save();
    return res.redirect('back');
  } catch (error) {
    console.log("Error in Issue Creation",error)
  }  
  };


  // creating  controller action for deleting an issue

  module.exports.deleteIssue = async(req,res) =>{
    try {
      let issues = await Issues.findByIdAndDelete(req.params.id)
      return res.redirect('back');
    } catch (error) {
      console.log("Error in Issue Deletion",error)
    }
  }
  