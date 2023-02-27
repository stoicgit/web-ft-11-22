import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/CounterSlice";

export const store = configureStore({
  reduce: {
    counter: counterReducer,
  },
});
