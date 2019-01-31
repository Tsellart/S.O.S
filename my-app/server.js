var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var axios = require("axios");
var react = require("react")

var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({
  extended: true
}));
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

mongoose.connect("mongodb://localhost/populate", {
  useNewUrlParser: true
});

var db = mongojs(MONGODB_URI);

db.on("error", function (error) {
  console.log("Database Error:", error);
});
app.post("/submit", function (req, res) {
  db.users.create(req.body)
    .then(function (dbUsers) {
      return db.Users.findOneAndUpdate({}, {
        $push: {
          users: dbUsers._id
        }
      }, {
        new: true
      });
    })
    .then(function (dbUsers) {
      res.json(dbUsers);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.post("/submit", function (req, res) {
  db.Items.create(req.body)
    .then(function (dbItems) {
      return db.Items.findOneAndUpdate({}, {
        $push: {
          items: dbItems._id
        }
      }, {
        new: true
      });
    })
    .then(function (dbItems) {
      res.json(dbItems);
    })
    .catch(function (err) {
      res.json(err);
    });
});


app.get("/index", function (req, res) {
  db.Items.find({})
    .then(function (dbItems) {
      res.json(dbItems);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.get("/index", function (req, res) {
  db.Users.find({})
    .then(function (dbUsers) {
      res.json(dbUsers);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.get("/populated", function (req, res) {
  db.Items.find({})
    .populate("items")
    .then(function (dbItems) {
      res.json(dbItems);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});