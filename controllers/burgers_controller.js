var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../config/orm");

// Create all our routes and set up logic within those routes where required.
router.get("/api/burg", function(req, res) {
  burger.all("burgers", function(data) {
    console.log(data);
    res.json(data);
  });
});

router.post("/api/burg", function(req, res) {
  burger.create(req.body.burger_name, function(response){
    console.log(response);
    res.status(201).json(response);
  });
});

router.put("/api/burg/:id", function(req, res) {
  burger.update(req.params.id, function(response) {
    console.log(response);
    res.status(200).json(response);
  
  });
  });

  router.get("/", function(req, res){
    burger.all ("burgers", function(data){
      var burgersObject ={
        burgers: data
      }
    
    res.render("index", burgersObject)
    })  
  })
// Export routes for server.js to use.
module.exports = router;
