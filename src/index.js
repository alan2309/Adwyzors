import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import ThemeState from "./context/Theme/ThemeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeState>
        <App />
      </ThemeState>
    </AuthContextProvider>
  </React.StrictMode>
);
