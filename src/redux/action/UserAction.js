import * as types from "./ActionTypes";

export const followAction = (userId) => ({
  type: types.USER_FOLLOW,
  userId,
});

export const unfollowAction = (userId) => ({
  type: types.USER_UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: types.SET_USERS,
  users,
});
