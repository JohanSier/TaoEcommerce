import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineX } from "react-icons/hi";
import styled, { keyframes } from 'styled-components';
import { useSizeGuide } from '../context/SizeGuideContext';
import { products } from '../assets/Images';
import measureImage from '../assets/Images/Measure.png'

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const fadeIn = keyframes`
  from { background: rgba(30, 30, 30, 0); }
  to { background: rgba(30, 30, 30, 0.95); }
`;

const fadeOut = keyframes`
  from { background: rgba(30, 30, 30, 0.95); }
  to { background: rgba(30, 30, 30, 0); }
`;

// 🔹 Wrapper para el fondo oscuro
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1100;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.4s ease-in-out forwards;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.4s, visibility 0.4s;
  display: flex;
  justify-content: flex-end; /* Asegura que el SizeComponent esté a la derecha */
`;

// 🔹 Componente lateral (Size Guide)
const SizeComponent = styled.article`
    display: flex;
    flex-direction: column;
  color: var(--secondary);
  width: 25%;
  z-index: 1101;
  padding: 0 1.5rem 2rem 1.5rem;
  height: 100vh;
  background: var(--white);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow-y: auto;  
  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 0.4s ease-in-out forwards;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.4s, visibility 0.4s;
`;

const FixedTitle = styled.div`
  display: flex;
  width: 100%;
  background: var(--white);
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  right: 0;
  border-bottom: 1px solid var(--greyD);
`;

const TitleComponent = styled.h1`
  font-size: 1rem;
  font-variation-settings: "wght" 500;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-variation-settings: "wght" 500;
`;

const SelectSize = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  margin: auto;
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
    border: 1px solid var(--secondary);
  }

  &.selected {
    background: var(--complementary);
    color: var(--white);
    border: 1px solid var(--complementary);  
    &:hover {
      border: 1px solid var(--secondary);
    }
  }
`;

const Measures = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
`

const TitleAndButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MeasurementUnitBtn = styled.div`
    width: 5rem;
    height: 2rem;
    display: flex;
    border: .5px solid var(--greyE);
    padding: 2px 4px;
    border-radius: 50px;
    background: #e9e9e9;
`
const CentimetersBtn = styled.button`
    color: var(--secondary);
    width: 50%;
    height: 100%;
    border: none;
    background: var(--white);
    border-radius: 50px;
    font-size: 0.8rem;
    font-variation-settings: "wght" 600;
    cursor: pointer;

    &.active{
    background: var(--white);
    }
`
const InchesBtn = styled(CentimetersBtn)`
    background: transparent;
    font-variation-settings: "wght" 500;
    &:hover{
    opacity: .5;
    }
`

const ProductMeasures = styled.div`
    display: flex;    
    margin-top: 0.7rem;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`
const Subheading = styled.h3`
    flex: 1;
    display: block;
    font-size: .75rem;
    font-variation-settings: "wght" 500;
    color: #929292;
`
const Measure = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Feature = styled.p`
    margin:0;
    font-size: .85rem;
    font-variation-settings: "wght" 500;
`
const Value = styled(Feature)`
    font-variation-settings: "wght" 600;
`

const BodyMeasures = styled(ProductMeasures)`
    margin-top: 2rem;
`
const HowToMeasure = styled.div`
    display: flex;
    flex-direction: column;
`
const MeasureTitle = styled(Title)`
    margin-top: 2rem;
    font-size: 1.3rem;
    font-variation-settings: "wght" 600;
`
const Image = styled.img`
    margin-top: -15px;
    width: 100%;
    height: 35rem;
    object-fit: cover;
    object-position: center;
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--secondary);
    margin-top: 1rem;
`

const Description = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--secondary);
`
const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    background: var(--secondary);
    color: var(--white);
    border-radius: 100%;
    height: 20px;
    font-size: .75rem;
    font-variation-settings: "wght" 600;
`
const HowToMeasureTitle = styled(Title)`
    font-size: 1rem;
    font-variation-settings: "wght" 600;
`

const Text = styled.p`
    margin:0;
    font-size: 0.9rem;
    font-variation-settings: "wght" 400;
    color: var(--greyA)
`
const SizeGuide = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const { isSizeGuideVisible, setIsSizeGuideVisible } = useSizeGuide();
  const [shouldRender, setShouldRender] = useState(isSizeGuideVisible);
  const sizeGuideRef = useRef(null);

  // 🔹 Detectar clics fuera del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sizeGuideRef.current && !sizeGuideRef.current.contains(event.target)) {
        setIsSizeGuideVisible(false);
      }
    };

    if (isSizeGuideVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSizeGuideVisible]);

  if (!shouldRender) return null; // Evita que el componente se renderice cuando está oculto

  return (
    <Wrapper isVisible={isSizeGuideVisible}>
      <SizeComponent ref={sizeGuideRef} isVisible={isSizeGuideVisible}>
        <FixedTitle>
          <TitleComponent>Size Guide</TitleComponent>
          <HiOutlineX size={24} onClick={() => setIsSizeGuideVisible(false)} style={{ cursor: "pointer", position: "absolute", right: "0" }} />
        </FixedTitle>

        <SelectSize>
          <Title>Choose Size</Title>
          <Sizes>
            {sizes.map((size, index) => (
              <SizeButton
                key={index}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(prevSize => (prevSize === size ? null : size))}
              >
                {size}
              </SizeButton>
            ))}
          </Sizes>
        </SelectSize>

        <Measures>
            <TitleAndButton>
                <Title>Measures</Title>
                <MeasurementUnitBtn>
                    <CentimetersBtn onClick={()=> console.log(products[1].measuresCm.XS.chestWidth)}>CM</CentimetersBtn>
                    <InchesBtn>IN</InchesBtn>
                </MeasurementUnitBtn>
            </TitleAndButton>

            <ProductMeasures>
                <Subheading>PRODUCT</Subheading>
                <Measure>
                    <Feature>Chest Width</Feature>
                    <Value>43.94</Value>
                </Measure>

                <Measure>
                    <Feature>Sleeve length</Feature>
                    <Value>56.9</Value>
                </Measure>

                <Measure>
                    <Feature>Item length</Feature>
                    <Value>66.04</Value>
                </Measure>
            </ProductMeasures>

            <BodyMeasures>
                <Subheading>BODY</Subheading>
                <Measure>
                    <Feature>Chest Outline</Feature>
                    <Value>87.12</Value>
                </Measure>

                <Measure>
                    <Feature>Hips Outline</Feature>
                    <Value>87.12</Value>
                </Measure>
            </BodyMeasures>

            <HowToMeasure>
                <MeasureTitle>How to measure yourself?</MeasureTitle>
                <Image src={measureImage} alt="Imagen de como obtener su talla"/>
                
                <DescriptionContainer>
                  <Description>
                      <Circle>1</Circle>
                      <HowToMeasureTitle>Chest Outline</HowToMeasureTitle>
                  </Description>
                      <Text>To measure your chest circumference, use a measuring tape and place it around the widest part of your chest.</Text>
                </DescriptionContainer>

                <DescriptionContainer>
                <Description>
                    <Circle>2</Circle>
                    <HowToMeasureTitle>Hip Outline</HowToMeasureTitle>
                </Description>
                    <Text>Put your feet together and place the measuring tape around the widest part of your hip circumference.</Text>
                </DescriptionContainer>
                 
            </HowToMeasure>
        </Measures> 
      </SizeComponent>
    </Wrapper>
  );
};

export default SizeGuide;