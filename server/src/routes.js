//initialize express router
const router = require("express").Router();
const usersController = require("./controller/usersController");
const rauController = require("./controller/rauController");
const rhuController = require("./controller/rhuController");
const printerController = require("./controller/printerController");
const partsController = require("./controller/partsController");
const rauStockController = require("./controller/rauStockController");
const rhuStockController = require("./controller/rhuStockController");
const auth = require("./validation/Authentication");
const encrypt = require("./validation/encrypt");
const checkToken = require("./validation/chechToken");
const mongo = require("./database/mongo");

/** Restrictions (only for admins!!)  */

router.use("/auth/register", checkToken.isMod);

//set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to FirstRest API",
  });
});

/**
 * Login
 */

router.route("/auth/login").post(auth.login).get(auth.getCookie);

/**
 * Register
 */

router.route("/auth/register").post(checkToken.isMod, auth.register);

/**
 * Users
 */

router
  .route("/users")
  .get(usersController.index)
  .post(checkToken.isMod, auth.register);

router
  .route("/users/:item")
  .get(usersController.view)
  .patch(checkToken.isUser, usersController.update)
  .post(checkToken.isUser, usersController.update)
  .delete(checkToken.isMod, usersController.delete);

/**
 * RAU
 */

router
  .route("/rau/printers")
  .get(rauController.index)
  .post(checkToken.isTech, rauController.add);
router
  .route("/rau/printers/:item")
  .get(rauController.view)
  .patch(checkToken.isUser, rauController.update)
  .post(checkToken.isUser, rauController.update)
  .delete(checkToken.isMod, rauController.delete);

/**
 * RHU
 */

router
  .route("/rhu/printers")
  .get(rhuController.index)
  .post(checkToken.isTech, rhuController.add);
router
  .route("/rhu/printers/:item")
  .get(rhuController.view)
  .patch(checkToken.isUser, rhuController.update)
  .post(checkToken.isUser, rhuController.update)
  .delete(checkToken.isMod, rhuController.delete);

/**
 * Printers
 */

router
  .route("/printers")
  .get(printerController.index)
  .post(checkToken.isMod, printerController.add);
router
  .route("/printers/:item")
  .get(printerController.view)
  .patch(checkToken.isMod, printerController.update)
  .post(checkToken.isMod, printerController.update)
  .delete(checkToken.isMod, printerController.delete);

/**
 * Parts
 */

router
  .route("/parts")
  .get(partsController.index)
  .post(checkToken.isMod, partsController.add);
router
  .route("/parts/:item")
  .get(partsController.view)
  .patch(checkToken.isMod, partsController.update)
  .post(checkToken.isMod, partsController.update)
  .delete(checkToken.isMod, partsController.delete);

/**
 * RAU Stock
 */

router
  .route("/rau/stock")
  .get(rauStockController.index)
  .post(checkToken.isTech, rauStockController.add);
router
  .route("/rau/stock/:item")
  .get(rauStockController.view)
  .patch(checkToken.isTech, rauStockController.update)
  .post(checkToken.isTech, rauStockController.update)
  .delete(checkToken.isTech, rauStockController.delete);

/**
 * RHU Stock
 */

router
  .route("/rhu/stock")
  .get(rhuStockController.index)
  .post(checkToken.isTech, rhuStockController.add);
router
  .route("/rhu/stock/:item")
  .get(rhuStockController.view)
  .patch(checkToken.isTech, rhuStockController.update)
  .post(checkToken.isTech, rhuStockController.update)
  .delete(checkToken.isTech, rhuStockController.delete);

/**
 * Decrypting
 */

router.route("/decrypt").get((req, res) => {
  const data = req.body.token;
  res.send(encrypt.decrypt(data));
});

/**
 * Encrypting
 */

router.route("/encrypt").get((req, res) => {
  const data = req.body.pw;
  res.send(encrypt.encrypt(data));
});

/**
 * Database Export/Import
 */

router.route("/mongo/export").get(mongo.export);

router.route("/mongo/import").get(mongo.import);

module.exports = router;
