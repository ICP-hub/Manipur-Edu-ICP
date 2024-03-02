import { combineReducers } from "redux";
import profileOpenCloseDropDownReducer from "./profileOpenCloseDropDownReducer.jsx";
import notificationOpenCloseDropDownReducer from "./notificationOpenCloseDropDownReducer.jsx";

const rootReducer = combineReducers({
    profileOpenCloseDropDownReducer,
    notificationOpenCloseDropDownReducer
});

export default rootReducer;