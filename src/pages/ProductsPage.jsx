import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/Images";
import styled from "styled-components";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Container = styled.main`
  position: relative;
  text-align: center;
  width: 100%;
  background: var(--white);
  color: var(--secondary);
  padding: 1rem 2rem;
`;

const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  white-space: nowrap;
`;

const FilterAndResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 82px; // Change it from 84px to 82px because there was a tiny gap
  left: 0;
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
`;

const ProductsPage = () => {
  return (
    <Container>
      <Heading>All Products</Heading>

      <FilterAndResults>
        <FilterButton>
          Filters
          <HiOutlineAdjustmentsHorizontal />
        </FilterButton>
        <ResultsText>[{products.length} Results]</ResultsText>
      </FilterAndResults>

      <ProductCardsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productTitle={product.name}
            price={product.price}
            srcImage={product.images[0]}
            hoverImage={product.images[1]}
            productLink={`/product/${product.id}`}
          />
        ))}
      </ProductCardsContainer>
    </Container>
  );
};

export default ProductsPage;
