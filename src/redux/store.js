import { configureStore } from "@reduxjs/toolkit";
import walletReducer from './slices/walletSlice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;