import constants from "../../Constants/reduxConstants";

const initialState = null;
const allInstitutesReducer = (state = initialState, action) => {
    if (action.type === constants.GET_ALL_INSTITUTES) {
        state = action.payload;
        return action.payload;
    }
    return state;
};

export default allInstitutesReducer;