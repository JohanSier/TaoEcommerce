import React from "react";
import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import ProductSlider from "../components/ProductSlider";
import { products } from "../assets/Images";

const Homepage = () => {
  // Filtrar productos para mostrar solo los de Street Kings (categorías 2, 3 y 4 - Tees, Jerseys y Shorts)
  const streetKingsProducts = products.filter(product => 
    product.categories.some(category => [2, 3, 4].includes(category.id))
  );

  return (
    <>
      <Hero />
      <CategoriesList />
      <ProductSlider 
        products={streetKingsProducts} 
        title="NEW COLLECTION: STREET KINGS" 
      />
    </>
  );
};

export default Homepage;
