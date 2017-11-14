var db = require("../models");

module.exports = function(app) {

  // Add a new user to the DB
  app.post("/api/user", function(req, res) {
      db.user.create({
          username: req.body.username,
          password: req.body.password
      })
      // pass the result of our call
          .then(function(dbUser) {
              // log the result to our terminal/bash window
              console.log(dbUser);
              // redirect
              res.redirect("/");
          });
  });

  // Show the login/user selection page
  app.get("/", function(req,res){

    // Query users from database
    db.user.findAll({})
    .then(function(dbUsers){
      var userObj = {
        user:dbUsers
      }

      res.render("login", userObj);
    });  
  });

  app.get("/user/:userid", function(req, res) {
    console.log("GET /user/userid");
    var userid = req.params.userid;
    var user;
    var favorites = [];
    var watchList = [];

    console.log("User Id Selected: " + userid);
    // Query database to find user and their favorite and watchlist shows
    db.user.findById(userid).then(function(dbUser){

      var user = {  
      username: dbUser.username,
      favorite:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
      watchList:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
      }

      res.render("index", user);
    })


  });
}
  // app.get("/api/user/:userid/:relation", function(req, res) {
  //   var userid = {
  //     favorite:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
  //     watchList:[{showID:"showID", imgURL:"http://via.placeholder.com/150x200", title:"title"}, {showID:"showID2", imgURL:"http://via.placeholder.com/150x200", title:"title2"}, {showID:"showID3", imgURL:"http://via.placeholder.com/150x200", title:"title3"}, {showID:"showID4", imgURL:"http://via.placeholder.com/150x200", title:"title4"}, {showID:"showID5", imgURL:"http://via.placeholder.com/150x200", title:"title5"}],
  //   }
  //   res.render("relationship", userid);
  // });

  // app.get("/api/show/:Showid", function(req, res) {
  //     // json to return all shows or a specific one (devOps only)
  //     //   {
  //     //     [array of all shows or a specific one]
  //     //   }
  //   db.Show.findOne({
  //     limit:1,
  //     where:{
  //       OMDB_id:req.params.Showid
  //     }
  //   }).then(function(dbShow){
  //     var showObj = {
  //       user:dbShow
  //     }
  //     console.log(showObj);
  //     res.render("index", showObj);
  //   })

  // app.get("/api/show/:Showid", function(req, res) {
  //     // json to return all shows or a specific one (devOps only)
  //     //   {
  //     //     [array of all shows or a specific one]
  //     //   }
  //   db.Show.findOne({
  //     limit:1,
  //     where:{
  //       OMDB_id:req.params.Showid
  //     }
  //   }).then(function(dbShow){
  //     var showObj = {
  //       user:dbShow
  //     }
  //     console.log(showObj);
  //     res.render("index", showObj);
  //   })


  // });

  // app.get("/api/user/:Userid/:relation/?count", function(req, res) {
  //     // to get whole(or part) view of relationship
  //     //   {
  //     //     relationship:[array of relationshipObj{showID, imgURL, title}]
  //     //   }
  // });

  // app.post("/api_search/:userID/:showID/:title/:imgURL", function(req, res) {
  // // create show !=exists, create bridge entry/link
  // //   {
  // //     status
  // //   } HndlBrs:index->refreshPage/get
  // });

  // app.post("/api_relation/:userID/:showID/:relation", function(req, res) {
  //     // db.Author.create(req.body).then(function(dbAuthor) {
  //     //   res.json(dbAuthor);
  //     // });
  // });

  // app.delete("/api_relation/:userShowID", function(req, res) {
  //   //   db.Author.destroy({
  //   //     where: {
  //   //       id: req.params.id
  //   //     }
  //   //   }).then(function(dbAuthor) {
  //   //     res.json(dbAuthor);
  //   //   });
  //   // });

  // });
// }