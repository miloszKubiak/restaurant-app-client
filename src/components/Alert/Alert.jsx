import React from 'react'
import styled from 'styled-components'

const Alert = () => {
  return (
    <AlertContainer>alert goes here..</AlertContainer>
  )
}

export default Alert

const AlertContainer = styled.div`
  width: 100%;
	padding: 0.4rem 0.8rem;
	margin: 1rem auto;
	border-color: transparent;
	border-radius: .3rem;
	text-align: center;
	letter-spacing: var(--spacing);
	color: var(--primary-6);
	background: var(--primary-4);
  font-weight: bold;
`;