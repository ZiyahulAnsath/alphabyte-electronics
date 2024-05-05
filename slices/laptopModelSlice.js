import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllLaptopModelsApi,
  createLaptopModelApi,
  updateLaptopModelApi,
  deleteLaptopModelApi,
} from "../services/laptopModelApi";

const initialState = {
  isLoading: false,
  laptopModels: [],
  error: null,
};

export const getAllLaptopModels = createAsyncThunk(
  "laptopModel/getAllLaptopModels",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await getAllLaptopModelsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const createLaptopModel = createAsyncThunk(
  "laptopModel/createLaptopModel",
  async (laptopModelData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await createLaptopModelApi(laptopModelData);
      thunkAPI.dispatch(
        laptopModelSlice.actions.updateLaptopModel(response.data),
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const updateLaptopModel = createAsyncThunk(
  "laptopModel/updateLaptopModel",
  async (laptopModelData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await updateLaptopModelApi(laptopModelData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const deleteLaptopModel = createAsyncThunk(
  "laptopModel/deleteLaptopModel",
  async (laptopModelId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      await deleteLaptopModelApi(laptopModelId);
      return laptopModelId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

const laptopModelSlice = createSlice({
  name: "laptopModel",
  initialState,
  reducers: {
    updateAllLaptopModels(state, action) {
      state.laptopModels.push(action.payload);
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllLaptopModels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.laptopModels = action.payload;
      })
      .addCase(createLaptopModel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.laptopModels.push(action.payload);
      })
      .addCase(updateLaptopModel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.laptopModels.findIndex(
          (laptopModel) => laptopModel._id === action.payload._id,
        );
        if (index !== -1) {
          state.laptopModels[index] = action.payload;
        }
      })
      .addCase(deleteLaptopModel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.laptopModels = state.laptopModels.filter(
          (laptopModel) => laptopModel._id !== action.payload,
        );
      });
  },
});

export const { updateAllLaptopModels, setLoading } = laptopModelSlice.actions;

export default laptopModelSlice.reducer;