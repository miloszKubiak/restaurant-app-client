import React from "react";
import { Footer } from "./components";
import {
	Home,
	SingleMeal,
	MealsPage,
	CartPage,
	CheckoutPage,
	ErrorPage,
	About,
	ProtectedRoute,
	Register,
	ProfilePage,
	AdminRoute,
	AdminPanel,
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
						<ProtectedRoute>
							<CheckoutPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="profile"
					element={
						<ProtectedRoute>
							<ProfilePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="adminPanel"
					element={
						<AdminRoute>
							<AdminPanel />
						</AdminRoute>
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
