import { getSessionItem } from "../../../Storage/appStorage";
import { PARTS } from "../../types/Types";

const rhuParts = getSessionItem("rhuParts") || [];

const initialState = {
  ...rhuParts,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PARTS.rhu.new: {
      return [...state, ...action.payload];
    }
    case PARTS.rhu.update: {
      return state.map((part) => {
        if (part._id !== action.payload._id) {
          return part;
        }

        return {
          ...part,
        };
      });
    }
    case PARTS.rhu.refresh: {
      return [...action.payload];
    }
    case PARTS.rhu.delete: {
      return state.map((part) => {
        if (part._id !== action.payload._id) {
          return part;
        }
      });
    }
    default:
      return state;
  }
};
