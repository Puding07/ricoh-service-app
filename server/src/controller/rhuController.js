const RHU = require("../model/rhuRefurbishments");

/**
 * Get database
 */

exports.index = function (req, res) {
  RHU.get((err, rhu) => {
    console.log("RHU: ", rhu);
    if (err || rhu === null)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: "Got RHU successfully",
      data: rhu,
    });
  });
};

exports.getUser = async function (serial) {
  var items;
  await RHU.findOne({ serial }, (err, item) => {
    items = item;
  });
  return items;
};

/**
 * Get item from db
 */

exports.view = function (req, res) {
  RHU.find({ serial: req.query.item }, (err, rhu) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: `RHU ${rhu.serial} details`,
      data: rhu,
    });
  });
};

/**
 * Add item to db
 */

exports.add = function (req, res) {
  const {
    serial,
    type,
    customer,
    trader,
    hdd,
    features,
    inPrints,
    outPrints,
    state,
    sideState,
    orderedParts,
    builtParts,
    eventLog,
    startOfDoc,
    endOfDoc,
  } = req.body;
  const rhuPrinter = new RHU();
  rhuPrinter.serial = serial ? serial : "";
  rhuPrinter.type = type ? type : "";
  rhuPrinter.customer = customer ? customer : "";
  rhuPrinter.trader = trader ? trader : "";
  rhuPrinter.hdd = hdd ? hdd : "";
  rhuPrinter.features = features
    ? features
    : {
        documentFeeder: false,
        duplex: false,
        paperBank: false,
        bypass: false,
        sortingTray: false,
        largeCapacityTray: false,
        puncher: false,
        printerScanner: false,
        fax: false,
        wheeledTable: false,
        ps: false,
        faxTray: false,
        java: false,
        fiery: false,
      };
  rhuPrinter.inPrints = inPrints
    ? inPrints
    : {
        bw: 0,
        colour: 0,
      };
  rhuPrinter.outPrints = outPrints
    ? outPrints
    : {
        bw: 0,
        colour: 0,
      };
  rhuPrinter.state = state ? state : "";
  rhuPrinter.sideState = sideState ? sideState : "";
  rhuPrinter.orderedParts = orderedParts || [];
  rhuPrinter.builtParts = builtParts || [];
  rhuPrinter.eventLog = eventLog || [];
  rhuPrinter.startOfDoc = startOfDoc || Date.now();
  rhuPrinter.endOfDoc = endOfDoc || null;

  rhuPrinter.save((err) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: "New RHU printer added!",
      data: rhuPrinter,
    });
  });
};

/**
 * Update item in db
 */

exports.update = function (req, res) {
  const {
    serial,
    type,
    customer,
    trader,
    hdd,
    features,
    inPrints,
    outPrints,
    state,
    sideState,
    orderedParts,
    builtParts,
    eventLog,
    startOfDoc,
    endOfDoc,
  } = req.body;

  if (!serial)
    res.json({
      success: false,
      message: "No serial specified",
    });

  RHU.findOne({ serial: req.query.item }, (err, rhu) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    rhu.serial = serial ? serial : rhu.serial;
    rhu.type = type ? type : rhu.type;
    rhu.customer = customer ? customer : rhu.customer;
    rhu.trader = trader ? trader : rhu.trader;
    rhu.hdd = hdd ? hdd : rhu.hdd;
    rhu.features = features ? features : rhu.features;
    rhu.inPrints = inPrints ? inPrints : rhu.inPrints;
    rhu.outPrints = outPrints ? outPrints : rhu.outPrints;
    rhu.state = state ? state : rhu.state;
    rhu.sideState = sideState ? sideState : rhu.sideState;
    rhu.orderedParts = orderedParts ? orderedParts : rhu.orderedParts;
    rhu.builtParts = builtParts ? builtParts : rhu.builtParts;
    rhu.eventLog = eventLog ? eventLog : rhu.eventLog;
    rhu.startOfDoc = startOfDoc ? startOfDoc : Date.now();
    rhu.endOfDoc = endOfDoc ? endOfDoc : null;

    rhu.save((err) => {
      if (err)
        res.json({
          success: false,
          message: err,
        });

      res.json({
        success: true,
        message: "RHU updated sucessfully",
        data: rhu,
      });
    });
  });
};

/**
 * Delete item by id
 */

exports.delete = function (req, res) {
  RHU.deleteOne(
    {
      _id: req.query.item,
    },
    (err, rhu) => {
      if (err)
        res.json({
          success: false,
          message: err,
        });

      res.json({
        success: true,
        message: "Printer deleted!",
      });
    }
  );
};
