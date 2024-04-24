import { combineReducers } from "redux";
import profileOpenCloseDropDownReducer from "./profileOpenCloseDropDownReducer.jsx";
import notificationOpenCloseDropDownReducer from "./notificationOpenCloseDropDownReducer.jsx";
import studentDetailsReducer from "./studentDetailsReducer.jsx";
import instituteDetailsReducer from "./instituteDetailsReducer.jsx";
import allInstitutesReducer from "./allInstitutesReducer.jsx";
import allStudentsReducer from "./allStudentsReducer.jsx";
import allScholarshipsReducer from "./allScholarshipsReducer.jsx";
import WalletReducer from "./WalletReducer.jsx";
import boolReducer from "./boolReducer.jsx";
import idReducer from "./idReducer.jsx";
import studentReducer from "./studentIdReducer.jsx"

const rootReducer = combineReducers({
    profileOpenCloseDropDownReducer,
    notificationOpenCloseDropDownReducer,
    studentDetailsReducer,
    instituteDetailsReducer,
    allInstitutesReducer,
    allStudentsReducer,
    allScholarshipsReducer,
    WalletReducer,
    bools : boolReducer, 
   intituteId : idReducer,
   studentId : studentReducer

});

export default rootReducer;