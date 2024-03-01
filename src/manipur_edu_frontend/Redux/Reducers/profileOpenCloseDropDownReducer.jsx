import constants  from "../../Constants/reduxConstants";

const initialState = false;
const profileOpenCloseDropDown = (state = initialState, action) => {
  if (action.type === constants.PROFILE_OPEN_CLOSE) {
    state = action.payload;
    return action.payload;
  }
  return state;
};

export default profileOpenCloseDropDown;