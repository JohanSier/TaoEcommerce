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

const ProductDetails = ({ title, price, sizes, description }) => {
    const { id } = useParams();
    const { isSizeGuideVisible, setIsSizeGuideVisible } = useSizeGuide();
    const { addItemToCart } = useCart(); // Get addItemToCart function from context
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(prevSize => (prevSize === size ? null : size));
    };

    const handleAddToCart = () => {
        if (!selectedSize) return; // Prevent adding without a size

        const product = {
            id,
            title,
            price,
            size: selectedSize,
            quantity: 1
        };

        addItemToCart(product);
    };

    useEffect(() => {
        setSelectedSize(null);
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