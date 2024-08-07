import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const filterFunction = createAsyncThunk(
    "/ReactToolKitFolder/FilterSlice",
    async ({column,content})=>{
        const response = await axios.get(`${apiUrl}/mountains/${column}/${content}`);
        return response.data;
    }
)
const FilterSlice = createSlice({
    name: "fetchpost",
    initialState: { data: [], status: "ideal", error: null },
    extraReducers: (builder) => {
      builder
        .addCase(filterFunction.pending, (state) => {
          state.status = "loading";
        })
        .addCase(filterFunction.fulfilled, (state, action) => {
          state.data = action.payload;
        })
        .addCase(filterFunction.rejected, (state) => {
          state.status = "failed";
        });
    },
  });

  export default FilterSlice.reducer;
  export {filterFunction};

