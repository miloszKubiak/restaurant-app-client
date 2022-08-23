import axios from "axios";

///axios custom instance
export const authFetch = axios.create({
	baseURL: "/api/v1",
});


