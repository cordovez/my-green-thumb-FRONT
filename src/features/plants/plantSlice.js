import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import plantService from "./plantService";
const initialState = {
  plants: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// Create new plant
export const createPlant = createAsyncThunk(
  "plants/create",
  async (plantData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await plantService.createPlant(plantData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPlant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.plants.push(action.payload);
      })
      .addCase(createPlant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = plantSlice.actions;
export default plantSlice.reducer;
