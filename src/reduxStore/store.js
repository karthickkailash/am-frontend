import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import { saveToLocalStorage, getPreloadedState } from "./localStorage";

const combinedReducer = combineReducers({
  login: loginSlice,
});

const rootReducer = (state, action) => {
  /**
   * to reset whole app state to initial state
   */
  if (action.type === "app/logout") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadedState(),
  // devTools: true
});

function onStateChange() {
  saveToLocalStorage(store.getState());
}

store.subscribe(onStateChange);

export default store;
