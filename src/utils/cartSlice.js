import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state here
      // Redux Toolkit uses immer behind the scence (BTS)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState: {items: ["pizza"]}
    clearCart: (state) => {
      // Redux tool kit(RTK) - Eiter mutate the existing state or return a new state
      // state.items.length = 0; // originalState = []
      return { items: [] }; // this new [] will be replace inside originalState = {items: ["pizza"]};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
