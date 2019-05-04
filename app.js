$(document).ready(function() {

  var topics = ["wolf", "killer whale", "star wars", "transformers", "g.i. joe","game of thrones", "sopranos", "dancing", "running", "coffee", "michael jordan"];

  // Create buttons for each item in topics array.
  for (var i = 0; i < topics.length; i++) {
    var topicButton = $("<button type=\"button\" class=\"btn btn-info\"></button>");
    topicButton.text(topics[i]);
    $("#buttonsDiv").append(topicButton);
  };

  /* When the user clicks on a button, the page should grab 10 static,
  non-animated gif images from the GIPHY API and place them on the page. */
  $(".btn").on("click", function () {

    // Clear out gifs from previously clicked button.
    $("#gifsDiv").empty();

    // q parameter for queryURL.
    var searchQ = $(this).text();

    // API key for queryURL.
    var apiKey = "yNw4OuU5LCxWWiRST7F7qPW1qolhQxDc";

    // Query URL for API call, need to enter value for parameter q.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQ + "&api_key=" + apiKey + "&limit=10";

    // API call.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Store the ten gifs requested from the API.
      var results = response.data;

      // Loop over each result item.
      for (var i = 0; i < results.length; i++) {

        // Create div for gif.
        var gifDiv = $("<div class=\"aGif\">");

        // Store result item rating.
        var rating = results[i].rating;

        // Create p tag for rating.
        var p = $("<p>").text("Rating: " + rating);

        // Store fixed_height_url property.
        var imageUrl = results[i].images.fixed_height.url;

        // Create and store img tag.
        var topicImage = $("<img class=\"img-fluid rounded\">");

        // Set topicImage src attribute to imageUrl.
        topicImage.attr("src", imageUrl);
        topicImage.attr("alt", searchQ + " image");

        // Add gif and rating to gifDiv.
        gifDiv.append(topicImage);
        gifDiv.append(p);

        // Append gifDiv to gifsDiv in HTML.
        $("#gifsDiv").append(gifDiv);
      }
    });
  });

  /* When the user clicks one of the still GIPHY images, the gif should animate.
  If the user clicks the gif again, it should stop playing. */

  /* Under every gif, display its rating (PG, G, so on). Only once you get images
  displaying with button presses should you move on to the next step. */

  /* Add a form to your page takes the value from a user input box and adds it into
   your topics array. Then make a function call that takes each topic in the array
   remakes the buttons on the page. */
});

