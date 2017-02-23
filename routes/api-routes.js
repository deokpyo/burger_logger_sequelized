// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {
  // GET route for getting all of the todos
  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbBurger) {
      var dbObject = {
        burgers: dbBurger
      }
      res.render("index", dbObject);
    });
  });

  // POST route for saving a new todo
  app.post("/create", function (req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: "0"
    }).then(function (dbBurger) {
      var dbObject = {
        burgers: dbBurger
      }
      res.render("index", dbObject);
    });
  });

  // PUT route for updating burger. We can get the updated burger data from req.body
  app.put("/update", function (req, res) {
    db.Burger.update({
      devoured: "1"
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurger) {
        var dbObject = {
          burgers: dbBurger
        }
        console.log(dbObject);
        res.render("index", dbObject);
      });
  });
};
