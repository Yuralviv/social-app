import * as types from "../action/ActionTypes";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullname: "Roma",
      status: "i`m boss",
      location: { country: "UA", city: "lviv" },
    },
    {
      id: 2,
      followed: false,
      fullname: "Yura",
      status: "fullstack",
      location: { country: "UA", city: "lviv" },
    },
    {
      id: 3,
      followed: true,
      fullname: "Petro",
      status: "pyrhon dev",
      location: { country: "UA", city: "lviv" },
    },
    {
      id: 4,
      followed: true,
      fullname: "Dimych",
      status: "_zar_",
      location: { country: "UA", city: "lviv" },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
