
const initialState = {
    remainingBombs: 10,
  };
  
const MineSweeper = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMAINING_BOMBS": {
      return {
        ...state,
        remainingBombs:action.payload.remainingBombs
      };
    }
    default: {
      return state;
    }
  }
};

export default MineSweeper;
