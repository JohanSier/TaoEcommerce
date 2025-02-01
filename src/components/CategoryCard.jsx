import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import styled from "styled-components";

const Icon = styled(HiArrowCircleRight)`
  position: relative;
  opacity: 0;
  right: 45px;
  z-index: 100;
  transition: opacity 0.5s ease-in-out, right 0.5s ease-in-out;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Lo pone detrás del contenido */
  transition: transform .5s ease;

`;

const Card = styled.a`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: space-between;
  text-decoration: none;

  width: 32rem;
  height: 38rem;
  border-radius: 1rem;
  overflow: hidden; /* Previene desbordes */
  padding: 2rem;
  margin: 0;
  cursor: pointer;

  &:hover ${BackgroundImage}{
    transform: scale(1.1);
  }

  &:hover ${Icon} {
    opacity: 1;
    right: 0;
  }


  /* Gradiente en la parte inferior */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%; /* Ajusta la altura del gradiente */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    z-index: 2;
  }
`;




const Heading = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-variation-settings: "wght" 600;
  color: white;
  position: relative;
  z-index: 500;
  /* Asegura que el texto esté sobre el gradiente */
`;

const CategoryCard = ({ title, imageSrc }) => {
  return (
    <Card href="#" draggable="false" >
      <BackgroundImage src={imageSrc} alt={`${title} Category Image`} draggable="false"/>
      <Heading>{title}</Heading>
      <Icon color="white" size={32} />
    </Card>
  );
};

export default CategoryCard;
