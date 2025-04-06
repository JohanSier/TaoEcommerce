import React from "react";
import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import ProductSlider from "../components/ProductSlider";
import { products } from "../assets/Images";

const Homepage = () => {
  // Filtrar productos para mostrar solo los de Street Kings (categoría 1)
  const streetKingsProducts = products.filter(product => 
    product.categories.some(category => category.id === 1)
  );

  return (
    <>
      <Hero />
      <CategoriesList />
      <ProductSlider products={streetKingsProducts} />
    </>
  );
};

export default Homepage;
