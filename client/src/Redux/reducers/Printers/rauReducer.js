import { getSessionItem } from "../../../Storage/appStorage";
import { PRINTERS } from "../../types/Types";

const rauPrinters = getSessionItem("rauPrinters") || [];

const initialState = {
  ...rauPrinters,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRINTERS.rau.new: {
      return [...state, ...action.payload];
    }
    case PRINTERS.rau.update: {
      return state.map((printer) => {
        if (printer._id !== action.payload._id) {
          return printer;
        }

        return {
          ...printer,
        };
      });
    }
    case PRINTERS.rau.refresh: {
      return [...action.payload];
    }

    case PRINTERS.rau.parts.update: {
      const parts = state.parts.map((item) => {
        if (action.payload.name === item.name) {
          item.status = action.payload.status;
          return item;
        }
      });

      return [...state, ...parts];
    }

    case PRINTERS.rau.delete: {
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
