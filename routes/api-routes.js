var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      var dbObject = {
        burgers: dbBurger
      }
      res.render("index", dbObject);
    });
  });

  // POST route for saving a new todo
  app.post("/api/create", function (req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: "0"
    }).then(function () {
      res.redirect("/");
    });
  });

  // PUT route for updating burger. We can get the updated burger data from req.body
  app.put("/api/update/:id", function (req, res) {
    db.Burger.update({
      devoured: "1"
    }, {
        where: {
          id: req.params.id
        }
      }).then(function () {
        res.redirect("/");
      });
  });
};
