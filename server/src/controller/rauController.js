const RAU = require("../model/rauRefurbishments");

/**
 * Get database
 */

exports.index = function (req, res) {
  RAU.get((err, rau) => {
    console.log("RAU: ", rau);
    if (err || rau === null)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: "Got RAU successfully",
      data: rau,
    });
  });
};

exports.getUser = async function (serial) {
  var items;
  await RAU.findOne({ serial }, (err, item) => {
    items = item;
  });
  return items;
};

/**
 * Get item from db
 */

exports.view = function (req, res) {
  RAU.find({ serial: req.query.item }, (err, rau) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: `RAU ${rau.serial} details`,
      data: rau,
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
    user,
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
  const rauPrinter = new RAU();

  rauPrinter.serial = serial ? serial : "";
  rauPrinter.type = type ? type : "";
  rauPrinter.user = user ? user : "";
  rauPrinter.customer = customer ? customer : "";
  rauPrinter.trader = trader ? trader : "";
  rauPrinter.hdd = hdd ? hdd : "";
  rauPrinter.features = features
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
  rauPrinter.inPrints = inPrints
    ? inPrints
    : {
        bw: 0,
        colour: 0,
      };
  rauPrinter.outPrints = outPrints
    ? outPrints
    : {
        bw: 0,
        colour: 0,
      };
  rauPrinter.state = state ? state : "";
  rauPrinter.sideState = sideState ? sideState : "";
  rauPrinter.orderedParts = orderedParts || [];
  rauPrinter.builtParts = builtParts || [];
  rauPrinter.eventLog = eventLog || [];
  rauPrinter.startOfDoc = startOfDoc || Date.now();
  rauPrinter.endOfDoc = endOfDoc || null;

  rauPrinter.save((err) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    res.json({
      success: true,
      message: "New RAU printer added!",
      data: rauPrinter,
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
    user,
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
      message: "No serial number specified!",
    });

  RAU.findOne({ serial: req.query.item }, (err, rau) => {
    if (err)
      res.json({
        success: false,
        message: err,
      });

    rau.serial = serial ? serial : rau.serial;
    rau.type = type ? type : rau.type;
    rau.user = user ? user : rau.user;
    rau.customer = customer ? customer : rau.customer;
    rau.trader = trader ? trader : rau.trader;
    rau.hdd = hdd ? hdd : rau.hdd;
    rau.features = features ? features : rau.features;
    rau.inPrints = inPrints ? inPrints : rau.inPrints;
    rau.outPrints = outPrints ? outPrints : rau.outPrints;
    rau.state = state ? state : rau.state;
    rau.sideState = sideState ? sideState : rau.sideState;
    rau.orderedParts = orderedParts ? orderedParts : rau.orderedParts;
    rau.builtParts = builtParts ? builtParts : rau.builtParts;
    rau.eventLog = eventLog ? eventLog : rau.eventLog;
    rau.startOfDoc = startOfDoc ? startOfDoc : Date.now();
    rau.endOfDoc = endOfDoc ? endOfDoc : null;

    rau.save((err) => {
      if (err)
        res.json({
          success: false,
          message: err,
        });

      res.json({
        success: true,
        message: "RAU updated sucessfully",
        data: rau,
      });
    });
  });
};

/**
 * Delete item by id
 */

exports.delete = function (req, res) {
  RAU.deleteOne(
    {
      _id: req.query.item,
    },
    (err, rau) => {
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
