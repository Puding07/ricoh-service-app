const io = require("socket.io")(3013);
const RAU = require("../model/rauRefurbishments");
const RHU = require("../model/rhuRefurbishments");

const rauChanges = "rauChanges";
const rhuChanges = "rhuChanges";
const stockRAUChanges = "stockRAUChanges";
const stockRHUChanges = "stockRHUChanges";

exports.onConnection = () =>
  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("login", (data) => {
      console.log("User joined room");
      socket.join(data.myID);
      console.log(data.myID);
    });
  });

exports.watchRAU = () => {
  RAU.watch().on("change", (change) => {
    console.log(change);
    if (change.operationType === "update")
      io.emit(rauChanges, {
        status: "updated",
        _id: change.documentKey._id,
        updated: change.updateDescription.updatedFields,
      });
    else if (change.operationType === "delete")
      io.emit(rauChanges, { status: "deleted", _id: change.documentKey._id });
    else
      io.emit(rauChanges, {
        status: "new",
        _id: change.fullDocument._id,
        added: change.fullDocument,
      });
  });

  console.log("Watching RAU for live changes!");
};

exports.watchRHU = () => {
  RHU.watch().on("change", (change) => {
    console.log(change);
    if (change.operationType === "update" || change.operationType === "delete")
      io.emit(rhuChanges, change.documentKey._id);
    else io.emit(rhuChanges, change.fullDocument._id);
  });

  console.log("Watching RHU for live changes!");
};

/*

exports.watchStockRAU = () =>  StockRAU.watch().on("change", (change) => {
  console.log(change);
  if (change.operationType === "update" || change.operationType === "delete")
    io.emit(stockRAUChanges, change.documentKey._id);
  else io.emit(stockRAUChanges, change.fullDocument._id);
});

exports.watchStockRHU = () => StockRHU.watch().on("change", (change) => {
  console.log(change);
  if (change.operationType === "update" || change.operationType === "delete")
    io.emit(stockRHUChanges, change.documentKey._id);
  else io.emit(stockRHUChanges, change.fullDocument._id);
});

*/
