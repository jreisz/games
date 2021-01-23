export const setDifficulty = (difficulty,difficultyId) => ({ type: "SET_DIFFICULTY", payload: { difficulty, difficultyId} });
export const setWidth = width => ({ type: "SET_WIDTH", payload: { width } });
export const setHeight = height => ({ type: "SET_HEIGHT", payload: { height } });
export const setMines = mines => ({ type: "SET_MINES", payload: { mines } });
export const setNewGame = newGame => ({ type: "SET_NEWGAME", payload: { newGame } });
