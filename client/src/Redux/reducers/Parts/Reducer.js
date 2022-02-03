import { getSessionItem } from "../../../Storage/appStorage";
import { PARTS } from "../../types/Types";

const parts = getSessionItem("parts") || [];

const initialState = {
  ...parts,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PARTS.parts.new: {
      return [...state, ...action.payload];
    }
    case PARTS.parts.update: {
      return state.map((part) => {
        if (part._id !== action.payload._id) {
          return part;
        }

        return {
          ...part,
        };
      });
    }
    case PARTS.parts.refresh: {
      return [...action.payload];
    }
    case PARTS.parts.delete: {
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
