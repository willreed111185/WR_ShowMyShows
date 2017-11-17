var db = require("../models");
var isItemUnique = function(queryColumn,queryItem,queryTable) {
  if (queryColumn=="username"){
    return queryTable.count({ where: {username : queryItem } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
  }
  if (queryColumn=="OMDB_id"){
    return db.show.count({ where: {OMDB_id : queryItem } })
      .then(count => {
        console.log("COUNT COUNT COUNT: ",count);
        if (count != 0) {
          return false;
        }
       return true;
    });
  }
};

module.exports = function(app) {

  // Add a new user to the DB
  app.post("/api/user", function(req, res) {
    // Check if user already exists
    isItemUnique("username",req.body.username,db.user).then(isUnique => {
      if(isUnique){
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
      }
      else {
        console.log("User already exists");
        res.status(400).send('Username already exists!');
      }
    })
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

  // Display all shows in the relation for user
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
        //res.json(user);
        res.render("relationship", user);
      })
    })
  });


 //POST api info to DB to add new show if it doesn't exist
  app.post("/api_ShowLookup/:userID/:OMDB_ID/:title/:imgURL", function(req, res) {
    var imgBaseUrl = "https://image.tmdb.org/t/p/w185/";
    isItemUnique("OMDB_id",req.params.OMDB_ID,db.show).then(isUnique => {
      if(isUnique){
        console.log("SHOW IS UNIQUE : TRUE");
        db.show.create({
          title:req.params.title,
          OMDB_id:req.params.OMDB_ID,
          imgURL:imgBaseUrl+req.params.imgURL,
          contentURL:"https://content.jwplatform.com/players/V7gKg9PI-UbMgy82L.html"
        }).then(function(showCreate){
          console.log(showCreate);
          res.send(true);
          res.redirect("/user/"+req.params.userID);
        });
      } else {
        console.log("SHOW IS UNIQUE : FALSE");
        res.send(false);
      }
    });
  });

  app.post("/api_relation/:userID/:OMDB_ID/:relation", function(req, res) {
    //search for show_id by OMDBid in shows, then.... 
    console.log("RELATIONSHIP CHECK");
    db.show.findOne({
      where:{
        OMDB_id:req.params.OMDB_ID
      }
    }).then(function(dbShowIDLookUp){
      var currentShowID = dbShowIDLookUp.id;
      console.log("currentShowID: " + currentShowID);
      console.log("userID: " + req.params.userID);
      console.log("relation: " + req.params.relation);
      db.user_show.count({
        where:{
          userID : req.params.userID,
          relation: req.params.relation,
          showID: currentShowID
        } 
      }).then(function(count){
        console.log("RELATIONSHIP COUNT: " + count);
          if (count == 0){
            console.log("RELATION IS UNIQUE : TRUE")
            db.user_show.create({
              userID:req.params.userID,
              showID:dbShowIDLookUp.id,
              relation:req.params.relation
            }).then(function(relationCreate){
              console.log("CREATED RELATION");
              relationCreate.userId = req.params.userID;
              relationCreate.showId = currentShowID;
              relationCreate.save({fields: ['userId','showId']}).then(() => {
                  res.send(true);
                })
              //res.send(true);
            });
          }else{
            console.log("RELATION IS UNIQUE : FALSE");
            res.send(false);
          }
        });
    });
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
  // app.post("/api_relation/:userID/:OMDB_ID/:relation", function(req, res) {
  //   db.show.findOne({
  //     where:{
  //       userID : req.params.userID,
  //       relation: req.params.relation
  //     },
  //     include:{
  //       model:db.show{
  //         where:{
  //           OMDB_id: req.params.OMDB_ID
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