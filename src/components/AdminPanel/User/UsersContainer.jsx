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
			<Title>
				{users.length} user{users.length > 1 && "s"} found
			</Title>
			<Center>
				{users.map((user) => {
					return <User key={user._id} {...user} />;
				})}
			</Center>
		</Wrapper>
	);
};

export default UsersContainer;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0.5rem auto;
`;

const Title = styled.h3`
	padding: 0.5rem;
	margin: 0 auto;
	margin-bottom: 2rem;
	text-align: center;
	letter-spacing: var(--spacing);
	background: var(--primary-7);
	width: 12rem;
	border-radius: 0.2rem;
	color: var(--primary-2);
`;

const Center = styled.div`
	display: grid;
	margin: 0 auto;
	width: 100%;
	max-width: 1170px;
	gap: 0.5rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1170px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
