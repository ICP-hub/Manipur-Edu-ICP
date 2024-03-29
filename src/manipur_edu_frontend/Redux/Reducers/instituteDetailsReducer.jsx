import constants from "../../Constants/reduxConstants";

const initialState = [];
const instituteDetailsReducer = (state = initialState, action) => {
    if (action.type === constants.GET_INSTITUTE_DETAILS) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default instituteDetailsReducer;