//calling required datamodel
const Issues = require('../models/issues');
const Projects =  require('../models/projects')

// creating  controller action for creating an issue

module.exports.createIssue = async (req, res) => {
  try {
    let issues = await Issues.create(req.body)
    let project = await Projects.findById(req.body.project)
    project.issues.push(issues._id);
    return res.redirect('back')
  } catch (error) {
    console.log("Error in Issue Creation",error)
  }  
  };


  module.exports.deleteIssue = async(req,res) =>{
    try {
      let issues = await Issues.findByIdAndDelete(req.params.id)
      return res.redirect('back');
    } catch (error) {
      console.log("Error in Issue Deletion",error)
    }
  }
  module.exports.issueDetails = async (req,res)=>{
    const issues = await Isuues.find(req.params.id).populate('projects');
    return res.render('issueDetails',{
        title:'Issues-Details',
        issues,
    });
  } 