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

 const getAuthUserData = async () =>  {
  return authAPI.me().then((response) => {
    if (response.resultCode === 0) {
      // let { id, login, email } = response.data;
      // dispatch(setUserData(response.data));
    }
  });
};

export const loginAuth = (email, password, rememberMe) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      // success, get auth data
      // dispatch(getAuthUserData(response.data));
    }
  });
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
