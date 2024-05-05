// //cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchCart,
//   addToCartApi,
//   removeFromCartApi,
// } from "../slices/cartSlice9"; // Updated import

// const initialState = {
//   isLoading: false,
//   cart: [],
//   error: null,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.cart = action.payload;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addToCartApi.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addToCartApi.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.cart.push(action.payload);
//       })
//       .addCase(addToCartApi.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(removeFromCartApi.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(removeFromCartApi.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.cart = state.cart.filter(
//           (product) => product._id !== action.payload,
//         );
//       })
//       .addCase(removeFromCartApi.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default cartSlice.reducer;
