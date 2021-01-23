import {toMMddyyyyhhmmss} from '../../../lib/santex/utils/dateFormatter';

const initialState = {
    remainingFlags: 10,
    remainingNonBombCells: 90,
    boardCells:[],
    gameStatus: '😃',
    gameId:Math.random().toString(36).substring(7),
    startTime: toMMddyyyyhhmmss(new Date())
  };
  
const MineSweeper = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REMAINING_FLAGS": {
      return {
        ...state,
        remainingFlags:action.payload.remainingFlags
      };
    }
    case "SET_BOARD_CELLS": {
      return {
        ...state,
        boardCells:action.payload.boardCells
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
    case "SET_START_TIME": {
      return {
        ...state,
        startTime: toMMddyyyyhhmmss(new Date())
      };
    }
    case "SET_GAME_ID": {
      return {
        ...state,
        gameId: Math.random().toString(36).substring(7)
      };
    }
    default: {
      return state;
    }
  }
};

export default MineSweeper;
