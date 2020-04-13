import { combineReducers } from "redux";
// import usersReducer from "./usersReducer";
import hitsReducer from "./hitsReducer";

export default combineReducers({
    // users: usersReducer
    tgaData: hitsReducer
});