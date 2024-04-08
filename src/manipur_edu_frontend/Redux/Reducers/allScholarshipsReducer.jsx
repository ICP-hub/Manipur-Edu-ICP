import constants from "../../Constants/reduxConstants";

const initialState = null;
const allScholarshipsReducer = (state = initialState, action) => {
    if (action.type === constants.GET_ALL_SCHOLARSHIPS) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default allScholarshipsReducer;