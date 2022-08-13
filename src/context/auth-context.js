import React, { useContext, useReducer } from "react";
import reducer from "../reducers/auth_reducer";

const initialState = {};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <AuthContext.Provider value="test">{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
