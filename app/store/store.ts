import { configureStore, Store } from "@reduxjs/toolkit";
import CartReducer from "./cart/slice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
