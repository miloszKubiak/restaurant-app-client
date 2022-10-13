import React, { useState, useEffect } from "react";
import StatsItem from "./StatsItem";
import authFetch from "../../../utils/axios";
import styled from "styled-components";
import { MdOutlineCancel, MdPaid } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { Loader } from "../../../components"

const StatsContainer = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [stats, setStats] = useState({});
	const defaultStats = [
		{
			title: "orders canceled",
			count: stats.declined || 0,
			icon: <MdOutlineCancel />,
			color: "red",
			background: "#bb6d6d",
		},
		{
			title: "orders sent",
			count: stats.sent || 0,
			icon: <GrSend />,
			color: "yellow",
			background: "#e6e35f",
		},
		{
			title: "orders paid",
			count: stats.paid || 0,
			icon: <MdPaid />,
			color: "green",
			background: "#68c24d",
		},
		{
			title: "orders delivered",
			count: stats.delivered || 0,
			icon: <TbTruckDelivery />,
			color: "blue",
			background: "#4d4be0",
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
			{defaultStats.map((item, index) => {
				return <StatsItem key={index} {...item} />;
			})}
		</Wrapper>
	);
};

export default StatsContainer;

const Wrapper = styled.div`
	background: #000;
	padding: .5rem;
`;
