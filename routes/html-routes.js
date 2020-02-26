// dependencies

var path = require("path")
var db = require("../models")

module.exports = function (app) {

    // main page load
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });



    app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/userForm.html"));
    });


// load website from user specs
    // app.get("/dev", function (req, res) {
    // res.render(path.join(__dirname, "../views/index.handlebars") {
        app.get("/dev", function(req, res) {
         
            db.Website.findAll({
            }).then(function(data) {
                var hbsObject = {
                    website: data
                  };
                  console.log(hbsObject.website);
                  res.render("index", hbsObject.website);
            })
        });
    }
