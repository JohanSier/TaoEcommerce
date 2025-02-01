import React from "react";
import styled from "styled-components";

const Container = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 15.6rem;
  height: 100%;
  border: 1px solid var(--greyE);
  border-radius: 8px;
  outline: none;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 18.31rem;
  object-fit: cover;
  border-radius: inherit;

`;

const ProductInfo = styled.div`
color: var(--secondary);
    text-wrap: nowrap;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  align-items: start;
  padding: 1.25rem 1.5rem;
`;

const ProductTitle = styled.h5`
  font-size: 1.1rem;
  font-variation-settings: "wght" 600;
  margin: 0;
`;

const Price = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const ProductCard = ({ productTitle, price, srcImage }) => {
  return (
    <Container href="#">
      <ProductImage src={srcImage} />
      <ProductInfo>
        <ProductTitle>{productTitle}</ProductTitle>
        <Price>${price}</Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
