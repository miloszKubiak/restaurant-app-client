import React from "react";
import { Footer } from "./components";
import {
	Home,
	SingleMeal,
	MealsPage,
	CartPage,
	PaymentPage,
	ErrorPage,
	About,
	ProtectedRoute,
	Register,
	ProfilePage,
	AdminRoute,
	AdminPanel,
	LandingPage,
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
					path="payment"
					element={
						<ProtectedRoute>
							<PaymentPage />
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
				<Route path="register" element={<Register />} />
				<Route path="landing" element={<LandingPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default App;
