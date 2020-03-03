var headerimg = "";
var block1img = "";
var block2img = "";
var block3img = "";

$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    var checker = false;

    // login section and user choice section
    function userLogin() {
        $("#login").click(function () {
            event.preventDefault();
            console.log("clicked");
            if (checker == false) {
                $("#userLoginDiv").attr("hidden", false);
                $("#webCreateForm").attr("hidden", false);
                checker = true;
            } else if (checker == true) {
                $("#userLoginDiv").attr("hidden", true);
                $("#webCreateForm").attr("hidden", true);
                checker = false;
            }
        })
    }
    userLogin();

    //=======================================================
    // IMAGE UPLOADS
    //=======================================================

    // Each widget maps to a button on the html page.
    // It returns the URL of the stored image, in the variables defined at the top of this page.

    $('#upload_widget_header').cloudinary_upload_widget({
        cloudName: "onepageman", uploadPreset: "opm_preset", apiKey: 795943177824595,
        cropping: true, resource_type: 'image'
        // , gravity: "custom", croppingShowDimensions: true, maxImageFileSize: 1000000
    }, (error, result) => {
        // console.log("error: " + error);
        // console.log("result: " + JSON.stringify(result));

        if (error) {
            console.log("error");
            throw new error;
        }
        else if (!error && result && result.event === "success") {
            //console.log("status: " + result.info.files[0].status);
            console.log("URL" + JSON.stringify(result.info.url));
            headerimg = result.info.url;

        }


    });

    $('#upload_widget_block1').cloudinary_upload_widget({
        cloudName: "onepageman", uploadPreset: "opm_preset", apiKey: 795943177824595,
        cropping: true
    }, (error, result) => {
        // console.log("error: " + error);
        // console.log("result: " + JSON.stringify(result));
        if (error) {
            console.log("error");
            throw new error;
        }
        else if (!error && result && result.event === "success") {
            //console.log("status: " + result.info.files[0].status);
            console.log("result---------------------- " + JSON.stringify(result.info.url));
            block1img = result.info.url;
        }

    });

    $('#upload_widget_block2').cloudinary_upload_widget({
        cloudName: "onepageman", uploadPreset: "opm_preset", apiKey: 795943177824595,
        cropping: true
    }, (error, result) => {
        // console.log("error: " + error);
        // console.log("result: " + JSON.stringify(result));
        if (error) {
            console.log("error");
            throw new error;
        }
        else if (!error && result && result.event === "success") {
            //console.log("status: " + result.info.files[0].status);
            console.log("result---------------------- " + JSON.stringify(result.info.url));
            block2img = result.info.url;
        }

    });

    $('#upload_widget_block3').cloudinary_upload_widget({
        cloudName: "onepageman", uploadPreset: "opm_preset", apiKey: 795943177824595,
        cropping: true
    }, (error, result) => {
        // console.log("error: " + error);
        // console.log("result: " + JSON.stringify(result));
        if (error) {
            console.log("error");
            throw new error;
        }
        else if (!error && result && result.event === "success") {
            //console.log("status: " + result.info.files[0].status);
            console.log("result---------------------- " + JSON.stringify(result.info.url));
            block3img = result.info.url;

        }


    });

