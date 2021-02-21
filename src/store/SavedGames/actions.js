export const addSavedGame = game => ({ type: "SAVE_GAME", payload: { game } });
export const editSavedGame = game => ({ type: "EDIT_GAME", payload: { game } });
export const clearSavedGames = game => ({ type: "CLEAR_GAMES", payload: { game }});
