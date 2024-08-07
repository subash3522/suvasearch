import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const authCheckerFunction = createAsyncThunk(
  "/ReactToolkitFolder/authCheckerFunctino",
  async () => {
    const response = await axios.get(`${apiUrl}/suvaauth`);
    if (response.data.status === "success") {
      return true;
    } else {
      localStorage.removeItem("userData");

      return false;
    }
  }
);

const authSlice = createSlice({
  name: "authChecker",
  initialState: {
    data: false,
    status: "ideal",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authCheckerFunction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(authCheckerFunction.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(authCheckerFunction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export { authCheckerFunction };
