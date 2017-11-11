	// add button click function for users
	$(document).on("click", ".user-login", function(event) {
	    var id = $(this).data("id");
	    // console.log("clicked user id: " + id);
	    // Send the GET request.
		$.get( "/api/user/:Userid" +id).then(function(){
			// console.log( "Logged in user #" +id );
		});
  	});