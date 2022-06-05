import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./styles/variables.scss";
import "./styles/index.scss";

ReactDOM.render(
  <>
    <Header />
  </>,
  document.querySelector("#root")
);
