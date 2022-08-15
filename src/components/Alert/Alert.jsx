import React from "react";
import { useAuthContext } from "../../context/auth-context";

const Alert = () => {
	const { alertType, alertText } = useAuthContext();

	return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
