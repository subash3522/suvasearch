import { countTheNumber } from "./Index";
import { loginToggler } from "./Index";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    abc:countTheNumber,
    xyz:loginToggler
})

export default rootReducer