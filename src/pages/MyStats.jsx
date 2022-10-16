import React from "react";
import { useState } from "react";
import styled from "styled-components";
import authFetch from "../utils/axios";
import {
	Navbar,
	Sidebar,
	PageHero,
	Footer,
	Loader,
	BarChart,
	AreaChart,
} from "../components";
import { useEffect } from "react";

const MyStats = () => {
	const [myStats, setMyStats] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [barChart, setBarChart] = useState(true);

	const showMyStats = async () => {
		try {
			setIsLoading(true);
			const { data } = await authFetch("orders/my-stats");
			setMyStats(data.myMonthlyOrders);
			console.log(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		showMyStats();
	}, []);

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="My stats" />
			<Wrapper>
				{isLoading && <Loader />}
				<Container>
					<SwitchButton
						type="button"
						onClick={() => setBarChart(!barChart)}
					>
						{barChart
							? "Change to Area Chart"
							: "Change to Bar Chart"}
					</SwitchButton>
					<Title>Number of orders relative to months</Title>
					{barChart ? (
						<BarChart data={myStats} />
					) : (
						<AreaChart data={myStats} />
					)}
				</Container>
			</Wrapper>
			<Footer />
		</>
	);
};

export default MyStats;

const Wrapper = styled.div`
	min-height: calc(100vh - (10vh + 12rem));
	max-width: 90vw;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SwitchButton = styled.button`
	margin: 1rem 0;
	padding: .3rem .5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.2rem;
	text-transform: capitalize;
	text-align: center;
	letter-spacing: var(--spacing);
	font-size: 1rem;
	font-weight: bold;
	font-family: inherit;
	border: none;
	color: var(--primary-2);
	transition: var(--transition);
	background: var(--primary-3);
	cursor: pointer;

	&:hover {
		background: var(--primary-1);
		color: var(--primary-3);
	}
`;

const Title = styled.h3`
	color: var(--grey-1);
`;
