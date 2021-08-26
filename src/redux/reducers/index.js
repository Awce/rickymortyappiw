import { combineReducers } from "redux";
import charsReducer from "./charsReducer";

export default combineReducers({
  characters: charsReducer,
});
