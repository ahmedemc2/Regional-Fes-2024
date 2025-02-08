import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import App from "./App.jsx";

import { BrowserRouter as Ahmed } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Ahmed>
        <App />
      </Ahmed>
    </Provider>
  </StrictMode>
);
