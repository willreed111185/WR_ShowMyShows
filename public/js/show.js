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
$("#search-form").submit(function(e){
  e.preventDefault();
  $('#showModal').modal('show');
})

// Show modal on user search or selecting show from list
$("#showModal").on("show.bs.modal", function(e) {

  var button = $(e.relatedTarget); // Button that triggered the modal
  var type = button.attr('data-type');
  var omdbId;

  if (type == "item"){
    omdbId = button.data('id');
    console.log(omdbId);
    queryShow(omdbId);
  }

  else{
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
        
        omdbId = response.results[0].id;
        queryShow(omdbId);
      }
    });
  }
})

// Create user_show item in db
$(".add-btn").on("click", function(e){

  // Extract info from data-* attributes of button
 // var button = $(e.relatedTarget); // Button that triggered the modal
  var userId = $(".add-btn").attr('data-userid');
  var show = $(".add-btn").attr('data-showid');
  var title = $("#ShowTitle").text();
  var imgUrl = $("#modImage").attr("src");
  var relation = $(".add-btn").attr('data-rel');

  console.log("title: " + title);
  console.log("UserId: " + userId);
  console.log("Show: " + show);
  console.log("url: " +imgUrl);
  console.log("relation " + relation);
});

// Get individual show details to update modal
function queryShow(showID){
  console.log("queryShow " +showID);
  // Performing GET requests to the the movie database API
  $.ajax({
    url: API_ROOT_URL + "tv/" + showID + "?api_key=" + API_KEY + "&language=en-US",
    method: "GET"
  }).done(function(response) {

    //write to modal
    $("#ShowTitle").html(response.name);
    $("#time").html(response.last_air_date);
    $("#plot").html(response.overview);
    $("#modImage").attr("src", "http://image.tmdb.org/t/p/w185"+response.poster_path);
    $(".add-btn").attr("data-showId", showID);
//    $("#watch-btn").attr("data-showId", showID);
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