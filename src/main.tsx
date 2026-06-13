import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { HeaderContextProvider } from "./contexts/HeaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </HashRouter>
  </StrictMode>,
);
