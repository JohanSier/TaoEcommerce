import React from "react";
import styled from "styled-components";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
//import heroImage from "../assets/Images/hero-image.avif"; 

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.8rem 2rem;
  overflow: hidden;
  width: 100%;
  height: 40rem;

  position: relative; /* esta linea es para contener al overlay hecho con :after */
  margin-top: -5.3rem; /* usamos margin-top negativo en vez de top pues usando esta propiedad (margin) no deja el hueco que si dejaria top */
  left: 0;
  z-index: 1;

  background: url("https://bucketsquad.com/cdn/shop/files/BANNER_fb98d9a8-0326-408d-ab5c-0aa14040ee91.jpg?v=1739211443&width=2800") no-repeat;
  background-size: cover;
  background-position: center 30%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000003d;
    z-index: 500;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }

  @media screen and (max-width: 1000px){
    height: 30rem;
    flex-wrap: wrap;
    gap: 0;
  }

  @media screen and (max-width: 425px){
    width: 100%;
  }
`;

const Copys = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  z-index: 900;

  @media screen and (max-width: 1000px){
    width: 100%;
    flex-grow:1;
    margin-top: 10rem;
  }

    @media screen and (max-width: 600px){
      margin-top: 15rem;
    }

    @media screen and (max-width: 400px){
      margin-top: 12rem;
    }

`;

const Eyebrow = styled.div`
  background: var(--complementary);
  padding: 0.2rem 1rem;
  border-radius: 0.3125rem;
  font-size: 1rem;
`;

const HeroHeading = styled.h1`
  white-space: nowrap;
  font-size: 5rem;
  font-variation-settings: "wght" 600;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 600px){
    font-size: 2.8rem;
  }

  @media screen and (max-width: 425px){
    font-size: 2.5rem;
  }
`;

const Text = styled.div`
  white-space: nowrap;
  font-size: 1.1rem;
  font-variation-settings: "wght" 400;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 600px){
    font-size: .9rem;
  }

  @media screen and (max-width: 425px){
    text-wrap: wrap;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
  z-index: 999;

  @media screen and (max-width: 900px){
    margin-top:0;
    flex-grow:1;
  }
`;

const Button = styled(Link)`
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  border: 2px solid var(--secondary);
  border-radius: 8px;
  background: var(--white);
  padding: 8px 16px;
  color: var(--secondary);
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover {
    background: var(--secondary);
    color: var(--white);
    transition: background 0.5s ease, color 0.5s ease;
  }

  @media screen and (max-width: 445px){
    padding: 0.4rem 0.6rem;
    text-align: center;
  }
`;
//all: unset is a property that removes all styles from an element
const Hero = () => {
  return (
    <Container>
      <Copys>
        <Eyebrow>New Collection</Eyebrow>
        <HeroHeading>Street Kings</HeroHeading>
        <Text>Inspired by street basketball and its authenticity.</Text>
      </Copys>

      <ButtonsContainer>
        <Button to="/products/all">
          Shop All
          <HiArrowCircleRight
            aria-label="Next"
            title="Go to all products page"
            size={24}
          />
        </Button>

        <Button to="/products/street-kings">
          Shop New Collection
          <HiArrowCircleRight
            aria-label="Next"
            title="Go to next collection products page"
            size={24}
          />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Hero;
