import { setSessionItem } from "../Storage/appStorage";
import { getReq } from "./Api";

export const getPrinters = async (limit) => {
  await getReq("/api/rhu/printers").then((data) => {
    console.log("RHU printers: ", data);
    setSessionItem("rhuPrinters", data.message);
  });
  await getReq("/api/rau/printers").then((data) => {
    console.log("RAU printers: ", data);
    setSessionItem("rauPrinters", data.message);
  });
};
