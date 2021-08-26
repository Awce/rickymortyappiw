import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

const WithRoute = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <WithRoute />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
