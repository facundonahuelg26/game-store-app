import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
