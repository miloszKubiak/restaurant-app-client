import React, { useState, useEffect } from "react";
import styled from "styled-components";
import authFetch from "../../../utils/axios";
import Loader from "../../Loader/Loader";
import User from "./User";

const UsersContainer = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getUsers = async () => {
		try {
			setIsLoading(true);
			const response = await authFetch.get("/users");
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
		<Wrapper>
			{isLoading && <Loader />}
			{users.map((user) => {
				return <User key={user._id} {...user} />;
			})}
		</Wrapper>
	);
};

export default UsersContainer;

const Wrapper = styled.div``;
