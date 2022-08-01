import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const Checkout = () => {
  return (
    <>
      <PageHero title="Checkout" />
      <Wrapper>
        <h1>checkout</h1>
      </Wrapper>
    </>
  )
}

export default Checkout

const Wrapper = styled.div`
	min-height: calc(100vh - (20vh + 10rem));
`;