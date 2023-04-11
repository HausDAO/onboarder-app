import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { DHConnectProvider } from "@daohaus/connect";
import { Banner, HausThemeProvider, ThemeOverrides, defaultDarkTheme } from "@daohaus/ui";
import { Buffer } from "buffer";

import { Routes } from "./Routes";
import { TARGET_DAO } from "./targetDao";

import { blue, green } from "@radix-ui/colors";

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
          <HausThemeProvider>
          {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_PAUSED && (
          <Banner
            bannerText={`Open staking is paused, next round begins ${new Date(
              TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_NEXT_START * 1000
            ).toDateString()}`}
          />
        )}
            <Routes />
          </HausThemeProvider>
        </DHConnectProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
