import React from "react";
import styled from "styled-components";

const User = ({ _id, name, lastName, email, location }) => {
	return (
		<Wrapper>
			<h5>
				<span>ID:</span> {_id}
			</h5>
			<p>
				<span>name:</span> {name}
			</p>
			<p>
				<span>last name:</span> {lastName}
			</p>
			<p>
				<span>email:</span> {email}
			</p>
			<p>
				<span>location:</span> {location}
			</p>
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

	span {
		font-weight: bold;
		text-transform: capitalize;
	}
`;
