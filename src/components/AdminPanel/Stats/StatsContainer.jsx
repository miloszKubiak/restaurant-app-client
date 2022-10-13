import React, { useState, useEffect } from "react";
import StatsItem from "./StatsItem";
import authFetch from "../../../utils/axios";
import styled from "styled-components";
import { MdOutlineCancel, MdPaid } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { Loader } from "../../../components";

const StatsContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [stats, setStats] = useState({});
	const defaultStats = [
		{
			title: "orders canceled",
			count: stats.declined || 0,
			icon: <MdOutlineCancel />,
			color: "#c40525",
			background: "#f0768a",
		},
		{
			title: "orders sent",
			count: stats.sent || 0,
			icon: <FiSend />,
			color: "#d88f1b",
			background: "#eed3a8",
		},
		{
			title: "orders paid",
			count: stats.paid || 0,
			icon: <MdPaid />,
			color: "#0a945a",
			background: "#75dbb1",
		},
		{
			title: "orders delivered",
			count: stats.delivered || 0,
			icon: <TbTruckDelivery />,
			color: "#0920a5",
			background: "#687efd",
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
			{isLoading && <Loader />}
			<Container>
				{defaultStats.map((item, index) => {
					return <StatsItem key={index} {...item} />;
				})}
			</Container>
		</Wrapper>
	);
};

export default StatsContainer;

const Wrapper = styled.div`
	
`;

const Container = styled.div`
	display: grid;
	row-gap: 2rem;
	max-width: 1200px;
	margin: 0.5rem auto;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
	}

	@media (min-width: 1120px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 1rem;
	}
`;
