import React from "react";
import {categories} from "../assets/Images"; // Import the array
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  background: var(--white);
  padding:3rem 2rem;
`;

const CategoriesList = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          imageSrc={category.src}
        />
      ))}
    </Container>
  );
};

export default CategoriesList;
