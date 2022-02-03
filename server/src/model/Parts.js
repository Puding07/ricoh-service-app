const mongoose = require("mongoose");

const partsSchema = mongoose.Schema({
  parts: [
    {
      name: String,
      image:
        {
          data: Buffer,
          contentType: String,
        } || null,
      product_number: String,
      links: [],
    },
  ],
});

const Parts = (module.exports = mongoose.model("parts", partsSchema));

module.exports.get = function (callback, limit) {
  Parts.find(callback).limit(limit);
};
