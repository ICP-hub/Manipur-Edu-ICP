import { combineReducers } from "redux";
import profileOpenCloseDropDownReducer from "./profileOpenCloseDropDownReducer.jsx";
import notificationOpenCloseDropDownReducer from "./notificationOpenCloseDropDownReducer.jsx";
import studentDetailsReducer from "./studentDetailsReducer.jsx";
import instituteDetailsReducer from "./instituteDetailsReducer.jsx";
import allInstitutesReducer from "./allInstitutesReducer.jsx";
import allStudentsReducer from "./allStudentsReducer.jsx";
const rootReducer = combineReducers({
    profileOpenCloseDropDownReducer,
    notificationOpenCloseDropDownReducer,
    studentDetailsReducer,
    instituteDetailsReducer,
    allInstitutesReducer,
    allStudentsReducer,
});

export default rootReducer;