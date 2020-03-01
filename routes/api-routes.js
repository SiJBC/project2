var db = require("../models");
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var cloudinary = require('cloudinary').v2;


module.exports = function (app) {


    app.get("/api/website", function (req, res) {
        db.Website.findAll(

        ).then(function (dbWebsite) {
            res.json(dbWebsite)
        })
    })

    app.get("/api/website/:id", function (req, res) {
        db.Website.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbWebsite) {
            res.json(dbWebsite)
        })

    })

    // retrieve specific website user has created


    app.post("/api/website", function (req, res) {
        // enter in the user information to the database
        db.Website.create(req.body).then(function (dbWebsite) {
            res.json(dbWebsite)
            console.log(dbWebsite)

        })
    })

}
