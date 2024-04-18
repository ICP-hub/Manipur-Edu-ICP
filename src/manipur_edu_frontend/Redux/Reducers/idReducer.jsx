import { SET_INSTITUTE_ID } from "../Action/idAction";

const initialState = {
  instituteId: '',
};

function idReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INSTITUTE_ID:
      return {
        ...state,
        instituteId: action.payload,
      };
    default:
      return state;
  }
}

export default idReducer;
