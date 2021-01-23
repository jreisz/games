
export const setRemainingFlags = remainingFlags => ({ type: "SET_REMAINING_FLAGS", payload: { remainingFlags } });
export const setGameStatus = gameStatus => ({ type: "SET_GAME_STATUS", payload: { gameStatus } });
export const setRemainingNonBombCells = remainingNonBombCells => ({ type: "SET_REMAINING_NON_BOMB_CELL", payload: { remainingNonBombCells } });
export const setBoardCells = boardCells => ({ type: "SET_BOARD_CELLS", payload: { boardCells } });
export const setStartTime = () => ({ type: "SET_START_TIME", payload: {  } });
export const setGameId = () => ({ type: "SET_GAME_ID", payload: {  } });