//====================================================================================================
// UserChoices, the menu that allows users to select what parts to add
// each click calls the createList() function 
//====================================================================================================


    function userChoices() {
        $(".btnList").click(function () {
            event.preventDefault();
            // console.log("add");
            var parentId = $(this).parent().attr("id");
            // if the "title" clicked, add to the right-
            // -and with one box to fill in the title
            console.log("btnlist pressed");
            if (parentId == "title") {
                console.log("title to add");
                var labelFor = "titleName";
                var textFor = "Title Name";
                createList(labelFor, textFor);
                $("#titleBtn").attr("disabled", true);

                // if "Tagline" add a space to fill in tag line
            } else if (parentId == "tagline") {
                console.log("tagline to add");
                var labelFor = "tagLineName";
                var textFor = "Tag Line";
                createList(labelFor, textFor);
                $("#taglineBtn").attr("disabled", true);

                // if "descreption" add textarea to the right
            } else if (parentId == "block1Head") {
                console.log("block1head to add");
                var labelFor = "block1Head";
                var textFor = "Sub-heading";
                createList(labelFor, textFor);
                $("#block1HeadBtn").attr("disabled", true);

               
            } else if (parentId == "block1Text") {
                console.log("block1Text to add");
                var labelFor = "block1text";
                var textFor = "Text"
                createList(labelFor, textFor);
                $("#block1TextBtn").attr("disabled", true);

            } else if (parentId == "block2Head") {
                console.log("block2head to add");
                var labelFor = "block2Head";
                var textFor = "Sub-heading";
                createList(labelFor, textFor);
                $("#block2HeadBtn").attr("disabled", true);

                
            } else if (parentId == "block2Text") {
                console.log("block2text to add");
                var labelFor = "block2text";
                var textFor = "Text"
                createList(labelFor, textFor);
                $("#block2TextBtn").attr("disabled", true);

            } else if (parentId == "block3Head") {
                console.log("block3head to add");
                var labelFor = "block3Head";
                var textFor = "Sub-heading";
                createList(labelFor, textFor);
                $("#block3HeadBtn").attr("disabled", true);

                
            } else if (parentId == "block3Text") {
                console.log("block3text to add");
                var labelFor = "block3text";
                var textFor = "Text"
                createList(labelFor, textFor);
                $("#block3TextBtn").attr("disabled", true);

                // if "contact details" add basic information, like phone, address and email
            } else if (parentId == "contact") {
                console.log("contact to add");
                var labelFor = "contact";
                proSevContact(labelFor);
                $("#contactBtn").attr("disabled", true);

            };
        });
    }
    userChoices();

    //=================================================================================================================
    // CreateList - this populates the box on the right, that allows users to enter input
    //=================================================================================================================

    function createList(labelFor, textFor) {
        var userForm = $("#userConfirmTable");
        var createLi = $("<li>").addClass("col m12 userConfirmList");
        var createBox = $("<div>").addClass("input-field col s10");
        var createLabel = $("<label>").attr("for", labelFor);
        var createBtn = $("<button>").addClass("col s2 waves-effect waves-light btn btnDelete");
        var createMinus = $("<i>").addClass("fa fa-minus");

        for (var c = 0; c < createLi.length; c++) {
            var idNum = c;
        }

        if (labelFor == "titleName") {
            var createInput = $("<input>").attr("type", "text").attr("id", "titleInput");
            createBtn.attr("id", "titleBtnDel")
            // createLi.attr("id", "titleInput");
        } else if (labelFor == "tagLineName") {
            var createInput = $("<input>").attr("type", "text").attr("id", "taglineInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "taglineInput");
        } else if (labelFor == "block1Head") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block1HeadInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block1HeadInput");
        } else if (labelFor == "block1text") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block1textInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block1textInput");
        } else if (labelFor == "block2Head") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block2HeadInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block2HeadInput");
        } else if (labelFor == "block2text") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block2textInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block2textInput");
        } else if (labelFor == "block3Head") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block3HeadInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block3HeadInput");
        } else if (labelFor == "block3text") {
            var createInput = $("<input>").attr("type", "text").attr("id", "block3textInput");
            createBtn.attr("id", "tagBtnDel")
            // createLi.attr("id", "block3textInput");
        };

        createBtn.append(createMinus);
        createLabel.text(textFor);
        createBox.append(createInput);
        createBox.append(createLabel);
        createLi.append(createBox);
        createLi.append(createBtn);
        userForm.append(createLi);

        var btnRemove = ".btnDelete";
        removeDiv(btnRemove);
    };

    function proSevContact(labelFor) {
        //create input and textarea
        var userForm = $("#contactDetails");
        var createLi = $("<li>").addClass("col s12 userConfirmList");
        // create two buttons for proSev
        var createBtnOne = $("<button>").addClass("waves-effect waves-light btn btnDown");
        var createBtnTwo = $("<button>").addClass("waves-effect waves-light btn btnRemove");
        var iconPlusOne = $("<i>").addClass("fa fa-plus");
        // create plus button for contect
        var pDiv = $("<p>").addClass("col s10");
        var createBtnThree = $("<button>").addClass("waves-effect waves-light btn btnPlus");
        var iconPlus = $("<i>").addClass("fa fa-plus");

        if (labelFor == "proSev") {
            for (var b = 0; b < createBtnOne.length; b++) {
                var c = b + 1;
                createBtnOne.attr("id", c);
                iconPlusOne.attr("id", c);
            };

            createLi.attr("id", "proSevLi" + b);
            createLi.text("Enter information for the product/service");
            createBtnOne.append(iconPlusOne);
            createBtnTwo.attr("id", "proSevDel");
            createBtnTwo.text("Remove");
            createLi.append(createBtnOne);
            createLi.append(createBtnTwo);

            $("#contactDetails").click(addContact);

            function addContact() {
                event.preventDefault();
                if (event.target.matches("button") || event.target.matches("i")) {
                    var proSevId = event.target.id;
                    // console.log(proSevId);
                    if (proSevId == 1) {
                        var createDivOne = $("<div>").addClass("input-field");
                        var createDivTwo = $("<div>").addClass("input-field");
                        var createInput = $("<input>").attr("type", "text");
                        var createText = $("<textarea>").addClass("materialize-textarea");
                        var createLabelTitle = $("<label>").attr("for", labelFor);
                        var createLabelContent = $("<label>").attr("for", labelFor);
                        // create file upload div
                        var createDivThree = $("<div>").addClass("form-group");
                        var fileInput = $("<input>").attr({ "type": "file", "class": "form-control-file" });

                        createLabelTitle.text("Title");
                        createLabelContent.text("Content");
                        createLi.append(createDivOne);
                        createLi.append(createDivTwo);
                        createDivOne.append(createInput);
                        createDivOne.append(createLabelTitle);
                        createDivTwo.append(createText);
                        createDivTwo.append(createLabelContent);
                        createDivThree.append(fileInput);
                        createLi.append(createDivThree);
                    }
                } else {
                    console.log("Not click button");
                };
            };

        } else if (labelFor == "contact") {
            // create id for each button 
            for (var a = 0; a < createBtnThree.length; a++) {
                createBtnThree.attr("id", a);
                iconPlus.attr("id", a);
            };

            createLi.attr("id", "contact" + a);
            pDiv.text("Enter contect details");
            createLi.append(pDiv);
            createBtnTwo.attr("id", "contactDel")
            createBtnTwo.text("Remove");
            createBtnThree.append(iconPlus);
            createLi.append(createBtnThree);
            createLi.append(createBtnTwo);

            $("#contactDetails").click(addContact);

            function addContact() {
                event.preventDefault();
                if (event.target.matches("button") || event.target.matches("i")) {
                    var contactId = event.target.id;
                    // console.log(contactId);
                    if (contactId == 0) {
                        var dropDownUl = $("<select>").addClass("browser-default col s4");
                        var phoneLi = $("<option>").attr({ "value": "phone" });
                        var emailLi = $("<option>").attr({ "value": "email" });
                        var addressLi = $("<option>").attr({ "value": "address" });
                        var contactDiv = $("<div>").addClass("input-field col s8");
                        var contactInput = $("<input>").attr("type", "text");

                        phoneLi.text("Phone");
                        emailLi.text("Email");
                        addressLi.text("Address");
                        dropDownUl.append(phoneLi);
                        dropDownUl.append(emailLi);
                        dropDownUl.append(addressLi);
                        createLi.append(dropDownUl);
                        contactDiv.append(contactInput);
                        createLi.append(contactDiv);
                    }
                } else {
                    console.log("Not click button");
                }
            };
        };

        userForm.append(createLi);

        var btnRemove = ".btnRemove";
        removeDiv(btnRemove);
    };

    //remove btn function in the confirm list
    function removeDiv(btnRemove) {
        $(btnRemove).click(function () {
            event.preventDefault();
            var btnId = $(this).attr("id");
            console.log(btnId);

            if (btnId == "titleBtnDel") {
                $("#titleBtn").attr("disabled", false);

            } else if (btnId == "tagBtnDel") {
                $("#taglineBtn").attr("disabled", false);

            } else if (btnId == "contentBtnDel") {
                $("#descriptionsBtn").attr("disabled", false);

            } else if (btnId == "proSevDel") {
                $("#proSerBtn").attr("disabled", false);

            } else if (btnId == "contactDel") {
                $("#contactBtn").attr("disabled", false);
            }

            $(this).parent().remove();
        });
    }

    // user choose themes
    function selectPic() {
        $(".images").click(function () {
            event.preventDefault();
            var imgId = $(this).attr("id");
            console.log(imgId);

            var label = $(this).parent().siblings().attr("id");
            console.log(label);
        })
    }
    selectPic();

    // function updateCountdown() {
    //     // 140 is the max message length
    //     var remaining = 140 - jQuery('.message').val().length;
    //     jQuery('.countdown').text(remaining + ' characters remaining.');
    // }


    // ** function to deal with the hide and show

    //======================================================================================================
    // This creates the object and does the AJAX call
    //======================================================================================================

    $(".btnConfirm").on("click", function (event) {
         console.log("btnconfirm clicked");
        console.log("titleInput: " + JSON.stringify($("#titleInput")));
        event.preventDefault();
    
        var e = document.getElementById("titleInput");
        console.log("e: " +e);
        console.log("e.textcontent: " + e.textContent);
        
    
        // make a new website obj
        var newWebsite = {
          // title
          title: $("#titleInput").val().trim(),
          // tagline
          tagline: $("#taglineInput").val().trim(),
          // header image
          header_image: headerimg,
          // header_image: $("#header_image"),
          // Block 1 Image
          block_1_image: block1img,
          // block_1_image: $("#block_1_image"),
          // block 1 header
          block_1_head: $("#block1headInput").val().trim(),
          // block 1 text
          block_1_text: $("#block1textInput").val().trim(),
          // block 2 image
          block_2_image: block2img,
          // block_2_image: $("#block_2_image"),
          // block 2 header
          block_2_head: $("#block2headInput").val().trim(),
          // block 2 text
          block_2_text: $("#block2textInput").val().trim(),
          // block 3 image
          block_3_image: block3img,
          // block_3_image: $("#block_3_image"),
          // block 3 header
          block_3_head: $("#block3headInput").val().trim(),
          // block 3 text
          block_3_text: $("#block3textInput").val().trim(),
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


});