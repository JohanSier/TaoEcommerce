import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { HiOutlineSearch, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/Images';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(5, 3, 4, 0.95); /* Usar var(--secondary) con opacidad */
  z-index: 1200;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  margin-top: 4rem;
  animation: ${slideDown} 0.4s ease-in-out;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchTitle = styled.h2`
  color: var(--white);
  font-size: 1.5rem;
  font-variation-settings: "wght" 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid var(--white);
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--white);
  font-size: 1.5rem;
  padding: 0.5rem 0;
  padding-left: 2.2rem;
  
  &::placeholder {
    color: var(--greyD);
  }

  @media screen and (max-width: 360px){
  padding-left: 1.6rem;
        &::placeholder {
        font-size: 1.2rem;
  }
`;

const SearchIcon = styled(HiOutlineSearch)`
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  color: var(--white);

  @media screen and (max-width: 360px){
    font-size: 1.2rem;
    top: 15px;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  
  /* Estilo para la scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--complementary);
    border-radius: 4px;
  }
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ResultImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.h3`
  color: var(--white);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-variation-settings: "wght" 600;
`;

const ResultPrice = styled.p`
  color: var(--complementary);
  margin: 0;
  font-size: 0.9rem;
`;

const ResultCategory = styled.span`
  color: var(--greyD);
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const NoResults = styled.div`
  color: var(--white);
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

const PopularSearches = styled.div`
  margin-top: 2rem;
`;

const PopularTitle = styled.h3`
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-variation-settings: "wght" 500;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: .9rem;
  gap: 0.8rem;
`;

const Tag = styled.button`
  background: transparent;
  border: 1px solid var(--white);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--white);
    color: var(--secondary);
  }
`;

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Categorías populares predefinidas
  const popularSearches = ['Jerseys', 'Tees', 'Shorts', 'Sneakers', 'Accessories'];
  
  // Función para resetear el estado de búsqueda
  const resetSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  // Función personalizada para cerrar y limpiar
  const handleClose = () => {
    onClose();
    resetSearch();
  };

  // Enfocar el input cuando se abre el overlay
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    
    // Resetear búsqueda cuando se abre de nuevo el overlay
    if (!isOpen) {
      resetSearch();
    }
  }, [isOpen]);

  // Evitar scroll cuando el overlay está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Hacer la búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filtrar productos basados en el término de búsqueda
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.categories.some(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setSearchResults(filteredProducts.slice(0, 6)); // Limitar a 6 resultados
  }, [searchTerm]);

  // Manejar la selección de un resultado
  const handleResultClick = (product) => {
    // Determinar la categoría principal para la URL
    const mainCategory = product.categories[0]?.name.toLowerCase() || 'all';
    navigate(`/products/${mainCategory}/${product.id}`);
    handleClose(); // Usar handleClose en lugar de onClose para también resetear la búsqueda
  };

  // Manejar la búsqueda por tag
  const handleTagClick = (tag) => {
    setSearchTerm(tag);
  };

  // Detectar la tecla Escape para cerrar el overlay
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose(); // Usar handleClose en lugar de onClose
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <OverlayContainer>
      <SearchContainer>
        <SearchHeader>
          <SearchTitle>Buscar productos</SearchTitle>
          <CloseButton onClick={handleClose}>
            <HiX />
          </CloseButton>
        </SearchHeader>
        
        <InputWrapper>
          <SearchIcon />
          <SearchInput 
            ref={inputRef}
            type="text" 
            placeholder="¿Qué estás buscando?" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputWrapper>
        
        {searchResults.length > 0 ? (
          <ResultsContainer>
            {searchResults.map(product => (
              <ResultItem 
                key={product.id} 
                onClick={() => handleResultClick(product)}
              >
                <ResultImage src={product.images[0]} alt={product.name} />
                <ResultInfo>
                  <ResultTitle>
                    {product.name}
                    <ResultCategory>
                      {product.categories[0]?.name}
                    </ResultCategory>
                  </ResultTitle>
                  <ResultPrice>${product.price}</ResultPrice>
                </ResultInfo>
              </ResultItem>
            ))}
          </ResultsContainer>
        ) : searchTerm.trim() !== '' ? (
          <NoResults>No se encontraron resultados para "{searchTerm}"</NoResults>
        ) : (
          <PopularSearches>
            <PopularTitle>Búsquedas populares</PopularTitle>
            <TagsContainer>
              {popularSearches.map((tag, index) => (
                <Tag key={index} onClick={() => handleTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
          </PopularSearches>
        )}
      </SearchContainer>
    </OverlayContainer>
  );
};

export default SearchOverlay; 