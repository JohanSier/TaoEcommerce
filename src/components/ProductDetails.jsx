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
  position: relative;
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

const CtaWrapper = styled.div`
  position: relative;
  width: 100%;

  &:hover .tooltip {
    display: block;
  }

  &:hover .right-tooltip {
    display: block;
  }
`;

const Tooltip = styled.div`
  display: none;
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1c1c1e;
  color: var(--white);
  padding: 10px 16px;
  border-radius: 8px;
  z-index: 10;
  width: max-content;
  max-width: 200px;
  text-align: left;
  font-size: 0.9rem;
  opacity: 1;
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: #1c1c1e transparent transparent transparent;
  }
`;

const RightTooltip = styled(Tooltip)`
  top: -10px;
  left: 210px:
  transform: translateX(0);

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    margin-left: -112px;
    border-width: 6px;
    border-style: solid;
    border-color: #1c1c1e transparent transparent transparent;
    transform: rotate(90deg);
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
  display: inline-grid;
  grid-template-columns: 2.1rem 2rem 2rem;
  align-items: center;
  margin-bottom: 1.3rem;
  border: 1px solid var(--greyE);
  border-radius: 20px;
  width: 6.8rem;
  height: 2.5rem;
  opacity: ${props => props.disabled ? 0.6 : 1};
  transition: opacity 0.2s ease-in-out;
  
  &:hover .tooltip {
    display: block;
  }
`;

const QuantityButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 1.5rem;
  color: ${props => props.disabled ? 'var(--greyA)' : 'var(--secondary)'};
  text-align: center;
  padding: 0;
  margin: 0;
  transition: color 0.2s ease-in-out;
`;

const QuantityText = styled.span`
  font-size: 1.1rem;
  font-variation-settings: "wght" 500;
  text-align: center;
  width: 100%;
  color: ${props => props.disabled ? 'var(--greyA)' : 'var(--secondary)'};
  transition: color 0.2s ease-in-out;
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

            <CtaWrapper>
              {!selectedSize && (
                <RightTooltip className="right-tooltip">
                  Select a size to increase quantity
                </RightTooltip>
              )}
            
            <QuantityContainer disabled={!selectedSize}>
                <QuantityButton 
                  onClick={() => handleQuantityChange(-1)} 
                  disabled={!selectedSize}
                >
                  -
                </QuantityButton>
                <QuantityText disabled={!selectedSize}>{quantity}</QuantityText>
                <QuantityButton 
                  onClick={() => handleQuantityChange(1)} 
                  disabled={!selectedSize}
                >
                  +
                </QuantityButton>
            </QuantityContainer>
            </CtaWrapper>

            <CtaWrapper>
              {!selectedSize && (
                <Tooltip className="tooltip">
                  Select a size to add to cart
                </Tooltip>
              )}
              <Cta 
                onClick={handleAddToCart} 
                disabled={!selectedSize}
              >
                ADD TO CART
              </Cta>
            </CtaWrapper>

            <ExtraInfo>
                <HiOutlineTruck size={20} />
                Shipping calculated at checkout
            </ExtraInfo>

            <AccordionDemo description={description} />
        </Container>
    );
};

export default ProductDetails;