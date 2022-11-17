import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UpdateViewContextProvider } from "./context/UpdateViewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UpdateViewContextProvider>
      <App />
    </UpdateViewContextProvider>
  </React.StrictMode>
);
