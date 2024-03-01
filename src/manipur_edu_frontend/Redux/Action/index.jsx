import constants from "../../Constants/reduxConstants";

export const profileOpenCloseDropDown = (isOpen) => {
  return { type: constants.PROFILE_OPEN_CLOSE, payload: isOpen };
};
export const notificationOpenCloseDropDown = (isOpen) => {
  return { type: constants.NOTIFICATION_OPEN_CLOSE, payload: isOpen };
};
