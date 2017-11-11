const API_KEY = "aa07ce021371088334d6308641c7a59f";
const API_ROOT_URL = "https://api.themoviedb.org/3/";

// Variables to use in Modal
let selectedTVShow = {
  firstAired: null,
  numSeasons: null,
  numEpisodes: null,
  synopsis: null,
  poster: null,
  recommendation1: null,
  recommendation2: null
};

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
    if(response.networks.length>0){
      $("#network").html(response.networks[0].name);
    }else{
      $("#network").html(" ");
    }
    $("#modImage").attr("src", "http://image.tmdb.org/t/p/w185"+response.poster_path);
    $("#modalBox").css("display","block"); //show modal
  }); 
}

// Event handler when user clicks on an item in the carousel
$(document).on("click", ".show", function(){
  console.log("TV Show ID: " + $(this).attr("dataID"));
  // Call function to query API for the specific show
  queryShow($(this).attr("dataID"));
})

// Event handler when user clicks on an item in the carousel
$(document).on("click", ".add-favorite", function(){
	// POST to database
})

// Event handler when user clicks on an item in the carousel
$(document).on("click", ".add-watchlist", function(){
	// POST to database
})