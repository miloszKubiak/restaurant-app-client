import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import NavLinks from "../NavLinks/NavLinks";

const AdminBigSidebar = () => {
  return <Wrapper>
    <div>
      <Content>
        <Header>
          <Logo src={logo} alt="company logo" />
        </Header>
        <NavLinks />
      </Content>
    </div>
  </Wrapper>;
};

export default AdminBigSidebar;

const Content = styled.div``;
const Header = styled.header``;
const Logo = styled.img``;

const Wrapper = styled.aside`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;