import { getSessionItem } from "../../../Storage/appStorage";
import { PRINTERS } from "../../types/Types";

const rhuPrinters = getSessionItem("rhuPrinters") || [];

const initialState = {
  ...rhuPrinters,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRINTERS.rhu.new: {
      return [...state, ...action.payload];
    }
    case PRINTERS.rhu.update: {
      return state.map((printer) => {
        if (printer._id !== action.payload._id) {
          return printer;
        }

        return {
          ...printer,
        };
      });
    }
    case PRINTERS.rhu.refresh: {
      return [...action.payload];
    }
    case PRINTERS.rhu.delete: {
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
