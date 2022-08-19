import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

const AdminRoute = ({ children }) => {
	const { user } = useAuthContext();

	if (user.role !== "admin") {
		return <Navigate to="/" />;
	}

	return children;
};

export default AdminRoute;
