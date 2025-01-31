import React from "react";
import styled from "styled-components";
import { HiArrowCircleRight } from "react-icons/hi";
import heroImage from "../assets/Images/hero-image.avif";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.8rem 2rem;

  width: 100%;
  height: 43.75rem;
  
  position: relative;
  top: -5.625rem;
  left: 0;
  z-index: 1;

  background: url("${heroImage}") no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000004d;
    z-index: 500;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
`;

const Copys = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    z-index: 900;
`;

const Eyebrow = styled.div`
    background: var(--complementary);
    padding: 0.2rem 1rem;
    border-radius: 0.3125rem;
    font-size: 1rem;
`;

const HeroHeading = styled.h1`
    text-wrap: nowrap;
    font-size: 5rem;
    font-variation-settings: "wght" 600;
    margin: 0;
`;

const Text = styled.div`
    text-wrap: nowrap;
    font-size: 1.1rem;
    font-variation-settings: "wght" 400;
    margin: 0;

`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    position: relative;
    z-index: 900;
`;

const Button = styled.a`
    display: flex;
    text-wrap: nowrap;
    align-items: center;
    text-decoration: none;
    gap: 5px;
    border: 2px solid var(--secondary);
    border-radius: 8px;
    background: var(--white);
    padding: 8px 16px;
    color: var(--secondary);
    cursor: pointer;
`;
//all: unset is a property that removes all styles from an element
const Hero = () => {
  return (
    <Container>
      <Copys>
        <Eyebrow>New Collection</Eyebrow>
        <HeroHeading>Street  Kings</HeroHeading>
        <Text>Inspired by street basketball and its authenticity.</Text>
      </Copys>

      <ButtonsContainer>
        <Button href="#">
          Shop All
          <HiArrowCircleRight size={24}/>
        </Button>

        <Button href="#">
          Shop New Collection
          <HiArrowCircleRight size={24}/>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Hero;
