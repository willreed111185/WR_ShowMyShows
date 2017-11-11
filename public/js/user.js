// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

	// add button click function for users
	$(".user-login").on("click", function(event) {
	    var id = $(this).data("id");

	    // Send the GET request.
	    $.ajax("api/user/:Userid" + id, {
	      type: "GET",
	    }).then(
	      function() {
	        console.log("Logged into user ", id);
	      }
	    );
  	});
}