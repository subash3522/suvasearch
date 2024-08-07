import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const fetchSelectedDateFunction = createAsyncThunk(
  "/ReactToolKitFolder/fetchUserNameById",
  async (destination) => {
    const response = await axios.get(`${apiUrl}/fetchDate/${destination}`);
    return response.data;
  }
);

const fetchSelectedDateSlice = createSlice({
  name: "fetchUserName",
  initialState: { data: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedDateFunction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSelectedDateFunction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSelectedDateFunction.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default fetchSelectedDateSlice.reducer;
export { fetchSelectedDateFunction };
