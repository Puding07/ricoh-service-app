const path = require("path");
const fs = require("fs");
const NodeRSA = require("node-rsa");
const jwtPrivateKey = "/usr/src/app/keys/private-key.pem";
const jwtPublicKey = "/usr/src/app/keys/public-key.pem";

const privateKey = fs.readFileSync(jwtPrivateKey);
const publicKey = fs.readFileSync(jwtPublicKey);
const private_key = new NodeRSA();
const public_key = new NodeRSA();

private_key.importKey(privateKey, "pkcs8-private-pem");
public_key.importKey(publicKey, "pkcs8-public-pem");

exports.encrypt = function encryptData(data) {
  const encription = public_key.encrypt(data, "base64");
  return encription;
};

exports.decrypt = function decryptData(data) {
  const decryption = private_key.decrypt(data, "utf8");
  return decryption;
};
