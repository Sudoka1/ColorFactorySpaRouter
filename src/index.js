import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Colors from "./Colors";
import ColorDetail from "./ColorDetail";
import NewColor from "./NewColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/colors" />} />
          <Route path="colors" element={<Colors />} />
          <Route path="colors/new" element={<NewColor />} />
          <Route path="colors/:color" element={<ColorDetail />} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
