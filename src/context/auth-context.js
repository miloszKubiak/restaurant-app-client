import React, { useContext, useReducer } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "../actions";
import reducer from "../reducers/auth_reducer";

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	return (
		<AuthContext.Provider value={{ ...state, displayAlert }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
