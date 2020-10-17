import * as types from "./ActionTypes";

export const sendMessage = (payload) => ({
  type: types.SEND_MESSAGE,
  payload,
});