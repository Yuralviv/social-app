import * as types from "../action/ActionTypes";
import { setUserData } from "../action/authAction";
import { authAPI } from "../../api/auth-api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

export const loginAuth = (email, password, rememberMe) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      // success, get auth data
      window.location.reload();
    }
  });
};

export const logoutAuth = () => {
  return authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      window.location.reload();
    }
  });
};

export default authReducer;
