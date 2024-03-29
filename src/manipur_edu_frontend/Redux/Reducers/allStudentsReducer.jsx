import constants from "../../Constants/reduxConstants";

const initialState = null;
const allStudentsReducer = (state = initialState, action) => {
    if (action.type === constants.GET_ALL_STUDENTS) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default allStudentsReducer;