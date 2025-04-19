import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: var(--transparent);
  margin: 0;
  position: relative;
  z-index: -1;
  text-align: center;
`;
const Text = styled.p`
  font-size: 0.9rem;
  color: var(--white);

  @media screen and (max-width: 375px){
    margin-bottom: 1.7rem;
  } 
`;

const TopBarInfo = () => {
  return (
    <Wrapper>
      <Text>
        Free shipping on all orders over $100 – Hoop in style, hassle-free.
      </Text>
    </Wrapper>
  );
};

export default TopBarInfo;
