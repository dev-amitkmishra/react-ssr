import { combineReducers } from "redux";
import hitsReducer from "./hitsReducer";

export default combineReducers({
    tgaData: hitsReducer
});