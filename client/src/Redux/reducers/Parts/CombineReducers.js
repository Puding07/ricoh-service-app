import { combineReducers } from "redux";
import parts from "./Reducer";
import status from "./partStatus";
import rau from "./rauReducer";
import rhu from "./rhuReducer";

export default combineReducers({
  parts,
  status,
  rau,
  rhu,
});
