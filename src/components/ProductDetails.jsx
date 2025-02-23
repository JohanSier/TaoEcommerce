import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // Importamos useParams
import styled from 'styled-components';
import { HiOutlineTruck } from "react-icons/hi2";
import { PiRulerBold } from "react-icons/pi";

const Container = styled.article`
  position: sticky;
  top: 4rem;
  max-height: 65vh; /* Prevents overflow */
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
    margin-bottom: 1.8rem;
`;

const SizeGuideComponent = styled.a`
    all:unset;
    text-decoration: underline;
    display: flex;
    gap: 5px;
    font-variation-settings: "wght" 500;
    font-size: 1rem;
    margin-bottom: 1.4rem;
    color: var(--secondary);
    cursor: pointer;
`;

const Sizes = styled.div`
    display: flex;
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

    &.selected {
        background: var(--complementary);
        color: var(--white);
        border: 1px solid var(--complementary);    
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
    border:none;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.75;
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

const ProductDetails = ({ title, price, sizes }) => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(prevSize => (prevSize === size ? null : size));
    };

    // Resetea la selección de talla cuando cambia el ID del producto
    useEffect(() => {
        setSelectedSize(null);
    }, [id]);

    return (
        <Container>
            <ProductTitle>{title}</ProductTitle>
            <Price>$ {price}</Price>

            <SizeGuideComponent>
                <PiRulerBold size={20} />
                Size Guide
            </SizeGuideComponent>

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

            <Cta>ADD TO CART</Cta>
            <ExtraInfo>
                <HiOutlineTruck size={20} />
                Shipping calculated at checkout
            </ExtraInfo>
        </Container>
    );
};

export default ProductDetails;