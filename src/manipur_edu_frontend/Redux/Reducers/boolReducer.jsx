// src/redux/reducers/boolReducer.js

const initialState = {
    boolVar1: false,
    boolVar2: false,
    boolVar3: false
  };
  
  function boolReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_BOOL_VAR':
        return {
          ...state,
          [action.payload]: !state[action.payload]
        };
      default:
        return state;
    }
  }
  
  export default boolReducer;
  