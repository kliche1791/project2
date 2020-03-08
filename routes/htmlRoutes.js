var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile("index.html", { root: process.cwd() + "/public" });
  });

  // Load survey page
  app.get("/survey", function(req, res) {
    res.sendFile("quiz.html", { root: process.cwd() + "/public" });
  });

  // Load diagram page
  app.get("/diagram", function(req, res) {
    // db.Profiles.findOne({ where: { id: req.params.id } });
    res.sendFile("diagram.html", { root: process.cwd() + "/public" });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile("404.html", { root: process.cwd() + "/public" });
  });
};
