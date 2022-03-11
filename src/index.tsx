import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter } from "react-router-dom";
import App from "./App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
