var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  subscription: {
    type: String,
    unique: true
    },
  price: {
    type: String
    },
  rate: {
    type: String,
    unique: true
    },

  isSaved: {
    type: Boolean,
    default: false
  },
});

var Items = mongoose.model("Items", itemsSchema);

module.exports = items;
