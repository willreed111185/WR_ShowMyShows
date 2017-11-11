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
      res.render("login", userObj);
    });  
  })

<<<<<<< HEAD
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
=======
  app.get("/api/user/:Userid", function(req, res) {
  // Pull up top 5 of each watchList   ascending, limit 5, join
    // {
    //   favorites:[array of favsObj{showID, imgURL, title}]
    //   watchList:[array of watchlistObg{showID, imgURL, title}]
    // }
    db.User.findOne({
      limit:1,
      where:{
        id:req.params.Userid
      }
    }).then(function(dbUsers){
      var userObj = {
        user:dbUsers
      }
      console.log(userObj);
      res.render("index", userObj);
    })
>>>>>>> ba732c4cf9fd23596c03b0064f437ddd0d1dc140
  });

  app.get("/api/show/:Showid", function(req, res) {
      // json to return all shows or a specific one (devOps only)
      //   {
      //     [array of all shows or a specific one]
      //   }

  });

  app.get("/api/user/:Userid/:relation/?count", function(req, res) {
      // to get whole(or part) view of relationship
      //   {
      //     relationship:[array of relationshipObj{showID, imgURL, title}]
      //   }
  });

  app.post("/api_search/:userID/:showID/:title/:imgURL", function(req, res) {
  // create show !=exists, create bridge entry/link
  //   {
  //     status
  //   } HndlBrs:index->refreshPage/get
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

  });
}