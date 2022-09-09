import React from "react";
import styled from "styled-components";
import {
	FeaturedMeals,
	Hero,
	Contact,
	Services,
	Navbar,
	Sidebar,
	Footer,
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
			<Footer />
		</>
	);
};

export default Home;

const Wrapper = styled.div`
	background: var(--primary-2);
`;
