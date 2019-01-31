var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  userName: {
    type: String,
    unique: true
    },
  password: {
    type: String,
    unique: true
    },
  });

var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;