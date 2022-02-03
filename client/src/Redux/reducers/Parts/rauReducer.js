import { getSessionItem } from "../../../Storage/appStorage";
import { PARTS } from "../../types/Types";

const rauParts = getSessionItem("rauParts") || [];

const initialState = {
  ...rauParts,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PARTS.rau.new: {
      return [...state, ...action.payload];
    }
    case PARTS.rau.update: {
      return state.map((part) => {
        if (part._id !== action.payload._id) {
          return part;
        }

        return {
          ...part,
        };
      });
    }
    case PARTS.rau.refresh: {
      return [...action.payload];
    }
    case PARTS.rau.delete: {
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
