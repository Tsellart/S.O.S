require("path");
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var react = require("react")

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/components/pages/Form2.js"));
});

app.use(axios.json());
app.use(axios.urlencoded({ extended: true }));

app.use(react.json());
app.use(react.urlencoded({ extended: true }));

require("./routes/index")(app);


mongoose.connect("mongodb://localhost/S.O.S.", { useNewUrlParser: true });

var db = mongojs(MONGODB_URI);

db.on("error", function (error) {
  console.log("Database Error:", error);
});

app.get("/users", function(req, res) {
  // Grab every document in the Users collection
  db.Users.find({})
    .then(function(dbUsers) {
      // If we were able to successfully find Userss, send them back to the client
      res.json(dbUsers);
    })
    .catch(function(err) {
      // If an error occurred, send it to the Users
      res.json(err);
    });
});

// Route for grabbing a specific User by id, populate it with it's username and password
app.get("/users/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Users.findOne({ _id: req.params.id })
    // ..and populate the username and password associated with it
    .populate("userName")
    .populate("password")
    .then(function(dbUsers) {
      // If we were able to successfully find an User with the given id, send it back to the client
      res.json(dbUsers);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating an Users' associated password
app.post("/users/:id", function(req, res) {
  // Create a new username and password and pass the req.body to the entry
  db.password.create(req.body)
    .then(function(dbPassword) {
      // If a password was created successfully, find one User with an `_id` equal to `req.params.id`. Update the User to be associated with the new password
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Users.findOneAndUpdate({ _id: req.params.id }, { note: dbPassword._id }, { new: true });
    })
    .then(function(dbUsers) {
      // If we were able to successfully update an User, send it back to the client
      res.json(dbUsers);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.get("/items", function(req, res) {
  // Grab every document in the items collection
  db.Items.find({})
    .then(function(dbItems) {
      res.json(dbItems);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/items/:id", function(req, res) {
   db.Items.findOne({ _id: req.params.id })
    .populate("subscription")
    .populate("price")
    .populate("rate")
    .then(function(dbItems) {
      res.json(dbItems);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/items/:id", function(req, res) {
  db.Subscription.create(req.body)
    .then(function(dbSubscription) {
      return db.Items.findOneAndUpdate({ _id: req.params.id }, { note: dbSupscription._id }, { new: true });
    })
    .then(function(dbItems) {
      res.json(dbItems);
    })
    .catch(function(err) {
      res.json(err);
    });

    db.Price.create(req.body)
    .then(function(dbPrice) {
      return db.Items.findOneAndUpdate({ _id: req.params.id }, { note: dbPrice._id }, { new: true });
    })
    .then(function(dbItems) {
      res.json(dbItems);
    })
    .catch(function(err) {
      res.json(err);
    });

    db.Rate.create(req.body)
    .then(function(dbRate) {
      return db.Users.findOneAndUpdate({ _id: req.params.id }, { note: dbRate._id }, { new: true });
    })
    .then(function(dbItems) {
      res.json(dbItems);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});