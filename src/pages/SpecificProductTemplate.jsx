import React from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { products } from "../assets/Images";
import styled from "styled-components";
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

const StyledImage = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center;
  flex-grow: 1;
`;

const MayAlsoLike = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justiy-content: center;
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
    bottom: -10px; /* Adjust spacing */
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
  justify-content: center; /* This ensures remaining items stay centered */
  gap: 0; /* Removes unnecessary spacing */
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
    return <h1>Producto no encontrado</h1>; // Manejo de error si el producto no existe
  }

  return (
    <Container>
      <Wrapper>
        <Grid>
          {products[id - 1].images.map((image, index) => (
            <StyledImage key={index} src={image} alt={product.name} />
          ))}
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
            .filter((p) => p.id !== parseInt(id)) // Exclude the current product
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
