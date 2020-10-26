import * as types from "./ActionTypes";

export const setUserData = (data) => ({
  type: types.SET_USER_DATA,
  data,
});
