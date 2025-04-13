import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Images";
import styled from "styled-components";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Container = styled.main`
  position: relative;
  text-align: center;
  width: 100%;
  background: var(--white);
  color: var(--secondary);
  padding: 1rem 2rem;

   
  @media (max-width: 530px) and (min-width: 400px){
    padding: 1rem 0;
  }

`;

const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  white-space: nowrap;

  @media screen and (max-width: 570px){
    font-size: 3rem;
  }

  @media screen and (max-width: 350px){
    font-size: 2.5rem;
  }
`;

const FilterAndResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  left: 0;
  top: 82px; // Change it from 84px to 82px because there was a tiny gap
  background: var(--white);
  padding: 1rem;
`;

const FilterButton = styled.button`
  display: flex;
  font-size: 1rem;
  font-variation-settings: "wght" 500;
  white-space: nowrap;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--greyE);
  border-radius: 8px;
  background: var(--white);
  padding: 8.5px 11px;
  color: var(--secondary);
  cursor: pointer;
  transition: background 0.5s ease;

  &:hover {
    background: var(--greyD);
    transition: background 0.5s ease;
  }
`;

const ResultsText = styled.p`
  font-size: .8rem;
`
const ProductCardsContainer = styled.section`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 660px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0.25rem;
  }

  @media screen and (max-width: 400px) {
    display:flex;
    flex-direction: column;
    place-items: center;
    gap: 2rem;

    }
`;

const ProductCardWrapper = styled.div`
  width: 280px;
  
  @media screen and (max-width: 660px) {
    width: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const ProductsPage = () => {
  const {category} = useParams();

  // Function to map category name to category ID
  function getCategoryId(category) {
    const categories = {
      "all": 0,
      "street-kings": 1,
      "tees": 2,
      "jerseys": 3,
      "shorts": 4,
      "sneakers": 5,
      "accessories": 6,
    };
    return categories[category] || null;
  }

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Filter and shuffle products if showing all
  const filteredProducts = category !== "all"
    ? products.filter(p => p.categories.some(cat => cat.id === getCategoryId(category)))
    : shuffleArray(products);

  const validCategories = ["all", "tees", "jerseys", "shorts", "sneakers", "accessories", "street-kings"];

  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  return (
    <Container>
      <Heading>{category !== "all" ? `${category.charAt(0).toUpperCase()}${category.slice(1)} ` : "All Products"}</Heading>

      <FilterAndResults>
        <FilterButton>
          Filters
          <HiOutlineAdjustmentsHorizontal />
        </FilterButton>
        <ResultsText>[{filteredProducts.length} Results]</ResultsText>
      </FilterAndResults>

      <ProductCardsContainer>
        {filteredProducts.map((product) => (
          <ProductCardWrapper key={product.id}>
            <ProductCard
              productTitle={product.name}
              price={product.price}
              srcImage={product.images[0]}
              hoverImage={product.images[1]}
              productLink={`/products/${category || "all"}/${product.id}`}
            />
          </ProductCardWrapper>
        ))}
      </ProductCardsContainer>
    </Container>
  );
};

export default ProductsPage;
