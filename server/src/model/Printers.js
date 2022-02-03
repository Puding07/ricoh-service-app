const mongoose = require("mongoose");

const printerSchema = mongoose.Schema({
  printers: [
    {
      name: String,
      code: String,
      pdf: {
        parts_cat: {
          printer: {},
          peripheral: {},
        },
        service_man: {
          printer: {},
          peripheral: {},
        },
        bulletins: {
          printer: {},
          peripheral: {},
        },
      },
      parts: [
        {
          product_number: String,
          name: String,
        },
      ],
    },
  ],
});

const Printers = (module.exports = mongoose.model("printers", printerSchema));

module.exports.get = function (callback, limit) {
  Printers.find(callback).limit(limit);
};
