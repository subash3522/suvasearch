import { createAsyncThunk, createSlice, createsli } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDesticationPost = createAsyncThunk(
  "ReactTookkitFolder/fetchDestivationPost",
  async () => {
    const response = axios.get("http://localhost:5001/api/mountains");
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
        state.data.push(action.payload);
      })
      .addCase(fetchDesticationPost.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default showPostSlice.reducer;
export { fetchDesticationPost };
