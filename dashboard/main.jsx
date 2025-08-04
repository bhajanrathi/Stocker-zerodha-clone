import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./src/components/Home";
import { AuthProvider } from "./src/components/AuthContext";
import { GeneralContextProvider } from "./src/components/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GeneralContextProvider>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </GeneralContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
  