
import { SET_CLICKED_ID } from '../Action/WalletActions';

const initialState = {
  clickedId: null,
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLICKED_ID:
        state.clickedId = action.payload;
      return state;
    default:
      return state;
  }
};

export default WalletReducer;
