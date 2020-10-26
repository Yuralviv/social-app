import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  userReducer,
  authReducer
});

export default rootReducer;
