import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer'

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
});

export default rootReducer;
