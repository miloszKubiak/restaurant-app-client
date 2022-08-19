import React from "react";
import styled from "styled-components";
import { PageHero, Navbar, Sidebar } from "../components";

const AdminPanel = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="Admin Panel" />
			<Wrapper>
				<h1>Admin Panel</h1>
			</Wrapper>
		</>
	);
};

export default AdminPanel;

const Wrapper = styled.div`
	min-height: calc(100vh - (20vh + 10rem));
`;
