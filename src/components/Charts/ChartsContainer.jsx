import React, { useState, useEffect } from "react";
import authFetch from "../../utils/axios";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const ChartsContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [monthlyOrders, setMonthlyOrders] = useState([]);

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
			{monthlyOrders.map((item, index) => {
				return (
					<div key={index}>
						<p>{item.date}</p>
						<p>{item.count}</p>
					</div>
				);
			})}
		</Wrapper>
	);
};

export default ChartsContainer;

const Wrapper = styled.div``;
