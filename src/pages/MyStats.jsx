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
						{barChart ? "Area Chart" : "Bar Chart"}
					</SwitchButton>
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
	min-height: calc(100vh - (10vh + 10rem));
`;

const Container = styled.div``;

const SwitchButton = styled.button``;
