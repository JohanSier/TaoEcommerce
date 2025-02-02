import React from "react";
import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import ProductSlider from "../components/ProductSlider";
import { products } from "../assets/Images";

const Homepage = () => {
  return (
    <>
      <Hero />
      <CategoriesList />
      <ProductSlider products={products} />
    </>
  );
};

export default Homepage;
