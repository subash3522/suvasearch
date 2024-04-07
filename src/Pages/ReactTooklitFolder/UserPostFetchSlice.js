import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserPostFunction = createAsyncThunk(
  "/ReactToolkitFolder/UserPostFetch",
  async () => {
    const response = await axios.get("http://localhost:5001/UserPostFetch");
    return response.data;
  }
);

const fetchUserPostSlice = createSlice({
  name: "UserPost",

  initialState: { data: [], status: "pending", error: null },

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
export { fetchUserPostFunction };
