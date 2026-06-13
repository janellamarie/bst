import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { NavigationContextProvider } from "./contexts/NavigationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <NavigationContextProvider>
        <App />
      </NavigationContextProvider>
    </HashRouter>
  </StrictMode>,
);
