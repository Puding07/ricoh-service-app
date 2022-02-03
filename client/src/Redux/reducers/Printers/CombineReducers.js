import { combineReducers } from "redux";
import printers from "./Reducer";
import rauReducer from "./rauReducer";
import rhuReducer from "./rhuReducer";

const rootReducer = combineReducers({
  printers,
  rau: rauReducer,
  rhu: rhuReducer,
});

export default rootReducer;
