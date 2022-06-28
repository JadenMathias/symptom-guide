import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Q1 from "./pages/Q1";
import Symptoms from "./pages/Symptoms";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/symptom-guide" element={<Home />} />
				<Route path="/symptom-guide/screening" element={<Symptoms />} />
				<Route path="/symptom-guide/q1" element={<Q1 />} />
			</Routes>
		</Layout>
	);
};

export default App;
