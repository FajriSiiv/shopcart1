import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDITEM: (state) => {
      state.cart += 1;
    },
  },
});

export const { ADDITEM, DELITEM } = cartSlice.actions;
export default cartSlice.reducer;
