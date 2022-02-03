const Stock = require("../model/rhuStock");

/**
 * Get DB
 */

exports.index = (req, res) => {
  Stock.get((err, stock) => {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Got Database successfully!",
      data: stock,
    });
  });
};

/**
 * Get item from db
 */

exports.view = (req, res) => {
  Stock.find({ name: req.query.item }, (err, stock) => {
    if (err) res.send(err);

    res.json({
      message: "Stock details",
      data: stock,
    });
  });
};

/**
 * Add item to db
 */

exports.add = (req, res) => {
  const { name, product_number, piece } = req.body;

  if (!name && !product_number && !piece)
    res.json({
      status: "error",
      message: "Parameters missing!",
    });

  const stock = new Stock();

  stock.name = name;
  stock.product_number = product_number;
  stock.piece = piece;

  stock.save((err) => {
    if (err) res.json(err);

    res.json({
      message: "New Stock item added",
      data: stock,
    });
  });
};

/**
 * Update item in db
 */

exports.update = (req, res) => {
  Stock.findOne({ product_number: req.query.item }, (err, stock) => {
    if (err) res.send(err);

    stock.name = req.body.name;
    stock.product_number = req.body.product_number;
    stock.piece = req.body.piece;

    stock.save((err) => {
      if (err) res.send(err);

      res.json({
        message: "Stock Updated Successfully",
        data: stock,
      });
    });
  });
};

/**
 * Delete item by id
 */

exports.delete = (req, res) => {
  Stock.deleteOne(
    {
      _id: req.query.item,
    },
    (err, stock) => {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Stock item deleted",
      });
    }
  );
};
