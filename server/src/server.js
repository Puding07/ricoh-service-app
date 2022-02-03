const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes");
const checkToken = require("./validation/chechToken");
const realtime = require("./controller/realTime");
const global = require("./global/global");
require("dotenv").config();

const app = express();
const DIST_DIR = __dirname;
const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || "rsa-db";

/** MIDDLEWARES */

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use("/api", bodyParser.json());
app.use(cookieParser());
app.use("/api", bodyParser.urlencoded({ extended: true }));
app.use(checkToken.check);
app.use("/api", apiRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

//connect to mongoose
// Dev mode change it to localhost:3001
const dbPath = `mongodb://${HOST}/rsa`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// useUnifiedTopology: true
const mongo = mongoose.connect(dbPath, options);

mongo
  .then(
    (con) => {
      console.log("connected");
      realtime.onConnection();

      realtime.watchRAU();
      realtime.watchRHU();
      return con.connection.db.listCollections().toArray();
    },
    (error) => {
      console.log(error, "error");
    }
  )
  .then((data) => {
    global.setCollections(data.map((item) => item.name));
  });

/** LISTEN */

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}.... ✅`);
  console.log("Press Ctrl+C to quit. 🪠");
});

/**
 * Rooms:
 *  - RAU
 *  - RHU
 *  - rauStock
 *  - rhuStock
 *  - defaultChat
 *  - newMessage
 *
 * if UPDATE or DELETE ==> emit changed item ID
 * else ==> emit newly added item ID
 *
 *
 */

/**
 * Change hard coded pw check to
 * ==> check username and pw in usersDB
 */

/**
 * Dependencies :
 * - body-parser for parsing POST requests.
 * - cookie-parser for storing JWTs.
 * - jsonwebtoken for creating JWT tokens.
 * - crypto-js for encryption and decryption.
 * - mongoose for modelling MongooseDB.
 */

/**
 * Routes:
 * - /auth ==> Authenticates and gives a JWT Token Cookie
 *
 * - /gls ==> Responds with the GLS DB
 *
 * - /printers ==> Gives access to the printers DB
 *
 * - /user:*username* ==> Fetches the user profile and settings
 *
 * - /service ==> Responds with the documents of Service DVD
 *
 *
 */
