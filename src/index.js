import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <>
  <Router>
  <App />
  </Router>
  </>,
  document.getElementById("root")
);