import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const SliderContainer = styled.section`
  width: 100%;
  background: var(--white);
  padding: 0 2rem;
  text-align: start;
`;

const TitlePlusLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  cursor: default;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--secondary);
`;

const Heading = styled.h5`
  white-space: nowrap;
  font-size: 2rem;
  font-variation-settings: "wght" 600;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ArrowButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 800;
  transform: translateY(-50%);

  ${(props) => (props.direction === "prev" ? "left: 10px;" : "right: 10px;")}

  &:focus {
    outline: none;
  }

  &.slick-next:before,
  &.slick-prev:before {
    color: black;
    font-size: 24px;
  }
`;

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    draggable: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <ArrowButton
        role="button"
        aria-label="Next Slide"
        direction="prev"
      ></ArrowButton>
    ),
    nextArrow: (
      <ArrowButton
        role="button"
        aria-label="Prev Slide"
        direction="next"
      ></ArrowButton>
    ), 
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <TitlePlusLink>
        <Heading style={{ color: "black", alignSelf: "start" }}>
          Street Kings
        </Heading>
        <StyledLink to="/products">Discover More</StyledLink>
      </TitlePlusLink>
      <Slider {...settings}>
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
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider;