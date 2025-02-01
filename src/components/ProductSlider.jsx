import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const SliderContainer = styled.div`
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem;
  cursor: -webkit-grab; 
  cursor: grab;

  &:active{
  cursor: -webkit-grabbing; 
  cursor: grabbing;
  }
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

  &.slick-next:before, &.slick-prev:before{
    color: black;
    font-size: 24px;

  }
`;

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust based on the number of items per view
    slidesToScroll: 1,
    prevArrow: (
        <ArrowButton role="button" aria-label="Next Slide" direction="prev"></ArrowButton>
      ),
      nextArrow: (
        <ArrowButton role="button" aria-label="Prev Slide" direction="next"></ArrowButton>
      ),
    responsive: [
      {
        breakpoint: 1360, // Tablet view
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1090, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productTitle={product.name}
            price={product.price}
            srcImage={product.imageSrc}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider;
