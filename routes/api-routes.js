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

  app.get("/api/user/:Userid", function(req, res) {
  // Pull up top 5 of each watchList   ascending, limit 5, join
    // {
    //   favorites:[array of favsObj{showID, imgURL, title}]
    //   watchList:[array of watchlistObg{showID, imgURL, title}]
    // }
    // db.user_show.findOne({
    //   limit:1,
    //   where:{
    //     user_id:req.params.Userid
    //   }
    // }).
    users.findAll({
      where: {
          user_id : req.params.Userid
        },
      include:[
          {
            model:user_shows,
            required:true,
            include:[{model:shows,required:true}]
          }
        ]
      }).then(function(dbUsers){
      var userObj = {
        user:dbUsers
      }
      console.log(userObj);
      res.render("index", userObj);
    })
  });

  app.get("/api/show/:Showid", function(req, res) {
      // json to return all shows or a specific one (devOps only)
      //   {
      //     [array of all shows or a specific one]
      //   }
    db.Show.findOne({
      limit:1,
      where:{
        OMDB_id:req.params.Showid
      }
    }).then(function(dbShow){
      var showObj = {
        user:dbShow
      }
      console.log(showObj);
      res.render("index", showObj);
    })

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