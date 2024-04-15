// Actions.js

// Action Types
export const SET_CLICKED_ID = 'SET_CLICKED_ID';

// Action Creators
export const setClickedId = id => ({
  type: SET_CLICKED_ID,
  payload: id
});
