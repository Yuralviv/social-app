import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  user: userReducer,
  auth: authReducer,
  form: formReducer,
});

export default rootReducer;
