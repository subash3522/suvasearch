import { createAsyncThunk, createSlice, createsli } from "@reduxjs/toolkit";
import axios from "axios";

const fetchDesticationPost = createAsyncThunk(
  "ReactTookkitFolder/fetchDestivationPost",
  async () => {
    const response = await axios.get("https://apitesting-com.onrender.com/api/mountains");
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
