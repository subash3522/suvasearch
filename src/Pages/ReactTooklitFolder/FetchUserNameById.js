import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserNameByIdFunction = createAsyncThunk(
  "/ReactToolKitFolder/fetchUserNameById",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5001/fetchUserName/${userId}`
    );
    return response.data;
  }
);

const fetchUserNameByIdSlice = createSlice({
  name: "fetchUserName",
  initialState: { data: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserNameByIdFunction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserNameByIdFunction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUserNameByIdFunction.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default fetchUserNameByIdSlice.reducer;
export { fetchUserNameByIdFunction };
