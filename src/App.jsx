import React from "react";
import { Sidebar, Navbar, Footer } from "./components";
import {
	Home,
	SingleMeal,
	Meals,
	Cart,
	Checkout,
	Error,
	About,
	PrivateRoute,
} from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="cart" element={<Cart />} />
				<Route path="meals" element={<Meals />} />
				<Route path="meals/:id" element={<SingleMeal />} />
				<Route
					path="checkout"
					element={
						<PrivateRoute>
							<Checkout />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
