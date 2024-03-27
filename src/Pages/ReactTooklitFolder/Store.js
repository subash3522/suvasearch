import { configureStore } from "@reduxjs/toolkit";
import showPostSlice from "./ApiSlice.js";
import togglerSlice from "./TogglerSlice.js";
import AuthSlice from "./AuthSlice.js";
import FilterSlice from "./FilterSlice.js";
import PostUploadSlice from "./PostUploadSlice.js";

export const store = configureStore({
  reducer: {
    explore: showPostSlice,
    togglerr: togglerSlice,
    auth: AuthSlice,
    filters: FilterSlice,
    PostUpload: PostUploadSlice,
  },
});
