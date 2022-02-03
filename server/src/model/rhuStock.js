const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  parts: [
    {
      name: String,
      product_number: Number,
      piece: Number,
    },
  ],
});

const Stock = (module.exports = mongoose.model("rhuStock", stockSchema));

module.exports.get = function (callback, limit) {
  Stock.find(callback).limit(limit);
};
