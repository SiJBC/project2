var db = require("../models")

module.exports = function (app) {
    app.get("/api/website", function (req,res )
    {
        db.Website.findAll(

        ).then(function(dbWebsite){
            res.json(dbWebsite)
        })
    })
    
    app.get("/api/website/:id", function (req,res){
        db.Website.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbWebsite){
            res.json(dbWebsite)
        })

    })
    
    // retrieve specific website user has created


    app.post("/api/website", function (req, res){
        console.log(req.body.header, req.body.body, req.body.footer)
        // enter in the user information to the database
        db.Website.create({
            header: req.body.header,
            body: req.body.body,
            footer:req.body.foooter
        }).then(function(dbWebsite){
            res.json(dbWebsite)
         
        })
    })
}

