/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	restricted: function(req, res, next) {
    return res.ok("you are authenticated");
  },
  open: function(req, res, next){
    return res.ok("you can access this page");
  },
  list: function(req, res, next) {
    Project.find({}, function(projects) {
      console.log("projects", projects);
    });
    return res.view('projectsList');
  }
};

