import React from "react";
import { categories } from "../assets/Images"; // Import the array
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  background: var(--white);
  width: 100%;
  justify-content: center;
  font-variation-settings: "wght" 600;
  `;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 1rem;
  gap: 0.5rem;
`;

const Heading = styled.h2`
position: relative;
margin-top: 2.2rem;
  color: var(--secondary);
  font-size: 3rem;
  margin-bottom: .8rem;
  white-space: nowrap;

  &::after{
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 150px;
    height: 5px;
    background: var(--complementary);
    transform: translateX(-50%);
  }

  @media screen and (max-width: 570px){
    font-size: 2rem;
  }
`;

const CategoriesList = () => {
  return (
    <Container>
      <Heading>Our Categories</Heading>
      <Content>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          link={category.link}
          cloudinaryValue={category.cloudinaryValue}
        />
      ))}
      </Content>
    </Container>
  );
};

export default CategoriesList;
