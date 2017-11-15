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

//get the newest five of each category and GET to HdnlBars for User Homepage
  app.get("/user/:userid", function(req, res) {
    console.log("GET /user/userid");

    var currentID = req.params.userid;
    console.log("User Id Selected: " + currentID);

    db.user_show.findAll({
      where:{
        userId:currentID,
        relation:"favorite"
      },
      limit:5,
      order:[
        ['createdAt','DESC']
      ],
      include:{
        model:db.show
      }
    }).then(function(dbUserFav){
      var favoritesArray = dbUserFav;

        db.user_show.findAll({
          where:{
            userId:currentID,
            relation:"watchList"
            },
            limit:5,
            order:[
              ['createdAt','DESC']
            ],
            include:{
              model:db.show
            }
        }).then(function(dbUserWatch){
          var watchlistArray = dbUserWatch;

          db.user.findById(currentID)
          .then(function(dbUser){
            var user = {
              user_id: currentID,
              username: dbUser.username,
              favorite: favoritesArray,
              watchList: watchlistArray
            }
            //res.json(user);
            res.render("index", user);
          })
        })
      })
  });

  app.get("/rel/:userid/:relation", function(req, res) {
    var currentID = req.params.userid;
    var currentRelation = req.params.relation;
    console.log("RELATION, User Id Selected: " +currentRelation+" "+ currentID);

    db.user_show.findAll({
      where:{
        userId:currentID,
        relation:currentRelation
      },
      //limit:5,
      order:[
        ['createdAt','DESC']
      ],
      include:{
        model:db.show
      }
    }).then(function(dbOneRelation){
      var relationArray = dbOneRelation;
      db.user.findById(currentID)
      .then(function(dbUser){
        var user = {
          user_id: currentID,
          username: dbUser.username,
          relation: currentRelation,
          relationArray: relationArray
        }
        res.json(user);
        //res.render("index", user);
      })
    })
  });

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

//POST api info to DB to add new show if it doesn't exist
  app.post("/api_ShowLookup/:userID/:OMDB_ID/:title/:imgURL", function(req, res) {

    db.show.findOne({
      where:{
        OMDB_id : req.params.OMDB_ID
      }
    }).then(function(dbOMDBLookUp){
        console.log(dbOMDBLookUp);
      //+++++++++++++++++++
      //IF IT DOESNT EXIST
      //+++++++++++++++++++
      //if(dbOMDBLookUp.length==0){
        db.show.create({
          title:req.params.title,
          OMDB_id:req.params.OMDB_ID,
          imgURL:imgBaseUrl+req.params.imgURL,
          contentURL:"blank"
        }).then(function(showCreate){
          console.log(showCreate);
          res.redirect("/user/"+req.params.userID);
        })
     // }
    })
  });

  // app.post("/api_relation/:userID/:OMDB_ID/:relation", function(req, res) {
  //   db.show.findOne({
  //     where:{
  //       userID : req.params.userID,
  //       relation: req.params.relation
  //     },
  //     include:{
  //       model:db.show{
  //         where:{
  //           OMDB_id:req.params.OMDB_ID
  //         }
  //       }
  //     }
  //   }).then(function(dbRelationLookUp){
  //       console.log(dbRelationLookUp);
  //     //+++++++++++++++++++
  //     //IF IT DOESNT EXIST
  //     //+++++++++++++++++++
  //       db.user_show.create({
  //         userID:req.params.userID,
  //         showID:dbRelationLookUp.id,
  //         relation:req.params.relation
  //       }).then(function(relationCreate){
  //         console.log(relationCreate);
  //         res.redirect("/user/"+req.params.userID);
  //       })
  //   });
  // }

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
}