import constants from "../../Constants/reduxConstants";

const initialState = [];
const scholarshipDetailsReducer = (state = initialState, action) => {
    if (action.type === constants.GET_SCHOLARSHIP_DETAILS) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default scholarshipDetailsReducer;