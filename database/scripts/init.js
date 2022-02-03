rs.initiate({
  _id: "rsamongo",
  members: [{ _id: 0, host: "rsa-db:27017" }],
});

while (true) {
  if (rs.status().ok) break;
  sleep(1000);
}
