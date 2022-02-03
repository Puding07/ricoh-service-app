import { getSessionItem } from "../../../Storage/appStorage";
import { PRINTERS } from "../../types/Types";

const printers = getSessionItem("printers") || [];

const initialState = {
  ...printers,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRINTERS.printers.new: {
      return [...state, ...action.payload];
    }
    case PRINTERS.printers.update: {
      return state.map((printer) => {
        if (printer._id !== action.payload._id) {
          return printer;
        }

        return {
          ...printer,
        };
      });
    }
    case PRINTERS.printers.refresh: {
      return [...action.payload];
    }
    case PRINTERS.printers.delete: {
      return state.map((printer) => {
        if (printer._id !== action.payload._id) {
          return printer;
        }
      });
    }
    default:
      return state;
  }
};
