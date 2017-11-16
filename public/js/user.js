// // Function to check whether user exists or not
// var isUserUnique = function(username) {
//     return db.user.count({ where: { username: username } })
//       .then(count => {
//         if (count != 0) {
//           return false;
//         }
//         return true;
//     });
// };

// module.exports = isUserUnique;


// $("#add-user").on("click", function(e){
// 	e.preventDefault();
// 	var username = $("#username").val().trim();
// 	isUserUnique(username).then(isUnique => {

// 	    if (isUnique) {
// 	    	$.post("/api/user")
// 	    	  .done(function(response){
// 			 	console.log("User added to DB");
// 		    })
// 	      }
// 	      else {
// 	        console.log("User already exists. Cannot add user.");
// 	      }
// 	});
// });

