import * as types from "../action/ActionTypes";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 10,
  currentPage: 1,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else return u;
        }),
      };
    }

    case types.USER_UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else return u;
        }),
      };
    }

    case types.SET_USERS: {
      return { ...state, users: action.users };
    }

    case types.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case types.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
