const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const jwtPrivateKey = "/usr/src/app/keys/private-key.pem";
const jwtPublicKey = "/usr/src/app/keys/public-key.pem";
//const jwtPrivateKey = path.resolve("") + "/keys/private-key.pem";
//const jwtPublicKey = path.resolve("") + "/keys/public-key.pem";

exports.verify = function jwtVerify(token) {
  const options = {
    algorithms: ["RS256"],
  };
  return new Promise((resolve, reject) => {
    try {
      const cert = fs.readFileSync(jwtPublicKey);
      const result = jwt.verify(token, cert, options);
      resolve(result);
    } catch (err) {
      console.log(err);
    }
  });
};

exports.sign = function jwtSign(payload) {
  const options = {
    algorithm: "RS256",
    expiresIn: "8h",
    // exp: Math.floor(Date.now() / 1000) + 480 * 60,
  };
  return new Promise((resolve, reject) => {
    try {
      const cert = fs.readFileSync(jwtPrivateKey);
      const token = jwt.sign(payload, cert, options);
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};
