var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Profiles.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get all answers
  app.get("/api/surveys", function(req, res) {
    db.Answers.findAll({}).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Profiles.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new survey
  app.post("/api/surveys", function(req, res) {
    // console.log(db);
    db.Answers.create(req.body).then(function(dbSurvey) {
      // console.log(dbSurvey);
      res.json(dbSurvey);
      // console.log(req.body);
    });
  });

  // // Get user by id
  // app.get("/api/users/:id", function(req, res) {
  //   db.Profiles.findAll({ where: { id: req.params.id } }).then(
  //     function(dbUser) {
  //       res.json(dbUser);
  //     }
  //   );nod
  // });

  // // Get user by userName
  // app.get("/api/users/1/:userName", function(req, res) {
  //   var userNameString = req.params.userName;
  //   db.Profiles.findAll({ where: { userName: userNameString } }).then(
  //     function(dbUser) {
  //       res.json(dbUser);
  //       // console.log(dbUser);
  //     }
  //   );
  // });

  // Get answers by id
  app.get("/api/surveys/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Answers.findAll({ where: { id: req.params.id } }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  // Get connections by id
  app.get("/api/connections/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Connections.findAll({ where: { id: req.params.id } }).then(function(dbConnections) {
      res.json(dbConnections);
    });
  });
};
