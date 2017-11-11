var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req,res){
    // // Query users from database
    db.User.findAll({})
    .then(function(dbUsers){
      // res.render("login",dbUsers)
      var userObj = {
        user:dbUsers
      }
      console.log(userObj);
      res.render("login", userObj);
    });  
  })

  app.get("/api/user/:Userid", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // db.Author.findAll({
    //   include: [db.Post]
    // }).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
  });

  app.get("/api/show/:Showid", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // // In this case, just db.Post
    // db.Author.findOne({
    //   where: {
    //     id: req.params.id
    //   },
    //   include: [db.Post]
    // }).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
  });

  app.get("/api/user/:Userid/:relation/?count", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // db.Author.findOne({
    //   where: {
    //     id: req.params.id
    //   },
    //   include: [db.Post]
    // }).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
  });

  app.post("/api_search/:userID/:showID/:title/:imgURL", function(req, res) {
    // db.Author.create(req.body).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
  });

  app.post("/api_relation/:userID/:showID/:relation", function(req, res) {
    // db.Author.create(req.body).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // });
  });

  app.delete("/api_relation/:userShowID", function(req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

};
