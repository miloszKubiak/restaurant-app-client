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
			<h4>monthly orders</h4>
			<Container>
				<SwitchButton type="button" onClick={() => setBarChart(!barChart)}>
					{barChart ? "Area Chart" : "Bar Chart"}
				</SwitchButton>
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
	h4 {
		text-transform: capitalize;
		text-align: center;
		font-size: 2rem;
		margin-top: 3rem;
		letter-spacing: var(--spacing);
	}
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SwitchButton = styled.button`
  margin: 2rem auto;
`;
