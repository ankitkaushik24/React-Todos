import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todos/reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import isLoadingSlice from "./todos/state/is-loading-slice";

const reducers = {
  todos: todosReducer,
  isLoading: isLoadingSlice,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export const store = configureStore();

export const persistor = persistStore(store);
