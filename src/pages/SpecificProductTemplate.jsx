import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { products } from "../assets/Images";
import styled, { keyframes } from "styled-components";
import { useParams } from "react-router";

const Container = styled.main`
  position: relative;
  width: 100%;
  background: var(--white);
  color: var(--secondary);
  padding: 0 2rem;
`;

const Wrapper = styled.section`
  display: flex;
  position: relative;
`;

const Grid = styled.div`
  width: 70%;
  flex-grow: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

/* Skeleton Loader Animation */
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
`;

/* Styled Image with fade-in effect */
const StyledImage = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center;
  flex-grow: 1;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const MayAlsoLike = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h2`
  position: relative;
  font-size: 1.5rem;
  font-variation-settings: "wght" 600;
  margin-bottom: 2.4rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 150px;
    height: 5px;
    background: var(--secondary);
    transform: translateX(-50%);
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  margin-top: 1rem;
`;

const StyledProductDetails = styled(ProductDetails)`
  width: 100%;
`;

const SpecificProductTemplate = () => {
  const productsMayLike = products.slice(0, 5);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Grid>
          {products[id - 1].images.map((image, index) => {
            return (
              <div key={index} style={{ position: "relative" }}>
                {!imageLoaded && <Skeleton />}{" "}
                {/* Skeleton shown while loading */}
                <StyledImage
                  src={image}
                  alt={product.name}
                  loaded={imageLoaded}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            );
          })}
        </Grid>

        <StyledProductDetails
          title={product.name}
          price={product.price}
          sizes={product.availableSizes}
        />
      </Wrapper>

      <MayAlsoLike>
        <Heading>You may also like</Heading>
        <Products>
          {productsMayLike
            .filter((p) => p.id !== parseInt(id))
            .map((product) => (
              <ProductCard
                style={{ flexGrow: "2" }}
                key={product.id}
                productTitle={product.name}
                price={product.price}
                srcImage={product.images[0]}
                hoverImage={product.images[1]}
                productLink={`/product/${product.id}`}
              />
            ))}
        </Products>
      </MayAlsoLike>
    </Container>
  );
};

export default SpecificProductTemplate;
