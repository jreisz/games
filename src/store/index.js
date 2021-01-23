import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Setup from "./SetUp/reducer";
import MineSweeper from "./MineSweeper/reducer";
import SavedGames from "./SavedGames/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ Setup, MineSweeper, SavedGames })
);

export let store = createStore(persistedReducer, composeWithDevTools());
export  let persistor = persistStore(store);
