// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      var dbObject = {
        burgers: dbBurger
      }
      res.render("index", dbObject);
    });
  });
};
