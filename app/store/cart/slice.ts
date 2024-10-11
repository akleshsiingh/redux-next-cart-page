import { Product } from "@/app/model/product.model";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { items: Product[]; totalQuantity: number } = {
  totalQuantity: 0,
  items: [],
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    add: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity! + 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity = state.totalQuantity + 1;
    },
    remove: (state, { payload }) => {
      const id = payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity! > 1) {
          existingItem.quantity = existingItem.quantity! - 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.totalQuantity -= 1;
      }
    },
  },
});


export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
