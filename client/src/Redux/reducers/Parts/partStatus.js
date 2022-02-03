import { getSessionItem } from "../../../Storage/appStorage";
import { PARTS } from "../../types/Types";

const partStatus = getSessionItem("partStatus") || [];

const initialState = {
  ...partStatus,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PARTS.status.update:
      return [...action.payload];

    default:
      return state;
  }
};
