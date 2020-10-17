const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SN/PROFILE/ADD-POST": {
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
    case "SN/PROFILE/SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "SN/PROFILE/SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }

    case "SN/PROFILE/DELETE_POST":
      return {
        ...state,
        // posts: state.posts.filter((p) => p.id != action.postId),
      };

    case "SN/PROFILE/SAVE_PHOTO_SUCCESS":
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export default profileReducer;
