

// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
var headerimg = "";
var block1img = "";
var block2img = "";
var block3img = "";
// when user clicks add-btn
$(document).ready(function () {
  // cloudinary.applyUploadWidget(document.getElementById('opener'), 
  // { cloudName: "onepageman", uploadPreset: "opmpreset" }, (error, result) => { });


  $('#upload_widget_header').cloudinary_upload_widget({
    cloudName: "onepunchman", uploadPreset: "opm_preset", apiKey: 795943177824595,
    cropping: true
  }, (error, result) => {
    // console.log("error: " + error);
    // console.log("result: " + JSON.stringify(result));
    headerimg = result.info.files[0].uploadInfo.url;
    console.log("headerimg url: " + headerimg);
  });

  $('#upload_widget_block1').cloudinary_upload_widget({
    cloudName: "onepunchman", uploadPreset: "opm_preset", apiKey: 795943177824595,
    cropping: true
  }, (error, result) => {
    // console.log("error: " + error);
    // console.log("result: " + JSON.stringify(result));
    block1img = result.info.files[0].uploadInfo.url;
    console.log("block1 url: " + headerimg);
  });

  $('#upload_widget_block2').cloudinary_upload_widget({
    cloudName: "onepunchman", uploadPreset: "opm_preset", apiKey: 795943177824595,
    cropping: true
  }, (error, result) => {
    // console.log("error: " + error);
    // console.log("result: " + JSON.stringify(result));
    block2img = result.info.files[0].uploadInfo.url;
    console.log("block2 url: " + headerimg);
  });

  $('#upload_widget_block3').cloudinary_upload_widget({
    cloudName: "onepunchman", uploadPreset: "opm_preset", apiKey: 795943177824595,
    cropping: true
  }, (error, result) => {
    // console.log("error: " + error);
    // console.log("result: " + JSON.stringify(result));
    block3img = result.info.files[0].uploadInfo.url;
    console.log("block3 url: " + headerimg);
  });

  $(".websiteLink").hide();

  $("button").click(function () {

  });



  $("#add-btn").on("click", function (event) {
    event.preventDefault();


    // make a new website obj
    var newWebsite = {
      // title
      title: $("#title").val().trim(),
      // tagline
      tagline: $("#tagline").val().trim(),
      // header image
      header_image: headerimg,
      // header_image: $("#header_image"),
      // Block 1 Image
      block_1_image: block1img,
      // block_1_image: $("#block_1_image"),
      // block 1 header
      block_1_head: $("#block1head").val().trim(),
      // block 1 text
      block_1_text: $("#block1text").val().trim(),
      // block 2 image
      block_2_image: block2img,
      // block_2_image: $("#block_2_image"),
      // block 2 header
      block_2_head: $("#block2head").val().trim(),
      // block 2 text
      block_2_text: $("#block2text").val().trim(),
      // block 3 image
      block_3_image: block3img,
      // block_3_image: $("#block_3_image"),
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





