import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import authFetch from "../../utils/axios";

const Stats = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [stats, setStats] = useState({});

	const showStats = async () => {
		try {
			setIsLoading(true);
			const { data } = await authFetch.get("/orders/all-stats");
			setStats(data.defaultStats);
			console.log(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		showStats();
	}, []);

	return <Wrapper>stats</Wrapper>;
};

export default Stats;

const Wrapper = styled.div``;
