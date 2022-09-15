import React from "react";
import styled from "styled-components";

const AdminBigSidebar = () => {
	return <Wrapper>AdminBigSidebar</Wrapper>;
};

export default AdminBigSidebar;

const Wrapper = styled.aside`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;