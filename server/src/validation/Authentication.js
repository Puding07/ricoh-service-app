const jwt = require("./jwt");
const secure = require("./encrypt");
const Users = require("../model/Users");
const usersController = require("../controller/usersController");

exports.getCookie = async (req, res) => {
  //save token in cookie with 8 hours of expiration date
  res
    .cookie("authcookie", "Hello there", {
      maxAge: 3600000 * 8,
      SameSite: "strict",
    })
    .send("Cookie set!!");
};

/**
 *
 * {"name" : "admin", "role" : "admin", "pw" : "J+4iXNs8oW9R2eeH9lNT2Y+YZQHPjYtwGcreAhx1cWQR9Js2bWR+Zuvo0/3/4vX0KpVKmvH3XLydOmOwA9xuS1gRphu6rbDQthxuS6+sVlRzy5X7TP8CMgyca681P35nJD/jODrAwqCv7ZVUGMbgsJisNk3+zLzYQVM3Io0p61E=", "email" : "", "phone" : ""}
 */

exports.login = async (req, res) => {
  //get username from request's body, eg. from login form
  const username = req.body.username;
  const pw = req.body.password;
  const { body } = req;
  console.log(body);
  console.log(`${username} ${pw}`);

  try {
    //check username and password correctness here,
    await Users.findOne({ name: username }, async (err, user) => {
      if (err || user === null) {
        console.log("error: ");
        console.log(err);
        res.json({
          success: false,
          data: { message: "Authentication error!" },
        });
        return false;
      } else {
        console.log("User: ");
        console.log(user);

        const dbPw = secure.decrypt(user.pw);

        if (dbPw === pw) {
          console.log(`Authentication successfull for ${username}!!`);

          //create jwt token
          const token = await jwt.sign({
            user: username,
            role: user.role,
            _id: user._id,
          });

          console.log(`JWT: ${token}`);

          const sentUser = {
            success: true,
            data: {
              name: user.name,
              role: user.role,
              phone: user.phone,
              email: user.email,
              performance: user.performance,
            },
          };

          //save token in cookie with 8 hours of expiration date
          res
            .cookie("authcookie", token, {
              maxAge: 3600000 * 8,
              SameSite: "strict",
              secure: true,
            })
            .json(sentUser);
        } else {
          console.log(`Authentication failed for ${username}!!`);
          res.json({
            success: false,
            message: "Authentication error!",
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Authentication error!",
    });
  }
};

exports.register = async (req, res) => {
  //get username from request's body, eg. from login form
  const { name, role, email, phone, performance } = req.body;
  req.body.pw = secure.encrypt(req.body.pw);

  console.log(`Registering user: ${name} ${req.body.pw} ${role}`);

  try {
    await Users.findOne({ name: name }, async (err, user) => {
      console.log(`Searching user when registering: ${user}`);
      if (err) {
        res.json({
          status: "error",
          message: error,
          data: null,
        });
      } else if (user == null) {
        usersController.add(req, res);
      } else {
        console.log("User exists!");
        res.send("User exists!");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deActivate = async (req, res) => {
  const { username } = req.body;
};
