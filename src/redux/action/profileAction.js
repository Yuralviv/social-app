import * as types from "./ActionTypes";

export const addPost = (payload) => ({
  type: types.ADD_POST,
  payload,
});

export const SET_STATUS = (payload) => ({
  type: types.SET_STATUS,
  payload,
});

export const setUserProfile = (profile) => ({
  type: types.SET_USER_PROFILE,
  profile,
});

export const deletePost = (payload) => ({
  type: types.DELETE_POST,
  payload,
});

export const savePhotoSuccess = (payload) => ({
  type: types.SAVE_PHOTO_SUCCESS,
  payload,
});
