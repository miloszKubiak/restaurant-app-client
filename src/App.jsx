import React from "react";
import { Sidebar, Navbar, Footer } from "./components";
import {
	Home,
	SingleMeal,
	MealsPage,
	CartPage,
	Checkout,
	ErrorPage,
	About,
	PrivateRoute,
	Register,
} from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="meals" element={<MealsPage />} />
				<Route path="meals/:id" element={<SingleMeal />} />
				<Route
					path="checkout"
					element={
						<PrivateRoute>
							<Checkout />
						</PrivateRoute>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
