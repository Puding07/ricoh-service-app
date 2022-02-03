const global = require("../global/global");
const { exec } = require("child_process");
const fs = require("fs");
require("dotenv").config();

const HOST = process.env.HOST || "rsa-db";

exports.export = (req, res) => {
  let collections = global.getCollections();

  for (let i = 0; i < collections.length; i++) {
    exec(
      `mongoexport --uri="mongodb://${HOST}" --db=rsa --collection=${collections[i]} --out=/usr/src/app/archive/${collections[i]}.json`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  }
  res.send("success");
};

exports.import = (req, res) => {
  //console.log(fs.realpathSync("."));
  let collections = fs
    .readdirSync("/usr/src/app/archive", (err, files) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return files;
      }
    })
    .map((item) => item.slice(0, item.indexOf(".")));

  console.log(collections);

  for (let i = 0; i < collections.length; i++) {
    exec(
      `mongoimport --uri="mongodb://${HOST}" --db=rsa --collection=${collections[i]} --file=/usr/src/app/archive/${collections[i]}.json`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  }
  res.send("success");
};
