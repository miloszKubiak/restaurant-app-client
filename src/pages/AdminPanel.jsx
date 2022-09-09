import React from "react";
import styled from "styled-components";
import { PageHero, Navbar, Sidebar, Footer } from "../components";

const AdminPanel = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="Admin Panel" />
			<Wrapper>
				<h1>Admin Panel</h1>
			</Wrapper>
			<Footer />
		</>
	);
};

export default AdminPanel;

const Wrapper = styled.div`
	min-height: calc(100vh - (10vh + 10rem));
`;
