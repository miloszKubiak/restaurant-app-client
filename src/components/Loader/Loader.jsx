import React from "react";
import styled from "styled-components";

const Loader = () => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
};

export default Loader;

const Container = styled.div`
	position: relative;
	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const Spinner = styled.div`
	height: 7rem;
	width: 7rem;
	margin: 0 auto;
	margin-top: 12rem;
	border-radius: 50%;
	border: 0.5rem solid var(--primary-2);
	border-top-color: var(--primary-1);
	animation: spinner 0.6s linear infinite;
`;
