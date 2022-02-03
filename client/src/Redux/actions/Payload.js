import { USER } from "../types/Types";

export const sendPayload = (type, value) => ({
  type: type,
  payload: value,
});

export const userPayload = (type, id, value) => {
  return async (dispatch) => {
    if (type === USER.new) {
      dispatch({
        type: USER.new,
        _id: id,
        payload: value,
      });
    } else if (type === USER.update) {
      dispatch({
        type: USER.update,
        _id: id,
        payload: value,
      });
    } else if (type === USER.jwt) {
      dispatch({
        type: USER.jwt,
        payload: value,
      });
    } else if (type === USER.delete) {
      dispatch({
        type: USER.new,
        _id: id,
      });
    } else {
      dispatch({
        status: "error",
        msg: "There is no such type of updating state!",
      });
    }
  };
};
