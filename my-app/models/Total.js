var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TotalSchema = new Schema({
  title: String,
  body: String
});

var Total = mongoose.model("Total", TotalSchema);

module.exports = Total;
