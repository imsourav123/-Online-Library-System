// src/main.jsx (or src/index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter here
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> {/* Wrap the entire app with BrowserRouter */}
    <App />
  </Provider>
);
