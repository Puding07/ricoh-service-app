const mongoose = require("mongoose");

const rauSchema = mongoose.Schema({
  serial: String,
  type: String,
  connected: {
    finsiher: {
      serial: String,
      type: String,
    },
    paperBank: {
      serial: String,
      type: String,
    },
    fiery: {
      serial: String,
      type: String,
    },
  },
  user: String,
  customer: String,
  trader: String,
  hdd: String,
  features: {
    documentFeeder: Boolean,
    duplex: Boolean,
    paperBank: Boolean,
    bypass: Boolean,
    sortingTray: Boolean,
    largeCapacityTray: Boolean,
    puncher: Boolean,
    printerScanner: Boolean,
    fax: Boolean,
    wheeledTable: Boolean,
    ps: Boolean,
    faxTray: Boolean,
    java: Boolean,
    fiery: Boolean,
  },
  inPrints: {
    bw: Number,
    colour: Number,
  },
  outPrints: {
    bw: Number,
    colour: Number,
  },
  state: String,
  sideState: String,
  parts: [
    {
      product_number: String,
      name: String,
      status: String,
    },
  ],
  eventLog: [
    {
      time: Date,
      user: String,
      state: String,
      comment: String,
    },
  ],
  startOfDoc: Date || null,
  endOfDoc: Date || null,
});

const RAU = (module.exports = mongoose.model("raus", rauSchema));

module.exports.get = function (callback, limit) {
  RAU.find(callback).limit(limit);
};
