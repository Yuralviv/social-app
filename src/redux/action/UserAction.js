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

export const setCurrentPage = (currentPage) => ({
  type: types.SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUserCount = (totalUsersCount) => ({
  type: types.SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
