import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Navbar, Sidebar, PageHero, Footer, Loader } from "../components";

const MyStats = () => {
	const [showStats, setShowStats] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="My stats" />
			<Wrapper>
				{isLoading && <Loader />}
				my stats
			</Wrapper>
			<Footer />
		</>
	);
};

export default MyStats;

const Wrapper = styled.div`
	min-height: calc(100vh - (10vh + 10rem));
`;
