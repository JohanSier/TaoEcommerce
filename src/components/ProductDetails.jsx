import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { HiOutlineTruck } from "react-icons/hi2";
import { PiRulerBold } from "react-icons/pi";
import AccordionDemo from './AccordionDemo';
import SizeGuide from './SizeGuide';
import { useSizeGuide } from '../context/SizeGuideContext';
import { useCart } from '../context/CartContext'; // Import Cart Context

const Container = styled.article`
  position: sticky;
  top: 4rem;
  max-height: 80vh;
  width: 30%;
  background: var(--white);
  padding: 3rem;

  @media (max-width: 800px) {
    width: 100%;
    padding: 2rem;
  }
`;

const ProductTitle = styled.h1`
    font-size: 1.6rem;
    font-variation-settings: "wght" 500;
    margin-bottom:0 ;
`;

const Price = styled.p`
    font-variation-settings: "wght" 600;
    font-size: 1.1rem;
    margin-top: 6px;
    margin-bottom: 1rem;
`;

const SizeGuideComponent = styled.a`
    all:unset;
    text-decoration: underline;
    display: inline-flex;
    gap: 5px;
    font-variation-settings: "wght" 500;
    font-size: 1rem;
    margin-bottom: 1.4rem;
    color: var(--secondary);
    cursor: pointer;
`;

const Sizes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .8rem;
    margin-bottom: 1.3rem;
`;

const SizeButton = styled.button`
    font-size: .9rem;
    padding: 8px 14px;
    border-radius: 5px;
    cursor: pointer;
    background: var(--white);
    border: 1px solid var(--greyE);
    color: var(--secondary);

    &:hover {
        border:1px solid var(--secondary);
    }

    &.selected {
        background: var(--complementary);
        color: var(--white);
        border: 1px solid var(--complementary);  
          
        &:hover {
            border:1px solid var(--secondary);
        }
    }
`;

const Cta = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background: var(--secondary);
    font-size: 1rem;
    padding: 1.6rem;
    font-variation-settings: "wght" 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: var(--white);
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.75;
    }

    &:disabled {
        background: var(--greyE);
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

const ExtraInfo = styled.p`
    display: flex;
    align-items: center;
    font-variation-settings: "wght" 500;
    font-size: .8rem;
    margin-top: 12px;
    gap: 8px;
`;

const Separator = styled.div`
    width: 65%;
    height: 2px;
    background: #e6e6e6;
    margin-bottom: 1rem;
`;

const QuantityContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.3rem;
  border: 1px solid var(--greyE);
  border-radius: 20px;
  width: 6.6rem;
  height: 2.5rem;
  padding: 0 2rem;
`;

const QuantityButton = styled.button`
  width: 2.4rem;
  border-radius: 5px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--secondary);
`;

const QuantityText = styled.span`
  font-size: 1.1rem;
  font-variation-settings: "wght" 500;
`;

const ProductDetails = ({ title, price, sizes, description, thumbnailImage }) => {
    const { id } = useParams();
    const { isSizeGuideVisible, setIsSizeGuideVisible } = useSizeGuide();
    const { addItemToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleSizeClick = (size) => {
        setSelectedSize(prevSize => (prevSize === size ? null : size));
    };

    const handleQuantityChange = (increment) => {
        setQuantity(prev => {
            const newQuantity = prev + increment;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    const handleAddToCart = () => {
        if (!selectedSize) return;

        const product = {
            id,
            title,
            price,
            size: selectedSize,
            quantity,
            thumbnailImage
        };

        addItemToCart(product);
        setQuantity(1); // Reset quantity after adding to cart
    };

    useEffect(() => {
        setSelectedSize(null);
        setQuantity(1);
    }, [id]);

    return (
        <Container>
            <ProductTitle>{title}</ProductTitle>
            <Price>$ {price}</Price>

            <Separator />

            <SizeGuideComponent onClick={() => setIsSizeGuideVisible(true)}>
                <PiRulerBold size={20} />
                Size Guide
            </SizeGuideComponent>
            {isSizeGuideVisible && <SizeGuide />}

            <Sizes>
                {sizes.map((size, index) => (
                    <SizeButton
                        key={index}
                        className={selectedSize === size ? "selected" : ""}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </SizeButton>
                ))}
            </Sizes>

            <QuantityContainer>
                <QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
                <QuantityText>{quantity}</QuantityText>
                <QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
            </QuantityContainer>

            <Cta onClick={handleAddToCart} disabled={!selectedSize}>
                ADD TO CART
            </Cta>

            <ExtraInfo>
                <HiOutlineTruck size={20} />
                Shipping calculated at checkout
            </ExtraInfo>

            <AccordionDemo description={description} />
        </Container>
    );
};

export default ProductDetails;