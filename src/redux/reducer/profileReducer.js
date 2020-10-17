import * as types from "../action/ActionTypes";

const initialState = {
  posts: [
    { id: 1, post: "Hi, how are you?", likesCount: 12 },
    { id: 2, post: "It's my first post", likesCount: 11 },
    { id: 3, post: "Blabla", likesCount: 11 },
    { id: 4, post: "Dada", likesCount: 11 },
  ],
  status: "",
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_POST: {
      const newPost = {
        id: 5,
        post: payload,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case types.SET_STATUS: {
      return {
        ...state,
        status: payload,
      };
    }
    case types.SET_USER_PROFILE: {
      return { ...state, profile: payload };
    }

    case types.DELETE_POST:
      return {
        ...state,
        // posts: state.posts.filter((p) => p.id != action.postId),
      };

    case types.SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: payload } };
    default:
      return state;
  }
};

export default profileReducer;
