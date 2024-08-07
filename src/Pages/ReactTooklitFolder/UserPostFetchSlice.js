import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const fetchUserPostFunction = createAsyncThunk(
  "userPosts/fetchById",
  async () => {
    const response = await axios.get(`${apiUrl}/UserPostFetch`);
    return response.data;
  }
);


const fetchUserPostSlice = createSlice({
  name: "UserPost",

  initialState: { data: [], aata: [], status: "pending", error: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPostFunction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserPostFunction.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchUserPostFunction.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
 
});

export default fetchUserPostSlice.reducer;
export { fetchUserPostFunction};
