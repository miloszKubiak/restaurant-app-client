import React, { useEffect } from "react";
import styled from "styled-components";
import {
	FeaturedMeals,
	Hero,
	Contact,
	Services,
	Navbar,
	Sidebar,
} from "../components";

const Home = () => {

	return (
		<>
			<Navbar />
			<Sidebar />
			<Wrapper>
				<Hero />
				<FeaturedMeals />
				<Services />
				<Contact />
			</Wrapper>
		</>
	);
};

export default Home;

const Wrapper = styled.div`
	background: var(--primary-2);
`;
