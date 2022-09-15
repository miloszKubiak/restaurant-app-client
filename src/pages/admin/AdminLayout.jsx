import React from "react";
import styled from "styled-components";
import {
	AdminNavbar,
	AdminBigSidebar,
	AdminSmallSidebar,
} from "../../components/AdminPanel";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
	return (
		<>
			<Wrapper>
				<AdminSmallSidebar />
				<AdminBigSidebar />
				<div>
					<AdminNavbar />
					<Container>
						<Outlet />
					</Container>
				</div>
			</Wrapper>
		</>
	);
};

export default AdminLayout;

const Container = styled.div`
	width: 90vw;
	padding: 2rem 0;
	margin: 0 auto;
`;

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: 992px) {
		grid-template-columns: auto 1fr;

		${Container} {
			width: 90%;
		}
	}
`;
