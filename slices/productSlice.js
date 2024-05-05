import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProductsApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
  getSingleProductApi,
} from "../services/productsApi";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
  singleProduct: null,
};

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await getAllProductsApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await getSingleProductApi(productId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (productData, thunkAPI) => {
    try {
      const response = await createProductApi(productData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (productData, thunkAPI) => {
    try {
      const response = await updateProductApi(productData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      await deleteProductApi(productId);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id,
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export const { setLoading } = productSlice.actions;

export default productSlice.reducer;
