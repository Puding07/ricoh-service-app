const { Schema, model } = require("mongoose");

const usersSchema = Schema({
  name: String,
  role: String,
  email: String,
  phone: String,
  pw: String,
  performance: [
    {
      id: Number,
      date: Date,
      tpye: String,
      printer: String,
    },
  ],
});

const Users = (module.exports = model("user", usersSchema));

module.exports.get = async (callbacke, limit) => {
  return await Users.find(callbacke).limit(limit);
};
