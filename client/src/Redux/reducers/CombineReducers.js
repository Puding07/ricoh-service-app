import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "./UserReducer";
import menuReducer from "./MenuReducer";
import printersReducer from "./Printers/CombineReducers";
import partsReducer from "./Parts/CombineReducers";

const rootReducer = combineReducers({
  form: formReducer,
  printers: printersReducer,
  parts: partsReducer,
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
