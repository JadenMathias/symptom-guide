import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/home" element={<Home />} />
			</Routes>
		</Layout>
	);
};

export default App;
