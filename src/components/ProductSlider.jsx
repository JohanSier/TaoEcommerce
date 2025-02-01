import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const SliderContainer = styled.section`
  width: 100%;
  background: var(--white);
  padding: 0 2rem;
  cursor: -webkit-grab; 
  cursor: grab;
  text-align: start;
  &:active{
  cursor: -webkit-grabbing; 
  cursor: grabbing;
  }
`;

const TitlePlusLink = styled.div`
    width; 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 3rem;
    cursor: default;
`

const Link = styled.a`
    text-decoration: underline;
    color: var(--secondary);
`

const Heading = styled.h5`
    text-wrap: nowrap;
    font-size: 2rem;
    font-variation-settings: "wght" 600;
    margin-top: 0;
    margin-bottom: 1rem;
`

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
        <TitlePlusLink>
            <Heading style={{color: 'black', alignSelf:"start"}}>Street Kings</Heading>
            <Link href="#">Discover More</Link>
        </TitlePlusLink>
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
