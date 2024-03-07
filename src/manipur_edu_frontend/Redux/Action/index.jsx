import constants from "../../Constants/reduxConstants";

export const profileOpenCloseDropDown = (isOpen) => {
  return { type: constants.PROFILE_OPEN_CLOSE, payload: isOpen };
};
export const notificationOpenCloseDropDown = (isOpen) => {
  return { type: constants.NOTIFICATION_OPEN_CLOSE, payload: isOpen };
};

export const getStudentDetails = (studentDetail) => {
  return { type: constants.GET_STUDENT_DETAILS, payload: studentDetail };
};
export const getInstituteDetails = (instituteDetail) => {
  return { type: constants.GET_INSTITUTE_DETAILS, payload: instituteDetail };
};

export const getAllInstitutes = (instituteDetail) => {
  return { type: constants.GET_ALL_INSTITUTES, payload: instituteDetail };
};
export const getAllStudents = (studentDetails) => {
  return { type: constants.GET_ALL_STUDENTS, payload: studentDetails };
};