import constants from "../../Constants/reduxConstants";

const initialState = [];
const studentDetailsReducer = (state = initialState, action) => {
    if (action.type === constants.GET_STUDENT_DETAILS) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default studentDetailsReducer;