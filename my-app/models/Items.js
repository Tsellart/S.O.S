var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
  userName: {
    type: String,
    unique: true
    },
  service: {
    type: String,
    unique: true
    },
  price: {
    type: String,
    unique: true
  },
  rate: {
    type: String,
    unique: true
  },
  category: {
    type: String,
    unique: true
  },
  isSaved: {
    type: Boolean,
    default: false
  },
});

var Items = mongoose.model("Items", ItemsSchema);

module.exports = Items;