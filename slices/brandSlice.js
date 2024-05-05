import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBrandsApi,
  createBrandApi,
  updateBrandApi,
  deleteBrandApi,
} from "../services/brandApi";

const initialState = {
  isLoading: false,
  brands: [],
  error: null,
};

export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await getAllBrandsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async (brandData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await createBrandApi(brandData);
      thunkAPI.dispatch(brandSlice.actions.updateBrand(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (brandData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await updateBrandApi(brandData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (brandId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      await deleteBrandApi(brandId);
      return brandId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    updateAllBrands(state, action) {
      state.brands.push(action.payload);
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brands.push(action.payload);
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.brands.findIndex(
          (brand) => brand._id === action.payload._id,
        );
        if (index !== -1) {
          state.brands[index] = action.payload;
        }
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brands = state.brands.filter(
          (brand) => brand._id !== action.payload,
        );
      });
  },
});

export const { updateAllBrands, setLoading } = brandSlice.actions;

export default brandSlice.reducer;
