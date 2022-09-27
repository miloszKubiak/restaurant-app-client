import axios from "axios";

///axios custom instance
const token = localStorage.getItem("token");

const authFetch = axios.create({
	baseURL: "/api/v1",
});
//request interceptor
authFetch.interceptors.request.use(
	(config) => {
		config.headers.common["Authorization"] = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
//response interceptor
authFetch.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			console.log("AUTH ERROR");
		}
		return Promise.reject(error);
	}
);

export default authFetch;
