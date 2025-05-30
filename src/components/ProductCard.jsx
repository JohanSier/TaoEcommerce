import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "deocx31u2",
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET
  }
});

const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 24rem;
  border: 1px solid var(--greyE);
  outline: none;
  box-sizing: border-box;

  @media (max-width: 650px) {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 660px) {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 6px;
  }
  
  @media (max-width: 470px){
    width: 95%;
    height: auto;
  }
`;

const ProductImage = styled(AdvancedImage)`
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  height: 18.31rem;
  loading: lazy;
  
  @media (max-width: 660px) {
    height: 15rem;
  }
  
  @media (max-width: 440px) {
    height: 12rem;
  }
  
  @media (max-width: 400px) {
    height: 14rem;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Skeleton = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 3s infinite;
  border-radius: 8px;
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
  height: 5.69rem; /* Fixed height for product info section */
  box-sizing: border-box;

  @media (max-width: 650px) {
    padding: 0.75rem 1rem;
  }
  
  @media (max-width: 660px) {
    padding: 0.75rem;
    height: auto;
    min-height: 4rem;
  }
  
  @media (max-width: 470px) and (min-width: 401px) {
    padding: 0.5rem;
    min-height: 3.5rem;
  }
`;

const ProductTitle = styled.h5`
  font-size: 1.1rem;
  font-variation-settings: "wght" 600;
  text-align: left;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  
  @media (max-width: 660px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 470px) and (min-width: 401px) {
    font-size: 0.8rem;
  }
`;

const Price = styled.p`
  font-size: 0.8rem;
  margin: 0;
  
  @media (max-width: 660px) {
    font-size: 0.75rem;
  }
  
  @media (max-width: 470px) and (min-width: 401px) {
    font-size: 0.7rem;
  }
`;

const ProductCard = ({ productTitle, price, cloudinaryValue, hoverImage, productLink}) => {
  const [isHover, setIsHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  

  return (
    <Container to={productLink}>
      <>
      {!imageLoaded && <Skeleton/>}
      <ProductImage
      cldImg={!isHover ? cloudinary.image(`${cloudinaryValue}`).format("webp").quality("auto").resize(scale(550)) 
      :cloudinary.image(`${hoverImage}`).format("webp").quality("auto").resize(scale(450))}
      alt={`${productTitle} Product Image`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        draggable="false"
        data-loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />
      </>
      <ProductInfo>
        <ProductTitle>{productTitle}</ProductTitle>
        <Price>${price}</Price>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;