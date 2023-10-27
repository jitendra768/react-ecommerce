import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/counter/counterSlice';
import productReducer from '../features/ProductList/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
