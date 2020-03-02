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

    function userChoices() {
        $(".btnList").click(function () {
            event.preventDefault();
            // console.log("add");
            var parentId = $(this).parent().attr("id");
            // if the "title" clicked, add to the right-
            // -and with one box to fill in the title
            if (parentId == "title") {
                console.log("title to add");
                var labelFor = "titleName";
                var textFor = "Title Name";
                createList(labelFor, textFor);
                // ** once clicked the btn disable 

                // if "Tagline" add a space to fill in tag line
            } else if (parentId == "tagline") {
                console.log("tagline to add");
                var labelFor = "tagLineName";
                var textFor = "Tag Line";
                createList(labelFor, textFor);

                // if "descreption" add textarea to the right
            } else if (parentId == "descriptions") {
                console.log("descriptions to add");
                var labelFor = "content";
                var textFor = "Descriptions";
                createList(labelFor, textFor);

                // if "product/service" add title name, content and img div
            } else if (parentId == "proSer") {
                console.log("product and service to add");
                var labelFor = "proSev";
                proSevContact(labelFor);

                // if "contact details" add basic information, like phone, address and email
            } else if (parentId == "contact") {
                console.log("contact to add");
                var labelFor = "contact";
                proSevContact(labelFor);
            };
        });
    }
    userChoices();

    function createList(labelFor, textFor) {
        var userForm = $("#userConfirmTable");
        var createLi = $("<li>").addClass("col m12 userConfirmList");
        var createBox = $("<div>").addClass("input-field col s10");
        var createLabel = $("<label>").attr("for", labelFor);
        var createBtn = $("<button>").addClass("col s2 waves-effect waves-light btn btnDelete");
        var createMinus = $("<i>").addClass("fa fa-minus");

        if (labelFor == "titleName" || labelFor == "tagLineName") {
            var createInput = $("<input>").attr("type", "text");
        } else if (labelFor == "content") {
            var createInput = $("<textarea>").addClass("materialize-textarea");
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
        var userForm = $("#userConfirmTable");
        var createLi = $("<li>").addClass("col s12 userConfirmList");
        var createDivOne = $("<div>").addClass("input-field");
        var createDivTwo = $("<div>").addClass("input-field");
        var createInput = $("<input>").attr("type", "text");
        var createText = $("<textarea>").addClass("materialize-textarea");
        var createLabelTitle = $("<label>").attr("for", labelFor);
        var createLabelContent = $("<label>").attr("for", labelFor);
        // create two buttons for proSev
        // var createBtnOne = $("<button>").addClass("waves-effect waves-light btn btnDown");
        var createBtnTwo = $("<button>").addClass("waves-effect waves-light btn btnRemove");
        // var iconDown = $("<i>").addClass("fa fa-chevron-down");
        // create plus button for contect
        var createBtnThree = $("<button>").addClass("waves-effect waves-light btn btnPlus");
        var iconPlus = $("<i>").addClass("fa fa-plus");
        // create file upload div
        var createDivThree = $("<div>").addClass("form-group");
        var fileInput = $("<input>").attr({ "type": "file", "class": "form-control-file" });

        if (labelFor == "proSev") {
            createLi.text("Enter information for the product/service");
            createLabelTitle.text("Title");
            createLabelContent.text("Content");
            // createBtnOne.append(iconDown);
            createBtnTwo.text("Remove");
            // createLi.append(createBtnOne);
            createLi.append(createBtnTwo);
            createLi.append(createDivOne);
            createLi.append(createDivTwo);
            createDivOne.append(createInput);
            createDivOne.append(createLabelTitle);
            createDivTwo.append(createText);
            createDivTwo.append(createLabelContent);
            createDivThree.append(fileInput);
            createLi.append(createDivThree);

        } else if (labelFor == "contact") {
            // create id for each button 
            for (var a = 0; a < iconPlus.length; a++){
                iconPlus.attr("id", a);
            };

            createLi.text("Enter contect details");
            createBtnTwo.text("Remove");
            createBtnThree.append(iconPlus);
            createLi.append(createBtnThree);
            createLi.append(createBtnTwo);
            addContect();

            function addContect() {
                $(".btnPlus").click(function () {
                    event.preventDefault();
                    console.log("clicked");

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
                })
            };

            $().click(imgChoice);

            function imgChoice() {
                if (event.target.matches("img")) {
                    var imgChoice = event.target.id;
                    console.log(imgChoice);
                } else {
                    console.log("No theme picked");
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
            $(".userConfirmList").remove();
        });
    }

    // user choose themes
    $(".photoGroup").click(imgChoice);

    function imgChoice() {
        if (event.target.matches("img")) {
            var imgChoice = event.target.id;
            console.log(imgChoice);
        } else {
            console.log("No theme picked");
        }
    };

    // ** function to deal with the hide and show
});