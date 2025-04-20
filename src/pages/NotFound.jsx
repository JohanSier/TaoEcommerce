import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from  "../assets/Images/not-found-image.webp"
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 87vh;

  background: url('${notFoundImage}') no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;

  color: var(--secondary);
  padding: 1rem 2rem;

  @media (max-width: 800px) {
    height: 75vh;
  }
`
const HeadingAndLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  color: var(--white);
`
const Heading = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
`

const LinksContainer = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  background: var(--white);
  padding: 8px 16px;
  color: var(--secondary);
  transition: background 0.5s ease, color 0.5s ease;

  &:hover {
    background: var(--secondary);
    color: var(--white);
    transition: background 0.5s ease, color 0.5s ease;
  }

`

const NotFound = () => {
  return (
    <Container>
      <HeadingAndLinks>
        <Heading>We’re sorry, but the page you’re looking for doesn’t exist. Try one of the links below instead:</Heading>
        <LinksContainer>
          <StyledLink to="/products/all">SHOP ALL</StyledLink>
          <StyledLink to="/products/tees">TEES</StyledLink>
          <StyledLink to="/products/jerseys">JERSEYS</StyledLink>
          <StyledLink to="/products/shorts">SHORTS</StyledLink>
          <StyledLink to="/products/sneakers">SNEAKERS</StyledLink>
          <StyledLink to="/products/accessories">ACCESSORIES</StyledLink>
        </LinksContainer>
      </HeadingAndLinks>
    </Container>
  );
};

export default NotFound;
