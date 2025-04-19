import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const SliderContainer = styled.section`
  width: 100%;
  background: var(--white);
  padding: 0 2rem;
  text-align: start;
  position: relative;

  .slick-track {
    display: flex;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 0;

    .slick-list {
      margin: 0;
      overflow: hidden;
    }

    .slick-slide {
      padding: 0 1rem;
    }
  }
`;

const TitlePlusLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  cursor: default;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--secondary);

  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`;

const Heading = styled.h5`
  white-space: nowrap;
  font-size: 2rem;
  font-variation-settings: "wght" 600;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (max-width: 420px) {
    font-size: 1.7rem;
    margin-bottom: 0;

  }

  @media (max-width: 365px) {
    font-size: 1.4rem;
    margin-bottom: 0;

  }
`;

const ArrowButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 800;
  transform: translateY(-50%);
  background: var(--white);
  border: 1px solid var(--greyE);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary);
    color: var(--white);
    border-color: var(--secondary);
  }

  @media (max-width: 500px) {
    margin-left: 40px;
    margin-right: 40px;
  }
    
  ${(props) => (props.$direction === "prev" ? "left: -20px;" : "right: -20px;")}

  &:focus {
    outline: none;
  }
`;

// Componentes personalizados para las flechas
const PrevArrow = ({ onClick }) => (
  <ArrowButton
    onClick={onClick}
    $direction="prev"
    role="button"
    aria-label="Previous Slide"
  >
    <HiChevronLeft size={24} />
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton
    onClick={onClick}
    $direction="next"
    role="button"
    aria-label="Next Slide"
  >
    <HiChevronRight size={24} />
  </ArrowButton>
);

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    draggable: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
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
        <StyledLink to="/products/street-kings">Discover More</StyledLink>
      </TitlePlusLink>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productTitle={product.name}
            price={product.price}
            srcImage={product.images[0]}
            hoverImage={product.images[1]}
            productLink={`/products/all/${product.id}`}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider;