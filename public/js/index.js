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
                $("#titleBtn").attr("disabled", true);

                // if "Tagline" add a space to fill in tag line
            } else if (parentId == "tagline") {
                console.log("tagline to add");
                var labelFor = "tagLineName";
                var textFor = "Tag Line";
                createList(labelFor, textFor);
                $("#taglineBtn").attr("disabled", true);

                // if "descreption" add textarea to the right
            } else if (parentId == "descriptions") {
                console.log("descriptions to add");
                var labelFor = "content";
                var textFor = "Descriptions";
                createList(labelFor, textFor);
                $("#descriptionsBtn").attr("disabled", true);

                // if "product/service" add title name, content and img div
            } else if (parentId == "proSer") {
                console.log("product and service to add");
                var labelFor = "proSev";
                proSevContact(labelFor);
                $("#proSerBtn").attr("disabled", true);

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
            var createInput = $("<input>").attr("type", "text");
            createBtn.attr("id", "titleBtnDel")
            createLi.attr("id", "titleLi" + idNum);
        } else if (labelFor == "tagLineName") {
            var createInput = $("<input>").attr("type", "text");
            createBtn.attr("id", "tagBtnDel")
            createLi.attr("id", "tagLi" + idNum);
        } else if (labelFor == "content") {
            var createInput = $("<textarea>").addClass("materialize-textarea");
            createBtn.attr("id", "contentBtnDel");
            createLi.attr("id", "contentLi" + idNum);
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

            
            // var label = $(this).parent().siblings().attr("id");
            // console.log(label);
        })
    }
    selectPic();

    // function updateCountdown() {
    //     // 140 is the max message length
    //     var remaining = 140 - jQuery('.message').val().length;
    //     jQuery('.countdown').text(remaining + ' characters remaining.');
    // }


    // ** function to deal with the hide and show
});