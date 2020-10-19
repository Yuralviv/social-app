import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  userReducer,
});

export default rootReducer;
