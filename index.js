import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css"; // Your styles (Bootstrap CSS is already imported in HeroSection)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
c