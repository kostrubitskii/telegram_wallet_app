import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: null,
    connected: false,
  },
  reducers: {
    connectWallet: (state, action) => {
      state.address = action.payload;
      state.connected = true;
    },
    disconnectWallet: (state) => {
      state.address = null;
      state.connected = false;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;