import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import authFetch from "../../utils/axios";

const Stats = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [stats, setStats] = useState([]);
	const defaultStats = [
		{
			title: "orders declined",
			count: stats.declined || 0,
			color: "red",
			background: "#fff",
		},
		{
			title: "orders sent",
			count: stats.sent || 0,
			color: "yellow",
			background: "#fff",
		},
		{
			title: "orders paid",
			count: stats.paid || 0,
			color: "green",
			background: "#fff",
		},
		{
			title: "orders delivered",
			count: stats.delivered || 0,
			color: "blue",
			background: "#fff",
		},
	];

	const showStats = async () => {
		try {
			setIsLoading(true);
			const { data } = await authFetch.get("/orders/all-stats");
			setStats(data.defaultStats);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(stats);
	useEffect(() => {
		showStats();
	}, []);

	return (
		<Wrapper>
			stats
			{defaultStats.map((item, index) => {
				return (
					<li key={index}>
						<p>{item.title}</p>
						<p>{item.count}</p>
					</li>
				)
			})}
		</Wrapper>
	);
};

export default Stats;

const Wrapper = styled.div`
	li {
		margin: 1rem;
		background: red
	}
`;
