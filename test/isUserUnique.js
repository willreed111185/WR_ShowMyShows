var db = require("../models/index");

// Function to check whether user exists or not
isUserUnique = function (username) {
    return db.user.count({ where: { username: username } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
}

module.exports = isUserUnique;