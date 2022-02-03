const Parts = require("../model/Parts");

/**
 * Get database
 */

exports.index = (req, res) => {
  Parts.get((err, parts) => {
    if (err)
      res.json({
        status: "error",
        message: err,
      });

    res.json({
      status: "success",
      message: "Got Parts successfully",
      data: parts,
    });
  });
};

/**
 * Get item from db
 */

exports.view = (req, res) => {
  Parts.find({ product_number: req.query.item }, (err, part) => {
    if (err) res.send(err);

    res.json({
      message: `Details of part with ${part.product_number} product number`,
      data: part,
    });
  });
};

/**
 * Add item to db
 */

exports.add = (req, res) => {
  const { name, image, product_number } = req.body;
  if (!name && !product_number)
    res.json({
      status: "error",
      message: "No name or product code specified!",
    });

  const part = new Parts();

  part.name = name;
  part.product_number = product_number;
  part.image = image ? image : null;

  part.save((err) => {
    if (err) res.send(err);

    res.json({
      message: "New part added!",
      data: part,
    });
  });
};

/**
 * Update item in db
 */

exports.update = (req, res) => {
  const { name, image, product_number } = req.body;

  if (!name && !product_number)
    res.json({
      status: "error",
      message: "No name or product code specified!",
    });

  Parts.findOne({ product_number: req.query.item }, (err, part) => {
    if (err) res.send(err);

    part.name = name;
    part.product_number = product_number;
    part.image = image ? image : part.image;
  });

  part.save((err) => {
    if (err) res.send(err);

    res.json({
      message: "Part updated successfully!",
      data: part,
    });
  });
};

/**
 * Delete item by id
 */

exports.delete = (req, res) => {
  Parts.deleteOne(
    {
      _id: req.query.item,
    },
    (err, part) => {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Part deleted!",
      });
    }
  );
};
