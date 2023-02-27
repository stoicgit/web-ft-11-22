import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const ShoppingCart = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      return action.payload;
    },
  },
});
export const { selectItem } = ShoppingCart.actions;

export default ShoppingCart.reducer;
