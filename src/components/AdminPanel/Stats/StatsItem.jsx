import React from "react";
import styled from "styled-components";

const StatsItem = ({ title, icon, count, color, background }) => {
	return (
		<Wrapper background={background} color={color}>
			<header>
				<span>{count}</span>
				<div className="icon">{icon}</div>
			</header>
			<h5>{title}</h5>
		</Wrapper>
	);
};

export default StatsItem;

const Wrapper = styled.div`
	background: ${(props) => props.background};
	color: ${(props) => props.color};
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 0.2rem;

	header {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 1rem 0;

		span {
			font-size: 2rem;
		}

		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
		}
	}

	h5 {
		text-align: center;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		font-size: 1.3rem;
	}
`;
