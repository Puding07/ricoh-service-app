import { getSessionItem } from "../../Storage/appStorage";
import { USER } from "../types/Types";

const user = getSessionItem("user");

const initialState = {
  ...user,
};

export default (state = initialState, action) => {
  /**      UPDATE      */
  switch (action.type) {
    case USER.update:
      return { ...action.payload };
    case USER.jwt:
      return { ...state, jwt: action.payload };
    /**     PERFORMANCE      */
    case USER.performance.new: {
      state.performance.push(action.payload);
      return {
        ...state,
      };
    }
    case USER.performance.update: {
      for (let i in state.performance) {
        if (state.performance[i]._id === action.payload._id) {
          state.performance.push(action.payload);
        }
      }
      return {
        ...state,
      };
    }
    case USER.performance.delete: {
      const performance = state.performance.map((item) => {
        if (item._id !== action.payload._id) {
          return item;
        }
      });
      return {
        ...state,
        performance: performance,
      };
    }

    /**     POINTS     */

    // NOW
    case USER.performance.points.now.update: {
      const obj = state.performance[state.performance.length - 1];
      const item = { ...obj, now: action.payload };
      const performance = [...state.performance, item];
      return {
        ...state,
        performance: performance,
      };
    }

    // NEEDED
    case USER.performance.points.needed.update: {
      const obj = state.performance[state.performance.length - 1];
      const item = { ...obj, needed: action.payload };
      const performance = [...state.performance, item];
      return {
        ...state,
        performance: performance,
      };
    }

    // DAILYNEEDED
    case USER.performance.points.dailyneed.update: {
      const obj = state.performance[state.performance.length - 1];
      const item = { ...obj, dailyneed: action.payload };
      const performance = [...state.performance, item];
      return {
        ...state,
        performance: performance,
      };
    }

    /**     INSPECTION       */
    case USER.performance.inspection.update: {
      const obj = state.performance[state.performance.length - 1];
      const inspection = [
        ...state.performance[state.performance.length - 1].inspection.push(
          action.payload
        ),
      ];
      const item = { ...obj, inspection };
      const performance = [...state.performance, item];
      return {
        ...state,
        performance: performance,
      };
    }

    /**     REFURBISHMENT      */
    case USER.performance.refurbishment.update: {
      const obj = state.performance[state.performance.length - 1];
      const refurbishment = [
        ...state.performance[state.performance.length - 1].refurbishment.push(
          action.payload
        ),
      ];
      const item = { ...obj, refurbishment };
      const performance = [...state.performance, item];
      return {
        ...state,
        performance: performance,
      };
    }

    /**     HOLIDAY          */

    // MAX
    case USER.holiday.max: {
      return {
        ...state,
        holiday: {
          ...state.holiday,
          max: action.payload,
        },
      };
    }

    // LEFT
    case USER.holiday.left: {
      return {
        ...state,
        holiday: {
          ...state.holiday,
          left: action.payload,
        },
      };
    }

    // TAKEOUT
    case USER.holiday.takeout.new: {
      const today = new Date();
      const day = `${today.getFullYear()}.${today.getDate()}.${today.getDay()}`;
      const takeout = [...state.holiday.takeout, day];

      return {
        ...state,
        holiday: {
          ...state.holiday,
          takeout: takeout,
        },
      };
    }

    case USER.holiday.takeout.update: {
      const takeout = state.holiday.takeout.map((item) => {
        if (item === action.payload.old) {
          return action.payload.new;
        }
      });

      return {
        ...state,
        holiday: {
          ...state.holiday,
          takeout: takeout,
        },
      };
    }

    case USER.holiday.takeout.delete: {
      const takeout = state.holiday.takeout.map((item) => {
        if (item !== action.payload) {
          return item;
        }
      });

      return {
        ...state,
        holiday: {
          ...state.holiday,
          takeout: takeout,
        },
      };
    }

    /**     SICKLEAVE          */

    // MAX
    case USER.sickleave.max: {
      return {
        ...state,
        sickleave: {
          ...state.sickleave,
          max: action.payload,
        },
      };
    }

    // LEFT
    case USER.sickleave.left: {
      return {
        ...state,
        sickleave: {
          ...state.sickleave,
          left: action.payload,
        },
      };
    }

    // TAKEOUT
    case USER.sickleave.takeout.new: {
      const today = new Date();
      const day = `${today.getFullYear()}.${today.getDate()}.${today.getDay()}`;
      const takeout = [...state.sickleave.takeout, day];

      return {
        ...state,
        sickleave: {
          ...state.sickleave,
          takeout: takeout,
        },
      };
    }

    case USER.sickleave.takeout.update: {
      const takeout = state.sickleave.takeout.map((item) => {
        if (item === action.payload.old) {
          return action.payload.new;
        }
      });

      return {
        ...state,
        sickleave: {
          ...state.sickleave,
          takeout: takeout,
        },
      };
    }

    case USER.sickleave.takeout.delete: {
      const takeout = state.sickleave.takeout.map((item) => {
        if (item !== action.payload) {
          return item;
        }
      });

      return {
        ...state,
        sickleave: {
          ...state.sickleave,
          takeout: takeout,
        },
      };
    }

    default:
      return state;
  }
};
