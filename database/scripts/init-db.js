db = db.getSiblingDB("rsa");
db.users.insertOne({
  name: "admin",
  role: "admin",
  email: "",
  phone: "",
  pw: "",
  performance: [],
});
