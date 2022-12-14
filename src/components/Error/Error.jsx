import React from "react";
import styled from "styled-components";

const Error = () => {
	return (
		<Wrapper>
			<h2>there was an error...</h2>
		</Wrapper>
	);
};

export default Error;

const Wrapper = styled.div`
	/* min-height: calc(100vh - 10rem); */
	padding: 5rem 0;
	width: 90vw;
	margin: 0 auto;
	max-width: var(--max-width);
	display: flex;
	justify-content: center;
	align-items: center;

	h2 {
		text-transform: capitalize;
		text-align: center;
	}
`;
