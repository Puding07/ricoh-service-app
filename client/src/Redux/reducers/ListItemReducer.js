import { LIST_ITEM } from "../types/Types";

const initialState = {
  activeElem: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_ITEM.open:
      return {
        activeElem: action.value,
      };

    case LIST_ITEM.close:
      return {
        activeElem: "",
      };

    default:
      return state;
  }
};
