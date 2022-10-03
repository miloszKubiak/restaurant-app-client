import React from "react";
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
	LandingPage,
	MyOrders,
} from "./pages";
import {
	AdminRoute,
	AdminLayout,
	AddMeal,
	AllOrders,
	Stats,
	AllMeals,
	AddUser,
	AllUsers,
} from "./pages/admin";
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
				<Route path="register" element={<Register />} />
				<Route path="landing" element={<LandingPage />} />
				<Route path="*" element={<ErrorPage />} />
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
					path="my-orders"
					element={
						<ProtectedRoute>
							<MyOrders />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/admin-panel"
					element={
						<AdminRoute>
							<AdminLayout />
						</AdminRoute>
					}
				>
					<Route path="stats" element={<Stats />} />
					<Route path="all-orders" element={<AllOrders />} />
					<Route path="add-meal" element={<AddMeal />} />
					<Route path="all-meals" element={<AllMeals />} />
					<Route path="add-user" element={<AddUser />} />
					<Route path="all-users" element={<AllUsers />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
