import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./tailwind_global.css";
import { BrowserRouter } from "react-router-dom";
import { CustomizationProvider } from "@/contexts/Customization";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CustomizationProvider>
      <App />
    </CustomizationProvider>
  </BrowserRouter>,
);
