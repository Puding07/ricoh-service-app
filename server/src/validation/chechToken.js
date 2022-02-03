const jwt = require("./jwt");
const RAU = require("../controller/rauController");
const RHU = require("../controller/rhuController");

exports.check = async function checkToken(req, res, next) {
  console.log(req.path);

  if (
    req.path === "/api/auth/login" ||
    req.path === "/api/encrypt" ||
    req.path === "/api/decrypt" ||
    req.path === "/api"
  ) {
    next();
  } else {
    //get authcookie from request
    const authcookie = req.cookies.authcookie;
    console.log(authcookie);

    if (authcookie) {
      //verify token which is in cookie value
      try {
        let token = await jwt.verify(authcookie);
        req.user = token.user;
        console.log(req.user);
        next();
      } catch (error) {
        console.log(error);
        res.sendStatus(403);
      }
    } else {
      console.log("No cookie!!");
      res.sendStatus(401);
    }
  }
};

exports.isUser = async (req, res, next) => {
  let name;

  // is User === updatable User
  if (req.query.user_name) {
    name = req.query.user_name;
  } else if (req.query.rau_serial) {
    console.log("Checking User...");
    const item = await RAU.getUser(req.query.rau_serial);
    console.log(item.user);
    name = item.user;
  } else if (req.query.rhu_serial) {
    console.log("Checking User...");
    const item = await RHU.getUser(req.query.rhu_serial);
    console.log(item.user);
    name = item.user;
  }

  //get authcookie from request
  const authcookie = req.cookies.authcookie;

  //verify token which is in cookie value
  try {
    let token = await jwt.verify(authcookie);
    req.user = token.user;
    const { user } = token;
    console.log("Checking token...");
    console.log(token);
    console.log(name);
    if (user === name) {
      console.log("User is updating it's own!");
      next();
    } else {
      console.log("Checking if moderator is updating?!");
      this.isMod(req, res, next);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

exports.isAdmin = async (req, res, next) => {
  //get authcookie from request
  const authcookie = req.cookies.authcookie;

  //verify token which is in cookie value
  try {
    let token = await jwt.verify(authcookie);
    req.user = token.user;
    const { role } = token;
    if (role === "admin") {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

exports.isMod = async (req, res, next) => {
  //get authcookie from request
  const authcookie = req.cookies.authcookie;

  //verify token which is in cookie value
  try {
    let token = await jwt.verify(authcookie);
    req.user = token.user;
    console.log(token);
    const { role } = token;
    if (role === "moderator" || role === "admin") {
      next();
    } else {
      res.send("Restricted!");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

exports.isTech = async (req, res, next) => {
  //get authcookie from request
  const { authcookie } = req.cookies;

  //verify token which is in cookie value
  try {
    let token = await jwt.verify(authcookie);
    req.user = token.user;
    const { role } = token;
    if (role === "technician" || role === "moderator" || role === "admin") {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

exports.isGuest = async (req, res, next) => {
  //get authcookie from request
  const authcookie = req.cookies.authcookie;

  //verify token which is in cookie value
  try {
    let token = await jwt.verify(authcookie);
    req.user = token.user;
    const { role } = token;
    if (
      role === "guest" ||
      role === "technician" ||
      role === "moderator" ||
      role === "admin"
    ) {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};
