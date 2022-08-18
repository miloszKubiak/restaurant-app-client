import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext();

	if (!user) {
		return <Navigate to="/" />;
	}

	return children;
};

export default PrivateRoute;
