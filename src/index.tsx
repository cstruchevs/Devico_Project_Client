import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StandartThemeProvider from "./theme/StandartTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StandartThemeProvider>
      <App />
    </StandartThemeProvider>
  </React.StrictMode>
);
