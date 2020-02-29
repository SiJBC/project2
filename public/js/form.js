// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$( document ).ready(function() {
  $(".websiteLink").hide();
  
  $("button").click(function(){
  
  });

  $("#add-btn").on("click", function (event) {
    event.preventDefault();
  
    var encodedheader;
    var encodedb1img;
    var encodedb2img;
    var encodedb3img;
    // var header_image = ;// the post object
    // var block1img = ;// the post object
    // var block2img = ;// the post object
    // var block3img = ;// the post object
    // The lines below convert the uploaded images into strings to be saved in MySQL
    // encodedheader = new Buffer.from(header_image, 'binary').toString('base64');
    // encodedb1img = new Buffer.from(block1img, 'binary').toString('base64');
    // encodedb2img = new Buffer.from(block2img, 'binary').toString('base64');
    // encodedb3img = new Buffer.from(block3img, 'binary').toString('base64');
  
  
    // make a new website obj
    var newWebsite = {
      // title
      title: $("#title").val().trim(),
      // tagline
      tagline: $("#tagline").val().trim(),
      // header image
      header_image: encodedheader,
      // Block 1 Image
      block_1_image: encodedb1img,
      // block 1 header
      block_1_head: $("#block1head").val().trim(),
      // block 1 text
      block_1_text: $("#block1text").val().trim(),
      // block 2 image
      block_2_image: encodedb2img,
      // block 2 header
      block_2_head: $("#block2head").val().trim(),
      // block 2 text
      block_2_text: $("#block2text").val().trim(),
      // block 3 image
      block_3_image: encodedb3img,
      // block 3 header
      block_3_head: $("#block3head").val().trim(),
      // block 3 text
      block_3_text: $("#block3text").val().trim(),
      // E-mail
      e_mail: $("#eMail").val().trim(),
      // Location
      place_location: $("#placeLocation").val().trim()
    };
    console.log(newWebsite)
  
    // send an AJAX POST-request with jQuery
    $.post("/api/website", newWebsite)
      // console.log(newWebsite)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("generating website...");

        // Use jQuery.update link
        $(".websiteLink").show()
        $(".websiteLink").attr("href", "/dev/" + data.id)
      });
  
    // empty each input box by replacing the value with an empty string
  });

})


// It pings the server. The server then pings the database and displays the new website.


// make a get request to the website




