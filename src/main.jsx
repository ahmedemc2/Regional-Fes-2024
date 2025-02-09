import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import App from "./App.jsx";

import store from "./Redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
