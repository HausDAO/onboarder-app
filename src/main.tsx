import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { DHConnectProvider } from "@daohaus/connect";
import { defaultDarkTheme, HausThemeProvider, ThemeOverrides } from "@daohaus/ui";
import { Buffer } from "buffer";

import { blue, green } from "@radix-ui/colors";


import { Routes } from "./Routes";
import { TARGET_DAO } from "./targetDao";

// This solves an issue when using WalletConnect and intercept Txs to create dao proposals
// Related open issue: https://github.com/WalletConnect/walletconnect-monorepo/issues/748
window.Buffer = window.Buffer || Buffer;

const queryClient = new QueryClient();




export const overRideTheme: ThemeOverrides = {
  themeName: "custom",
  rootBgColor: "#000000",
  rootFontColor: "white",
  transparent: "transparent",
  button: {
    ...defaultDarkTheme.button,
    primary: {
      ...defaultDarkTheme.button.primary,
    },
    secondary: {
      ...defaultDarkTheme.button.secondary,
    },
  },
  primary: {
    step1: "white",
    step2: "white",
    step3: "white",
    step4: "white",
    step5: "white",
    step6: "white",
    step7: "white",
    step8: "white",
    step9: "white",
    step10: "white",
    step11: "white",
    step12: "white",
  },
  secondary: {
    ...defaultDarkTheme.secondary,
    step2: green.green10,
    step5: green.green7,
    step9: "white",
    step3: green.green9,
    step10: green.green10,
    step11: green.green12,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <DHConnectProvider
          daoChainId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}
        >
          <HausThemeProvider themeOverrides={overRideTheme}>
            <Routes />
          </HausThemeProvider>
        </DHConnectProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
