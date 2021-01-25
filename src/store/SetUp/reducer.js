import { DIFFICULTY } from "../../constants";

const initialState = {
  width: 4,
  height: 4,
  mines: 1,
  newGame: true,
  loadGame:false,
  difficulty: DIFFICULTY.KINDER,
  difficultyId: 0,
};

const Presets = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIFFICULTY": {
      return {
        ...state,
        difficulty: action.payload.difficulty,
        difficultyId: parseInt(action.payload.difficultyId),
        width:
          (action.payload.difficulty == DIFFICULTY.EASY
            ? 10
            : (action.payload.difficulty == DIFFICULTY.MEDIUM
            ? 15
            : (action.payload.difficulty == DIFFICULTY.HARD
            ? 19 
            : 4))),
        height:
          (action.payload.difficulty == DIFFICULTY.EASY
            ? 10
            : (action.payload.difficulty == DIFFICULTY.MEDIUM
            ? 15
            : (action.payload.difficulty == DIFFICULTY.HARD
              ? 19
              : 4))),
        mines:
          (action.payload.difficulty == DIFFICULTY.EASY
            ? 10
            : (action.payload.difficulty == DIFFICULTY.MEDIUM
            ? 20
            : (action.payload.difficulty == DIFFICULTY.HARD
              ? 99
              : 1))),
      };
    }
    case "SET_WIDTH": {
      return { ...state, width: action.payload.width };
    }
    case "SET_HEIGHT": {
      return { ...state, height: action.payload.height };
    }
    case "SET_MINES": {
      return { ...state, mines: action.payload.mines };
    }
    case "SET_NEWGAME": {
      return { ...state, newGame: action.payload.newGame };
    }
    case "SET_LOADGAME": {
      return { ...state, loadGame: action.payload.loadGame };
    }
    default: {
      return state;
    }
  }
};

export default Presets;
