import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const fetchUserPostByIdFunction = createAsyncThunk(
  "userPosts/fetchById",
  async (postId) => {
    const response = await axios.get(
      `${apiUrl}/UserPostFetchForEdit/${postId}`
    );
    return response.data;
  }
);

const fetchUserPostByIdSlice = createSlice({
  name: "UserPostEdit",

  initialState: { data: [], aata: [], status: "pending", error: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPostByIdFunction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserPostByIdFunction.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchUserPostByIdFunction.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default fetchUserPostByIdSlice.reducer;
export { fetchUserPostByIdFunction };
