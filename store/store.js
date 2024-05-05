import brandSlice from "@/slices/brandSlice";
import categorySlice from "@/slices/categorySlice";
import laptopModelSlice from "@/slices/laptopModelSlice";
import productSlice from "@/slices/productSlice";
import userSlice from "@/slices/userSlice";
// import cartSlice from "@/slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    brand: brandSlice,
    laptopModel: laptopModelSlice,
    user: userSlice,
    // cart: cartSlice,
  },
});
