import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementbyAmount: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment, decrement, incrementbyAmount } = counterSlice.actions;

export default counterSlice.reducer;
