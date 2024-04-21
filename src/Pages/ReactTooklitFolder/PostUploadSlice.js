import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postUploadApiFunction = createAsyncThunk(
  "/ReactToolkitFolder/PostUploadApiFunction",
  async (data) => {
    const response = await axios.post("http://localhost:5001/postupload", data);
    return response.data;
  }
);

const editPostApiFunction = createAsyncThunk(
  "/ReactToolkitFolder/editUploadApiFunction", 
  async (formDataToSend)=>{
    const response = await axios.put("http://localhost:5001/postuploadEdit", formDataToSend);
    return response.data
  }
)


const deletePostApiFunction = createAsyncThunk(

"/ReactToolKitFolder/deletePostApiFunction", 
async(data)=> {
  await axios.delete('http://localhost:5001/postUploadDelete')
}
)

const postUploadSlice = createSlice({
  name: "postUpload",
  initialState: { data: [], status: "ideal", error: null },

  extraReducers: (builder) => {
    builder
      .addCase(postUploadApiFunction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postUploadApiFunction.fulfilled, (state, action) => {
        state.action = action.payload;
      })
      .addCase(postUploadApiFunction.rejected,(state)=>{
        state.status = 'failed'
      })
  },
});

export default postUploadSlice.reducer
export {postUploadApiFunction, editPostApiFunction,deletePostApiFunction}
