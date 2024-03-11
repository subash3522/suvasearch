import { configureStore } from "@reduxjs/toolkit";
import showPostSlice from "./ApiSlice.js";
import  togglerSlice  from "./TogglerSlice.js";
import AuthSlice from "./AuthSlice.js";

export const store = configureStore({
  reducer: {
    explore: showPostSlice,
    togglerr:togglerSlice,
    auth:AuthSlice,
  },
});
