import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  
};
export const togglerSlice = createSlice({
  name: "togglerSlice",
  initialState,
  reducers: {
    toggler: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggler } = togglerSlice.actions;
export default togglerSlice.reducer;
