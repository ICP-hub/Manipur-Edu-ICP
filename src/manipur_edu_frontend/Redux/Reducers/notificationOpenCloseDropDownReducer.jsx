import constants  from "../../Constants/reduxConstants";

const initialState = false;
const notificationOpenCloseDropDownReducer = (state = initialState, action) => {
  if (action.type === constants.NOTIFICATION_OPEN_CLOSE) {
    state = action.payload;
    return action.payload;
  }
  return state;
};

export default notificationOpenCloseDropDownReducer;