var db = require("../models");

module.exports = function(app) {

  // Add a new user to the DB if they do not exist
  app.post("/api/user", function(req, res) {

    db.user.findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        username: req.body.username,
        password: req.body.password
      }
    }).spread((user, created) => {
        plain:true

        if(created){
          console.log("USER ADDED TO DATABASE");
          res.redirect("/");     
        }
        else {
          console.log("USER ALREADY IN DATABASE");
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

    var currentID = req.params.userid;

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
            res.render("index", user);
          })
        })
      })

  });

  // Display all shows in the relation for user
  app.get("/rel/:userid/:relation", function(req, res) {

    var currentID = req.params.userid;
    var currentRelation = req.params.relation;

    db.user_show.findAll({
      where:{
        userId:currentID,
        relation:currentRelation
      },
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
        res.render("relationship", user);
      })
    })

  });


  // Add new show if it does not already exists
  app.post("/api_ShowLookup/:userID/:OMDB_ID/:title/:imgURL", function(req, res) {
    
    var imgBaseUrl = "https://image.tmdb.org/t/p/w185/";

    db.show.findOrCreate({
      where: {
        OMDB_id: req.params.OMDB_ID
      },
      defaults: {
          title: req.params.title,
          OMDB_id: req.params.OMDB_ID,
          imgURL: imgBaseUrl+req.params.imgURL,
          contentURL: "blank"
      }
    }).spread((show, created) => {
        plain:true

        if(created){
          console.log("SHOW ADDED TO DATABASE");     
        }
        else {
          console.log("SHOW ALREADY IN DATABASE");
        }

        res.send(show);
    })

  });

  // Adds a user_show row to database if it does not already exists
  app.post("/api_relation/:userID/:showID/:relation", function(req, res) {

    db.user_show.findOrCreate({
      where: {
        userID : req.params.userID,
        relation: req.params.relation,
        showID: req.params.showID      
      },
      defaults: {
        relation: req.params.relation        
      }
    })
    .spread((showUser, created) => {
        plain:true

        if(created){
          showUser.userId = req.params.userID,
          showUser.showId = req.params.showID,
          showUser.save({fields: ['userId', 'showId']}).then(() => {
            console.log("NEW USER_SHOW ADDED");
            res.send(true);
          })
        }
      else {
        console.log("EXISTING USER_SHOW");
        res.send(false);
      }
    })

  });

}