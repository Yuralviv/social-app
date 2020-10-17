import * as types from "../action/ActionTypes";

const initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: payload }],
      };
    default:
      return state;
  }
};

export default dialogsReducer;
