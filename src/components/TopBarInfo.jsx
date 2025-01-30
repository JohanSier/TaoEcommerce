import React from 'react'
import styled, { css } from 'styled-components'

const TopBarInfo = () => {

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        background: var(--primary);
        margin: 0;

    `
    const Text = styled.p`
        font-size: .9rem;
        color: var(--white);
    `

  return (
    <Wrapper>
      <Text>Free shipping on all orders over $100 – Hoop in style, hassle-free.</Text>
    </Wrapper>
  )
}

export default TopBarInfo;
