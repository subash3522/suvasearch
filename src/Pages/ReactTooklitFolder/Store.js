import { configureStore } from "@reduxjs/toolkit";
import showPostSlice from "./ApiSlice.js";
import  togglerSlice  from "./TogglerSlice.js";

export const store = configureStore({
  reducer: {
    explore: showPostSlice,
    togglerr:togglerSlice,
  },
});
