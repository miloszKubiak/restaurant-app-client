import React from "react";
import { useMealsContext } from "../../context/meals-context";

const AdminAlert = () => {
	const { alertType, alertText } = useMealsContext();

	return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default AdminAlert;
