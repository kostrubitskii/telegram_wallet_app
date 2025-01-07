"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import store from "./redux/store.js";
import { Provider } from "react-redux";

export const Providers = ({ children }) => {
  return (
    <TonConnectUIProvider manifestUrl="https://telegram-wallet-app.vercel.app/tonconnect-manifest.json">
      <Provider store={store}>{children}</Provider>
    </TonConnectUIProvider>
  );
};
