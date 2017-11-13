const API_KEY = "aa07ce021371088334d6308641c7a59f";
const API_ROOT_URL = "https://api.themoviedb.org/3/";

// stores the base url for images
let imgBaseUrl;
// Configuration request to get base url for images and initialize
$.ajax({
  url: API_ROOT_URL + "configuration?api_key=" + API_KEY,
  method: "GET"
}).done(function(response) {
  console.log("Configuration API");

   // Set variable from API values
  let baseUrl = response.images.base_url;
  let size = response.images.poster_sizes[2];
  imgBaseUrl = baseUrl + size;

});

// $(document).on("click", "#showModal", 'show.bs.modal', function (event) {

//   // var button = $(event.relatedTarget) // Button that triggered the modal
//   // var recipient = button.data('whatever') // Extract info from data-* attributes

//   // // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   // var modal = $(this)
//   // modal.find('.modal-title').text('New message to ' + recipient)
//   // modal.find('.modal-body input').val(recipient)

//   // // old code to query show data
//   // console.log("TV Show ID: " + $(this).attr("dataid"));
//   // // Call function to query API for the specific show
//   // queryShow($(this).attr("dataid"));

// })


// Event handler for user search
$("#showModal").on("show.bs.modal", function(e) {

  var button = $(event.relatedTarget) // Button that triggered the modal
  var type = button.data('type') // Extract info from data-* attributes

  if( type == "search"){
	  var showInput = $("#show-input").val().trim();
	  console.log(showInput);
	  $("#show-input").val("");

	  // Performing GET requests to the the movie database API
	  $.ajax({
	    url: API_ROOT_URL+"search/tv?api_key="+API_KEY+"&language=en-US&query="+showInput+"&page=1",
	    method: "GET"
	  }).done(function(response) {
	    if (response.results.length == 0){
	      // Alert user that could not find the show
	      $("#show-input").attr("style", "border-color: red; border-width: 1.3px");
	      $("#show-input").attr("placeholder", "Show not found");
	    }
	    else{
	      $("#show-input").removeAttr("style");
	      $("#show-input").attr("placeholder", "Search");
	      queryShow(response.results[0].id);
	    }
	  });
	}
  else{
		// search based on data-id for query
  }
})

// Get individual show details to update modal
function queryShow(showID){
  console.log("queryShow");
  // Performing GET requests to the the movie database API
  $.ajax({
    url: API_ROOT_URL + "tv/" + showID + "?api_key=" + API_KEY + "&language=en-US",
    method: "GET"
  }).done(function(response) {

    //write to modal
    $("#ShowTitle").html(response.name);
    $("#time").html(response.last_air_date);
    $("#plot").html(response.overview);
    // if(response.networks.length>0){
    //   $("#network").html(response.networks[0].name);
    // }else{
    //   $("#network").html(" ");
    // }
    $("#modImage").attr("src", "http://image.tmdb.org/t/p/w185"+response.poster_path);
  //  $("#modalBox").css("display","block"); //show modul
    
  }); 
}

// // Event handler when user clicks on an item in the carousel
// $(document).on("click", ".show", function(){
//   console.log("TV Show ID: " + $(this).attr("dataID"));
//   // Call function to query API for the specific show
//   queryShow($(this).attr("dataID"));
// })

// // Event handler when user clicks on an item in the carousel
// $(document).on("click", ".add-favorite", function(){
// 	// POST to database
// })

// // Event handler when user clicks on an item in the carousel
// $(document).on("click", ".add-watchlist", function(){
// 	// POST to database
// })