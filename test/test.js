var Nightmare = require("nightmare"); 
var expect = require("chai").expect;

new Nightmare({ show: true })
  // Visit login page
  .goto("http://localhost:8080")
  // Create user
  // Enter username.
  .type("#username", "dummy")
  // Enter password.
  .type("#password", "dpassword")
  // Take a screenshot of the login form.
  .screenshot("createuser.png")
  // Click add user button.
  .click("#add-user")
  .wait(2000)
  // Take a screenshot of login form showing user created.
  .screenshot("login.png")
  // Click first user.
  .click("a[href='/user/1']")
  // Scroll down a couple hundred pixels.
  .scrollTo(200, 0)
  // Take a screenshot and save it to the current directory.
  .screenshot("shows.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("UI Flow Test Complete!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
