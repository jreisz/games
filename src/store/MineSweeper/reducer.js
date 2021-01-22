
const initialState = {
    remainingFlags: 10,
    remainingNonBombCells: 90,
    gameStatus: '😃'
  };
  
const MineSweeper = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMAINING_FLAGS": {
      return {
        ...state,
        remainingFlags:action.payload.remainingFlags
      };
    }
    case "SET_GAME_STATUS": {
      return {
        ...state,
        gameStatus:action.payload.gameStatus
      };
    }
    case "SET_REMAINING_NON_BOMB_CELL": {
      return {
        ...state,
        remainingNonBombCells:action.payload.remainingNonBombCells
      };
    }
    default: {
      return state;
    }
  }
};

export default MineSweeper;
