import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { todoReducer } from "./todo";

const reducer = combineReducers({
  todo: todoReducer,
});

const store = configureStore({
  reducer,
  middleware: () => getDefaultMiddleware(),
});

export default store;
