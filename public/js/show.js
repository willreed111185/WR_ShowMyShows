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

// Event handler for user search
$("#search-btn").click(function(){
  $("#search-form").submit();
});

$("#search-form").submit(function(e){
  e.preventDefault();
  var showInput = $("#show-input").val().trim();
  console.log(showInput);

  // Performing GET requests to the the movie database API
  $.ajax({
    url: API_ROOT_URL+"search/tv?api_key="+API_KEY+"&language=en-US&query="+showInput+"&page=1",
    method: "GET"
  }).done(function(response) {

    // Alert user that could not find the show
    if (response.results.length == 0){
      $("#show-input").attr("style", "border-color: red; border-width: 1.3px");
      $("#show-input").val("");
      $("#show-input").attr("placeholder", "Show not found");
    }

    else{
      omdbId = response.results[0].id;
      queryShow(omdbId);
      $('#showModal').modal('show');
    }
  });
})

// Show modal on user search or when selecting a show from list
$("#showModal").on("show.bs.modal", function(e) {

  var button = $(e.relatedTarget); // Button that triggered the modal
  var type = button.attr('data-type');
  var omdbId;
  $("#show-input").val("");
  $("#show-input").removeAttr("style");
  $("#show-input").attr("placeholder", "Search");

  // User clicked on show from their list.
  if (type == "item"){
    omdbId = button.data('id');
    queryShow(omdbId);
  }
})

// Create user_show item in db
$(".add-btn").on("click", function(e){

  // Extract info from data-* attributes of button
  var button = $(e.currentTarget); // Button that triggered the modal
  console.log(button);
   var userID = button.data('userid');
  var OMDB_ID = button.data('showid');
  var title = $("#ShowTitle").text();
  var imgURL = $("#modImage").attr("src");
  var imgSplit = imgURL.split("w185/")[1];
   var relation = button.data('rel');

  console.log("title: " + title);
  console.log("UserId: " + userID);
  console.log("Show: " + OMDB_ID);
  console.log("url: " +imgURL);
  console.log("image split: "+ imgSplit);
  console.log("relation " + relation);

  $.ajax({
    url: "/api_ShowLookup/"+userID+"/"+OMDB_ID+"/"+title+"/"+imgSplit,
    method: "POST"
  }).done(function(response){
      console.log("show lookup complete");
      console.log("response: " + response);
      $.ajax({
        url: "/api_relation/"+userID+"/"+OMDB_ID+"/"+relation,
        method: "POST"
      }).done(function(bridgeResponse){
          console.log("user_show bridge created");
          console.log("response: " + bridgeResponse);
          location.reload();
      })
  })
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
    $("#modImage").attr("src", imgBaseUrl+response.poster_path);
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

