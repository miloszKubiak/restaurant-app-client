import React, { useState, useEffect } from "react";
import authFetch from "../../utils/axios";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

const ChartsContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [monthlyOrders, setMonthlyOrders] = useState([]);
	const [barChart, setBarChart] = useState(true);

	const showCharts = async () => {
		try {
			setIsLoading(true);
			const { data } = await authFetch.get("/orders/all-stats");
			setMonthlyOrders(data.monthlyOrders);
			console.log(data.monthlyOrders);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		showCharts();
	}, []);

	return (
		<Wrapper>
			{isLoading && <Loader />}
			<Container>
				<SwitchButton
					type="button"
					onClick={() => setBarChart(!barChart)}
				>
					{barChart ? "Change to Area Chart" : "Change to Bar Chart"}
				</SwitchButton>
				<h4>All orders relative to months</h4>
				{barChart ? (
					<BarChart data={monthlyOrders} />
				) : (
					<AreaChart data={monthlyOrders} />
				)}
			</Container>
		</Wrapper>
	);
};

export default ChartsContainer;

const Wrapper = styled.div`
	
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h4 {
		text-align: center;
		font-size: 2rem;
		margin-top: 2rem;
		letter-spacing: var(--spacing);
		color: var(--grey-1);
	}
`;

const SwitchButton = styled.button`
  margin: 2rem 0;
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

