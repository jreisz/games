
const initialState = {
    remainingFlags: 10,
  };
  
const MineSweeper = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMAINING_FLAGS": {
      return {
        ...state,
        remainingFlags:action.payload.remainingFlags
      };
    }
    default: {
      return state;
    }
  }
};

export default MineSweeper;
