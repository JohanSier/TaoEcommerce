import React, { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100%;
  border: 1px solid var(--greyE);
  outline: none;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 18.31rem;
  object-fit: cover;
  border-radius: inherit;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const ProductInfo = styled.div`
  background: var(--white);
  color: var(--secondary);
  white-space: nowrap;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  align-items: start;
  padding: 1.25rem 1.5rem;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
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

const ProductCard = ({ productTitle, price, srcImage, productLink, hoverImage}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container to={productLink}>
      <ProductImage
        src={isHover ? hoverImage : srcImage} // Disable hover effect when dragging
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <ProductInfo>
        <ProductTitle>{productTitle}</ProductTitle>
        <Price>${price}</Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;