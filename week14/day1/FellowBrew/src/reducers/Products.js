import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    brand: "Fellow",
    product: "Cups",
    type: "Cup",
    price: 15.0,
    description: "HOLDS LIQUID.",
  },
  {
    brand: "Fellow",
    product: "Cups",
    type: "Cup",
    price: 15.0,
    description: "HOLDS LIQUID.",
  },
  {
    brand: "Fellow",
    product: "Cups",
    type: "Cup",
    price: 15.0,
    description: "HOLDS LIQUID.",
  },
  {
    brand: "Fellow",
    product: "Cups",
    type: "Cup",
    price: 15.0,
    description: "HOLDS LIQUID.",
  },
];

export const Products = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export const {} = Products.actions;

export default Products.reducer;
