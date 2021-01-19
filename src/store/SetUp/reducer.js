import { DIFFICULTY } from "../../constants";

const initialState = {
  width: 10,
  height: 10,
  mines: 10,
  newGame: true,
  difficulty: DIFFICULTY.EASY,
};

const Presets = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIFFICULTY": {
      return { ...state, difficulty: action.payload.difficulty };
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
    default: {
      return state;
    }
  }
};

export default Presets;
