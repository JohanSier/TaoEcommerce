import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { products } from "../assets/Images";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Container = styled.main`
  position: relative;
  text-align: center;
  width: 100%;
  background: var(--white);
  color: var(--secondary);
  padding: 1rem 2rem;

   
  @media (max-width: 530px) and (min-width: 400px){
    padding: 1rem 0;
  }

`;

const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  white-space: nowrap;

  @media screen and (max-width: 570px){
    font-size: 3rem;
  }

  @media screen and (max-width: 350px){
    font-size: 2.5rem;
  }
`;

const FilterAndResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  left: 0;
  top: 82px; // Change it from 84px to 82px because there was a tiny gap
  background: var(--white);
  padding: 1rem;

  @media screen and (max-width: 375px){
    top: 69px;
  }
`;

const ResultsText = styled.p`
  font-size: .8rem;
`
const ProductCardsContainer = styled.section`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 660px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0.25rem;
  }

  @media screen and (max-width: 400px) {
    display:flex;
    flex-direction: column;
    place-items: center;
    gap: 2rem;

    }
`;

const ProductCardWrapper = styled.div`
  width: 280px;
  
  @media screen and (max-width: 660px) {
    width: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const NoProductsMessage = styled.div`
  padding: 2rem;
  text-align: center;
  background: var(--white);
  border-radius: 8px;
  margin: 2rem;
  border: 1px solid var(--greyE);
`;

const MessageTitle = styled.h3`
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-variation-settings: "wght" 600;
`;

const MessageText = styled.p`
  color: var(--greyA);
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const MessageAction = styled.button`
  background: var(--secondary);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: #413F3F;
  }
`;

const ProductsPage = () => {
  const { category } = useParams();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to map category name to category ID
  function getCategoryId(category) {
    const categories = {
      "all": 0,
      "tees": 2,
      "jerseys": 3,
      "shorts": 4,
      "sneakers": 5,
      "accessories": 6,
      "street-kings": 1
    };
    return categories[category] || null;
  }

  // Function to get category name from ID
  function getCategoryName(id) {
    switch (id) {
      case 1: return 'Street Kings';
      case 2: return 'Tees';
      case 3: return 'Jerseys';
      case 4: return 'Shorts';
      case 5: return 'Sneakers';
      case 6: return 'Accessories';
      default: return null;
    }
  }

  // Function to shuffle array randomly (for Featured sort)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Sort products based on selected option
  const sortProducts = (productsToSort, sortOption) => {
    const sorted = [...productsToSort];
    switch (sortOption) {
      case "Featured":
        return shuffleArray(sorted);
      case "Best selling":
        return sorted;
      case "Alphabetically, A-Z":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "Alphabetically, Z-A":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "Price, low to high":
        return sorted.sort((a, b) => a.price - b.price);
      case "Price, high to low":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  };

  // Initialize selectedTypes based on category
  useEffect(() => {
    // Siempre inicializamos los tipos como vacíos para evitar los breadcrumbs automáticos
    setSelectedTypes([]);
  }, [category]);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Step 1: Filter by URL category first
    if (category !== "all") {
      if (category === "street-kings") {
        // Para street-kings, mostramos TODOS los productos que tengan la categoría 1
        filtered = products.filter(product => 
          product.categories.some(cat => cat.id === 1)
        );
      } else {
        const categoryId = getCategoryId(category);
        filtered = filtered.filter(p => 
          p.categories.some(cat => cat.id === categoryId)
        );
      }
    }

    // Step 2: Apply product type filters ONLY if manually selected
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => {
        const productCategory = product.categories
          .map(cat => getCategoryName(cat.id))
          .filter(Boolean)[0];
        
        return selectedTypes.includes(productCategory);
      });
    }

    // Step 3: Apply size filters if any are selected
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.availableSizes.some(size => selectedSizes.includes(size))
      );
    }

    // Step 4: Apply sorting
    const sorted = sortProducts(filtered, selectedSort);
    setFilteredProducts(sorted);
  }, [category, selectedTypes, selectedSizes, selectedSort, products]);

  const handleSizeChange = (newSizes) => {
    setSelectedSizes(newSizes);
  };

  const handleSortChange = (newSort) => {
    setSelectedSort(newSort);
  };

  const handleTypeChange = (newTypes) => {
    setSelectedTypes(newTypes);
  };

  const handleClearAll = () => {
    setSelectedSizes([]);
    setSelectedTypes([]);
    setSelectedSort("Featured");
  };

  const validCategories = ["all", "tees", "jerseys", "shorts", "sneakers", "accessories", "street-kings"];

  if (!validCategories.includes(category)) {
    return <NotFound />;
  }

  return (
    <Container>
      <Heading>
        {category === "street-kings" 
          ? "Street Kings"
          : category !== "all" 
            ? `${category.charAt(0).toUpperCase()}${category.slice(1)}` 
            : "All Products"
        }
      </Heading>

      <FilterAndResults>
        <Filters
          products={products}
          filteredProducts={filteredProducts}
          selectedCategory={category}
          selectedSizes={selectedSizes}
          selectedTypes={selectedTypes}
          selectedSort={selectedSort}
          onSizeChange={handleSizeChange}
          onTypeChange={handleTypeChange}
          onSortChange={handleSortChange}
          onClearAll={handleClearAll}
        />
        <ResultsText>[{filteredProducts.length} Results]</ResultsText>
      </FilterAndResults>

      {filteredProducts.length === 0 ? (
        <NoProductsMessage>
          <MessageTitle>No products found</MessageTitle>
          <MessageText>
            We didn't find any products that match the selected filters.
            Try to adjust your search criteria or clear the filters.
          </MessageText>
          <MessageAction onClick={handleClearAll}>
            Clear Filters
          </MessageAction>
        </NoProductsMessage>
      ) : (
        <ProductCardsContainer>
          {filteredProducts.map((product) => (
            <ProductCardWrapper key={product.id}>
              <ProductCard
                productTitle={product.name}
                price={product.price}
                cloudinaryValue={product.cloudinaryValues[0]}
                hoverImage={product.cloudinaryValues[1]}
                productLink={`/products/${category || "all"}/${product.id}`}
              />
            </ProductCardWrapper>
          ))}
        </ProductCardsContainer>
      )}
    </Container>
  );
};

export default ProductsPage;
