const Users = require("../model/Users");
const secure = require("../validation/encrypt");

/**
 * Get database
 */

exports.index = function (req, res) {
  Users.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
        data: null,
      });
    }

    res.json({
      status: "success",
      message: "Got Database successfully!",
      data: users,
    });
  });
};

/**
 * Get item from db
 */

exports.view = function (req, res) {
  Users.find({ name: req.query.item }, (err, user) => {
    if (err) {
      res.send(err);
    } else if (user.length === 0) {
      res.json({
        status: "error",
        message: "User not found!",
        data: null,
      });
    } else {
      console.log(user);
      res.json({
        status: "success",
        message: "User details",
        data: user,
      });
    }
  });
};

/**
 * Add item to db
 */

exports.add = function (req, res) {
  const { name, role, email, phone, pw, performance } = req.body;

  if (!name || !role || !email || !phone)
    res.json({
      status: "error",
      message: "Params not specified!",
      data: null,
    });

  const users = new Users();

  users.name = name;
  users.role = role;
  users.pw = secure.encrypt(pw);
  users.performance = performance || [];

  //Save and check error
  users.save(function (err) {
    if (err) res.json(err);

    res.json({
      status: "success",
      message: "New User Added!",
      data: users,
    });
  });
};

/**
 * Update item in db
 */

exports.update = function (req, res) {
  const { name, role, email, phone, performance } = req.body;

  console.log("Now in update func");
  console.log(`Updatable user is ${name} role: ${role} taken from body!`);

  if (!name || !role || !email || !phone)
    res.json({
      status: "error",
      message: "Params not specified!",
      data: null,
    });

  Users.findOne({ name: req.query.item }, function (err, users) {
    console.log(users);
    if (err) {
      res.send(err);
    } else if (users === null) {
      res.json({
        status: "error",
        message: "User not found!",
        data: null,
      });
    } else {
      users.name = name;
      users.role = role;
      users.email = email;
      users.phone = phone;
      users.performance = performance;

      users.save(function (err) {
        if (err) res.send(err);
        res.json({
          status: "success",
          message: "Users Updated Sucessfully",
          data: users,
        });
      });
    }
  });
};

/**
 * Delete item by id
 */

exports.delete = function (req, res) {
  Users.deleteOne(
    {
      _id: req.query.item,
    },
    function (err, contact) {
      if (err) {
        res.send(err);
      } else if (contact.deletedCount === 0) {
        res.json({
          status: "error",
          message: "User not found",
          data: null,
        });
      } else {
        res.json({
          status: "success",
          message: "User Deleted",
          data: null,
        });
      }
    }
  );
};
