const mongoose = require("mongoose");

const rhuSchema = mongoose.Schema({
  id: Number,
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
      serial: String,
      name: String,
      status: String,
    },
  ],
  eventLog: [
    {
      time: String,
      name: String,
      state: String,
      comment: String,
    },
  ],
  startOfDoc: Date || null,
  endOfDoc: Date || null,
});

const RHU = (module.exports = mongoose.model("rhu", rhuSchema));

module.exports.get = function (callback, limit) {
  RHU.find(callback).limit(limit);
};
