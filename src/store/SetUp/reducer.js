import { SET_SETUP } from "./actions";
import { DIFFICULTY } from "../../constants";

const initialState = {
    rows: 10,
    cols: 10,
    mines: 10,
    difficulty: DIFFICULTY.EASY
  };
  
const Presets = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETUP: {
      return action.payload.preset;
    }
    default: {
      return state;
    }
  }
};

export default Presets;
