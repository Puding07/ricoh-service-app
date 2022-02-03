import { getSessionItem } from "../../Storage/appStorage";
import { USER } from "../types/Types";

const user = getSessionItem("user");

const initialState = {
  ...user,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER.update:
      return { ...action.payload };
    default:
      return state;
  }
};
