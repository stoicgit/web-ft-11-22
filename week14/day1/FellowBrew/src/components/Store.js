import { configureStore } from "@reduxjs/toolkit";
import Products from "../reducers/Products";
import ShoppingCart from "../reducers/ShoppingCart";

export const store = configureStore({
  reducer: {
    products: Products,
    ShoppingCart: ShoppingCart,
  },
});
