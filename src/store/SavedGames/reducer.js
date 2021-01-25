
const initialState = [
 ];

const SavedGames = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_GAME": {
      return [ ...state,
              action.payload.game];
    }
    case "EDIT_GAME": {
      state[state.findIndex( game => game.gameId ===action.payload.game.gameId)] = action.payload.game

      return state;
    }
    default: {
      return state;
    }
  }
};

export default SavedGames;