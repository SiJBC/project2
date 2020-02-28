// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a new website obj
  var newWebsite = {
    // name from name input
    title: $("#title").val().trim(),
    // role from role input
    tagline: $("#tagline").val().trim(),
    // age from age input
    block_1_head: $("#block1head").val().trim(),
  };
  console.log(newWebsite)

  // send an AJAX POST-request with jQuery
  $.post("/api/website", newWebsite)
  // console.log(newWebsite)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("generating website...");
    });

  // empty each input box by replacing the value with an empty string
});

// It pings the server. The server then pings the database and displays the new website.


// make a get request to the website

