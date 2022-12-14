import React, { useContext, useReducer } from "react";
import {
	CLEAR_ALERT,
	DISPLAY_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGOUT_USER,
	UPDATE_USER_BEGIN,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,
} from "../actions";
import reducer from "../reducers/auth_reducer";
import axios from "axios";
import {
	addUserToLocalStorage,
	removeUserFromLocalStorage,
} from "../utils/helpers";
import authFetch from "../utils/axios";

const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	user: user ? JSON.parse(user) : null,
	userLocation: userLocation || "",
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

	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const response = await axios.post(
				"/api/v1/auth/register",
				currentUser
			);
			const { user, token, location } = response.data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: { user, token, location },
			});
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const loginUser = async (currentUser) => {
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post(
				"/api/v1/auth/login",
				currentUser
			);
			const { user, token, location } = data;
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { user, token, location },
			});
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUserFromLocalStorage();
	};

	const updateUser = async (currentUser) => {
		dispatch({ type: UPDATE_USER_BEGIN });
		try {
			const { data } = await authFetch.patch(
				"/users/updateUser",
				currentUser
			);
			const { user, location, token } = data;
			dispatch({
				type: UPDATE_USER_SUCCESS,
				payload: { user, location, token },
			});
			addUserToLocalStorage({ user, location, token });
		} catch (error) {
			dispatch({
				type: UPDATE_USER_ERROR,
				payload: { msg: error.response.data.msg },
			});
		}
		clearAlert();
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				displayAlert,
				registerUser,
				updateUser,
				loginUser,
				logoutUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
