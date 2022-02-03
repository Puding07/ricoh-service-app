import { MENU } from "../types/Types";

const initialState = {
  windowSize: window.outerWidth,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU.resize:
      return {
        ...state,
        windowSize: action.payload,
      };
    default:
      return state;
  }
};
