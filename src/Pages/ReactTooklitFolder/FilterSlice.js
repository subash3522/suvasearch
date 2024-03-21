import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const filterFunction = createAsyncThunk(
    "/ReactToolKitFolder/FilterSlice",
    async ({column,content})=>{
        const response = await axios.get(`http://localhost:5001/mountains/${column}/${content}`);
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

