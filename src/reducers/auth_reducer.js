import { DISPLAY_ALERT, CLEAR_ALERT } from "../actions";

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

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
	}
};

export default auth_reducer;
