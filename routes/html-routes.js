// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
    // res.render("login")
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
    // res.render("signup")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("members")
  });
  app.get("/friends", isAuthenticated, function(req, res) {
    res.render("friends")
  });
  app.get("/ideas", isAuthenticated, function(req, res) {
    res.render("ideas")
  });
  app.get("/activities", isAuthenticated, function(req, res) {
    res.render("activities")
  });
  app.get("/calendar", isAuthenticated, function(req, res) {
    res.render("calendar")
  });
  app.get("/map", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("map")
  });


  app.get("/friends", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("friends")
  });
  app.get("/ideas", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("ideas")
  });
  app.get("/map", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("map")
  });
 /// get route for yelp activities
 app.get("/activities", isAuthenticated, function(req, res) {
  res.render('activities');
});
app.get("/calendar", function(req, res) {
  if (req.user) {
  res.render("calendar")
}});



};

