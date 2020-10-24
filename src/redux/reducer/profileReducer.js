import * as types from "../action/ActionTypes";

const initialState = {
  posts: [
  //   { id: 1, post: "Hi, how are you?", likesCount: 12 },
  //   { id: 2, post: "It's my first post", likesCount: 11 },
  //   { id: 3, post: "Blabla", likesCount: 11 },
  //   { id: 4, post: "Dada", likesCount: 11 },
  // 
],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
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
        status: action.status,
      };
    }
    case types.SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    case types.SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export default profileReducer;
