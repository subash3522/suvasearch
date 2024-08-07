import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const fetchDesticationPost = createAsyncThunk(
  "ReactTookkitFolder/fetchDestivationPost",
  async () => {
    const response = await axios.get(`${apiUrl}/api/mountains`);
    return response.data;
  }
);

const showPostSlice = createSlice({
  name: "fetchpost",
  initialState: { data: [], status: "ideal", error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesticationPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDesticationPost.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchDesticationPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default showPostSlice.reducer;
export { fetchDesticationPost };
