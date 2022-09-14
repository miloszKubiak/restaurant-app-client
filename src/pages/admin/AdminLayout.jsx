import React from "react";
import styled from "styled-components";
import {  } from "../../components";

const AdminLayout = () => {
	return (
		<>
			<Wrapper>
				<h1>Admin Panel</h1>
			</Wrapper>
		</>
	);
};

export default AdminLayout;

const Wrapper = styled.div`
	min-height: calc(100vh - (10vh + 10rem));
`;
