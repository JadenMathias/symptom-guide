import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/symptom-guide" element={<Home />} />
				<Route path="/symptom-guide/screening" element={<Symptoms />} />
			</Routes>
		</Layout>
	);
};

export default App;