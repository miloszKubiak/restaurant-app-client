import React from "react";
import styled from "styled-components";

const User = ({ _id, name, lastName, email, location }) => {
	return (
		<Wrapper>
			<h5>ID: {_id}</h5>
			<p>name: {name}</p>
			<p>last name: {lastName}</p>
			<p>email: {email}</p>
			<p>location: {location}</p>
		</Wrapper>
	);
};

export default User;

const Wrapper = styled.div`
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 0.3rem;
	background: var(--primary-3);
	color: var(--primary-2);
`;
