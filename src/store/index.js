import { createStore } from "redux";

import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Setup from "./SetUp/reducer";
import MineSweeper from "./MineSweeper/reducer";
import SavedGames from "./SavedGames/reducer";

export default createStore(combineReducers({ Setup,MineSweeper,SavedGames }),composeWithDevTools());

