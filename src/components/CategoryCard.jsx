import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
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

const Icon = styled(HiArrowCircleRight)`
  position: relative;
  opacity: 0;
  right: 45px;
  z-index: 100;
  transition: opacity 0.5s ease-in-out, right 0.5s ease-in-out;
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Skeleton = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
`;

const BackgroundImage = styled(AdvancedImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.5s ease;
`;

/* Wrapper to contain the scrolling text */
const ShopNow = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Ensures no extra text outside */
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.5s ease;
`;

/* Animation for infinite scrolling */
const movingLetters = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

/* Inner scrolling text container */
const ShopNowTextWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 2rem;
  animation: ${movingLetters} 10s linear infinite;
`;

/* Individual moving text */
const ShopNowText = styled.p`
  font-size: 4rem;
  font-variation-settings: "wght" 800;
  color: white;
  text-wrap: nowrap;
`;

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  text-decoration: none;
  min-width: 26rem;
  height: 38rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 2rem;
  margin: 0;
  cursor: pointer;

  &:hover ${BackgroundImage} {
    transform: scale(1.1);
  }

  &:hover ${Icon} {
    opacity: 1;
    right: 0;
  }

  &:hover ${ShopNow} {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    z-index: 2;
  }

  @media screen and (max-width: 900px){
    min-width: 20rem;
    height: 28rem;

  }

  @media screen and (max-width: 570px){
    height: 25rem;
  }

  @media screen and (max-width: 370px){
    height: 20rem;
    min-width: 15rem;
  }
`;

const Heading = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-variation-settings: "wght" 600;
  color: white;
  position: relative;
  z-index: 3;
`;

const CategoryCard = ({ title, link, cloudinaryValue}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Card to={link} draggable="false">
      <ShopNow>
        <ShopNowTextWrapper>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
          <ShopNowText>SHOP NOW</ShopNowText>
        </ShopNowTextWrapper>
      </ShopNow>
      <>
      {!imageLoaded && <Skeleton/>}
      <BackgroundImage
      cldImg={cloudinary.image(`${cloudinaryValue}`).format("webp").quality("auto").resize(scale(1000))}
      alt={`${title} Category Image`}
      draggable="false"
      data-loaded={imageLoaded}
      onLoad={() => setImageLoaded(true)}
      />
      
      </>
      <Heading>{title}</Heading>
      <Icon color="white" size={32} />
    </Card>
  );
};

export default CategoryCard;
