import { configureStore } from "@reduxjs/toolkit";
import showPostSlice from "./ApiSlice.js";
import togglerSlice from "./TogglerSlice.js";
import AuthSlice from "./AuthSlice.js";
import FilterSlice from "./FilterSlice.js";
import PostUploadSlice from "./PostUploadSlice.js";
import UserPostFetchSlice from "./UserPostFetchSlice.js";
import UserPostFetchEdit from "./UserPostFetchEdit.js"; 
import FetchUserNameByIdSlice from "./FetchUserNameById.js";
import fetchSelectedDateSlice from "./DateSelectedSlice.js";

export const store = configureStore({
  reducer: {
    explore: showPostSlice,
    togglerr: togglerSlice,
    auth: AuthSlice,
    filters: FilterSlice,
    PostUpload: PostUploadSlice,
    fetchUserPost:UserPostFetchSlice,
    editUserPost: UserPostFetchEdit,
    fetchUserId : FetchUserNameByIdSlice,
    fetchDate:fetchSelectedDateSlice,
  },
});
