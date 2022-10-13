import React from "react";
import styled from "styled-components";

const StatsItem = ({ title, icon, count, color, background }) => {
	return (
		<Wrapper background={background} color={color}>
			<header>
				<span>{count}</span>
				<div>{icon}</div>
			</header>
			<h5>{title}</h5>
		</Wrapper>
	);
};

export default StatsItem;

const Wrapper = styled.div`
	background: ${props => props.background};
	color: ${props => props.color};
`;
