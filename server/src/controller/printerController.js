const Printer = require("../model/Printers");

/**
 * Get database
 */

exports.index = (req, res) => {
  Printer.get((err, printers) => {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Got Printers successfully",
      data: printers,
    });
  });
};

/**
 * Get item from db
 */

exports.view = (req, res) => {
  Printer.find({ name: req.query.item }, (err, printer) => {
    if (err) res.send(err);

    res.json({
      message: `Details of part with ${printer.product_number} product number`,
      data: printer,
    });
  });
};

/**
 * Add item to db
 */

exports.add = (req, res) => {
  const { name, code, pdf, parts } = req.body;
  if (!name && !code && !pdf)
    res.json({
      status: "error",
      message: "No name or product code specified!",
    });

  const printer = new Printer();

  pritner.name = name;
  pritner.code = code;
  pritner.pdf = pdf;
  printer.parts = parts || [
    {
      product_number: "",
      pieces: 0,
    },
  ];

  printer.save((err) => {
    if (err) res.send(err);

    res.json({
      message: "New printer added!",
      data: printer,
    });
  });
};

/**
 * Update item in db
 */

exports.update = (req, res) => {
  const { name, code, pdf, parts } = req.body;

  if (!name && !code && !pdf)
    res.json({
      status: "error",
      message: "No name or product code specified!",
    });

  Printer.findOne({ name: req.query.item }, (err, printer) => {
    if (err) res.send(err);

    pritner.name = name;
    pritner.code = code;
    pritner.pdf = pdf;
    printer.parts = parts || [
      {
        product_number: "",
        pieces: 0,
      },
    ];

    printer.save((err) => {
      if (err) res.send(err);

      res.json({
        message: "Printer updated!",
        data: printer,
      });
    });
  });
};

/**
 * Delete item by id
 */

exports.delete = (req, res) => {
  Printer.deleteOne(
    {
      _id: req.query.item,
    },
    (err, printer) => {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Printer deleted!",
      });
    }
  );
};
