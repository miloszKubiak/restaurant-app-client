import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa"

const Meal = ({ id, name, image, price }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={image} ale={name} />
        <Info to={`/meals/${id}`}>
          <FaInfoCircle />
        </Info>
      </Container>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </Wrapper>
  )
}

export default Meal

const Wrapper = styled.article``;
const Container = styled.div``;
const Image = styled.img``;
const Info = styled(Link)``;
const Footer = styled.footer``;
const Name = styled.h5``;
const Price = styled.p``;