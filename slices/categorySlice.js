import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategoriesApi,
  createCategoryApi,
  updateCategoryApi,
  deleteCategoryApi,
} from "../services/categoryApi";

const initialState = {
  isLoading: false,
  categories: [],
  error: null,
};

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await getAllCategoriesApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (categoryData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await createCategoryApi(categoryData);
      thunkAPI.dispatch(categorySlice.actions.updateCategory(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (categoryData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await updateCategoryApi(categoryData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (categoryId, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      await deleteCategoryApi(categoryId);
      return categoryId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateAllCategory(state, action) {
      state.products.push(action.payload);
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.categories.findIndex(
          (category) => category._id === action.payload._id,
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload,
        );
      });
  },
});

export const { updateAllCategory, setLoading } = categorySlice.actions;

export default categorySlice.reducer;
