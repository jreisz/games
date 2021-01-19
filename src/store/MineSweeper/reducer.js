import { SET_REMAINING_BOMBS } from "./actions";

const initialState = {
    remainingBombs: 10
  };
  
const MineSweeper = (state = initialState, action) => {
  switch (action.type) {
    case SET_REMAINING_BOMBS: {
      return action.payload.remainingBombs;
    }
    default: {
      return state;
    }
  }
};

export default MineSweeper;
