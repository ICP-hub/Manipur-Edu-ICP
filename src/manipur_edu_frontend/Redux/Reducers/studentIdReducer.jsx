import StudentPrincipalId from "../Action/studentIdAction" ; 
const initialState = {
    studentPrincipalId: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STUDENT_PRINCIPAL_ID':
            return {
                ...state,
                studentPrincipalId: action.payload
            };
        default:
            return state;
    }
};

export default studentReducer;
