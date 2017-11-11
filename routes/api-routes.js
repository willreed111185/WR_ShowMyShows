var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req,res){
    // // Query users from database
    var users = {
      user: [
        {id: "1", username: "Kendra"},
        {id: "2", username: "Monica"},
        {id: "3", username: "Billy"}
      ]
    }

  	res.render("login", users);
  })

  app.get("/user/:userid", function(req, res) {
    var userid = {
      favorite:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
      watchList:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
    }
    res.render("index", userid);
  })

  app.get("/user/:userid/:relation", function(req, res) {
    var userid = {
      favorite:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
      watchList:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
    }
    res.render("relationship", userid);
  })

  app.get("/api/authors", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findAll({
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
