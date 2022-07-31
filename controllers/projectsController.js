//calling required datamodel
const Projects = require("../models/projects");
const Issues = require("../models/issues");

// creating  controller action for creating an issue
module.exports.createProject = async (req, res) => {
  try {
    let projects = await Projects.create(req.body);
    return res.redirect("back");
  } catch (error) {
    console.log("Error in Project Creation", error);
  }
};

// creating  controller action for deletion of an issue
module.exports.deleteProject = async (req, res) => {
  try {
    let projects = await Projects.findByIdAndDelete(req.params.id);
    let issues = await Issues.deleteMany({ _id: projects.issues });
    return res.redirect("/");
  } catch (error) {
    console.log("Error in Project Deletion", error);
  }
};

module.exports.projectDetails = async (req, res) => {
  const project = await Projects.findById(req.params.id).populate("issues");
  // console.log(project);

  return res.render("projectDetails", {
    title: "Project-Details",
    project,
  });
};


module.exports.addLabels = async (req,res)=>{
  try {

        const project = await  Projects.findById(req.params.id);
        project.labels.push(req.params.label);
        project.save();
        return res.json(200, {
          message: "Labels Created",
          success: true,
        });

  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      success: false,
      message: " **Internal Server Error**",
    });
  }
};


module.exports.filterData = async (req,res)=>{
  try {

    let authorCheck = true;
    let labelCheck = true;
    if(req.body.labels.length > 0) {
      labelCheck = false;
    }
    if (req.body.author.length > 0){
      authorCheck=false;
    }

    // data flteration for dynamic search
    const issues = await  Issues.find({
      '$and':[{project:req.params.id},
        {'$or':[{author : { '$exists': authorCheck } },{author:{'$regex':req.body.author}}]},
        {'$or':[{labels : { '$exists': labelCheck } },{ labels:{'$all':req.body.labels}}]},
        {'$or':[{issueTitle : {'$regex': req.body.search}},{description : {'$regex': req.body.search}}]
      }]
    });


  return res.json(200, {
    message: "Filter",
    data:{issues}
  });
    
  } catch (error) {
    console.log(" *********", err);
    return res.json(404, {
      message: "Internal Server error",
    
  });
  
}
};
