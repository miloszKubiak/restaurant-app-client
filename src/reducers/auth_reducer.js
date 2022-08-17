import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
} from "../actions";

const auth_reducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_ALERT:
			return {
				...state,
				showAlert: true,
				alertType: "danger",
				alertText: "Please provide all values!",
			};
		case CLEAR_ALERT:
			return { ...state, showAlert: false, alertType: "", alertText: "" };
		case REGISTER_USER_BEGIN:
			return {
				...state,
				isLoading: true,
			};
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: action.payload.user,
				token: action.payload.token,
				userLocation: action.payload.location,
				showAlert: true,
				alertType: "success",
				alertText: "User Created! Redirecting...",
			};
		case REGISTER_USER_ERROR:
			return {
				...state,
				isLoading: false,
				showAlert: true,
				alertType: "danger",
				alertText: action.payload.msg,
			};
		case LOGIN_USER_BEGIN:
			return {
				...state,
				isLoading: true,
			};
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.payload.token,
				user: action.payload.user,
				userLocation: action.payload.location,
				showAlert: true,
				alertType: "success",
				alertText: "Login Successful! Redirecting...",
			};
		case LOGIN_USER_ERROR:
			return {
				...state,
				isLoading: false,
				showAlert: true,
				alertType: "danger",
				alertText: action.payload.msg,
			};
		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default auth_reducer;
