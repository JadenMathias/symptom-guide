import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./styles/variables.scss";
import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<>
		<Header />
	</>
);
