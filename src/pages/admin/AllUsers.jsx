import React from "react";
import { useEffect, useState } from "react";
import authFetch from "../../utils/axios";
import { Loader } from "../../components";

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getUsers = async () => {
		try {
			const response = await authFetch.get(`/users`);
			setUsers(response.data.users);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};	

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			All Users
			{isLoading && <Loader />}
			{users.map((user) => {
				return (
					<li key={user._id}>
						<p>user id: {user._id}</p>
						<p>name: {user.name}</p>
						<p>last name: {user.lastName}</p>
						<p>email: {user.email}</p>
						<p>location: {user.location}</p>
					</li>
				);
			})}
		</div>
	);
};

export default AllUsers;
