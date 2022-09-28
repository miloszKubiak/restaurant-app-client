import React from 'react'
import styled from 'styled-components'

const CardInfo = ({ title, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default CardInfo

const Wrapper = styled.div`
	display: flex;
	padding: 0.2rem 0;
	color: var(--primary-2);
`;

const Title = styled.span`
  font-weight: bold;
`;

const Text = styled.span`
	margin-left: 0.2rem;
`;