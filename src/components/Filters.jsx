import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { HiAdjustmentsHorizontal, HiXMark } from 'react-icons/hi2';
import { HiChevronDown } from 'react-icons/hi2';

const FiltersContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--white);
  border: 1px solid var(--greyE);
  padding: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
    
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--greyE);
`;

const HeaderTitle = styled.h2`
  font-size: 1rem;
  font-variation-settings: "wght" 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--secondary);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  border-bottom: 1px solid var(--greyE);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-variation-settings: "wght" 600;
  margin: 0;
`;

const ChevronIcon = styled(HiChevronDown)`
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const SectionContent = styled.div`
  padding: ${props => props.isOpen ? '0 1rem 1rem' : '0 1rem'};
  display: ${props => props.isOpen ? 'block' : 'none'};
  max-height: ${props => props.isOpen ? '300px' : '0'};
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
 
`;

const ProductTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--greyF);
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: 1px solid var(--greyE);
  cursor: pointer;
  appearance: none;
  background-color: var(--white);
  position: relative;
  border-radius: 3px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--secondary);
    background-color: var(--greyF);
  }

  &:checked {
    background-color: var(--secondary);
    border-color: var(--secondary);
  }

  &:checked::after {
    content: '✓';
    color: var(--white);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }
`;

const SortOption = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border-radius: 4px;

  &:hover {
    background: #f0f0f0;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--greyE);
`;

const FooterButton = styled.button`
  padding: 1rem;
  border: none;
  background: ${props => props.variant === 'dark' ? 'var(--secondary)' : 'var(--white)'};
  color: ${props => props.variant === 'dark' ? 'var(--white)' : 'var(--secondary)'};
  cursor: pointer;
  font-size: 0.9rem;
  font-variation-settings: "wght" 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.variant === 'dark' ? '#413F3F' : '#f9f9f9'};
    color: ${props => props.variant === 'dark' ? 'var(--white)' : 'var(--secondary)'};
  }

  &:first-child {
    border-right: 1px solid var(--greyE);
  }
`;

const ResultCount = styled.div`
  padding: 0.6rem 0;
  font-size: 0.8rem;
  color: var(--greyA);
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ActiveFilters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 6px 10px;
  background: #F5F5F5;
  border-radius: 6px;
  color: var(--secondary);
  font-size: 0.85rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #EBEBEB;
  }
`;

const ClearFilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
  background: none;
  color: var(--secondary);
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  margin-left: 4px;

  &:hover {
    opacity: 1;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8.5px 11px;
  border: 1px solid var(--greyE);
  border-radius: 8px;
  background: var(--white);
  color: var(--secondary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #F5F5F5;
  }
`;

const Filters = ({ 
  products, 
  selectedCategory,
  selectedSizes = [],
  selectedTypes = [],
  selectedSort: externalSelectedSort = 'Featured',
  onSizeChange,
  onTypeChange,
  onSortChange,
  onClearAll
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [localSelectedSizes, setLocalSelectedSizes] = useState(selectedSizes);
  const [localSelectedTypes, setLocalSelectedTypes] = useState(selectedTypes);
  const [localSelectedSort, setLocalSelectedSort] = useState(externalSelectedSort);

  useEffect(() => {
    setLocalSelectedSizes(selectedSizes);
    setLocalSelectedTypes(selectedTypes);
    setLocalSelectedSort(externalSelectedSort);
  }, [selectedSizes, selectedTypes, externalSelectedSort]);

  const productTypes = [
    'Tees',
    'Jerseys',
    'Shorts',
    'Sneakers',
    'Accessories'
  ];

  const sortOptions = [
    'Featured',
    'Best selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, low to high',
    'Price, high to low'
  ];

  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const shoeSizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

  const getSizesForCategory = () => {
    if (selectedCategory === 'sneakers') {
      return shoeSizes;
    }
    if (selectedCategory === 'accessories') {
      return [];
    }
    return clothingSizes;
  };

  const sizes = getSizesForCategory();

  const handleSortSelect = (option) => {
    setLocalSelectedSort(option);
    onSortChange?.(option);
    setIsSortOpen(false);
  };

  const handleTypeToggle = (type) => {
    let newTypes;
    if (selectedCategory !== 'all') {
      const categoryType = productTypes.find(t => 
        t.toLowerCase() === selectedCategory
      );
      newTypes = [categoryType];
    } else {
      newTypes = localSelectedTypes.includes(type)
        ? localSelectedTypes.filter(t => t !== type)
        : [...localSelectedTypes, type];
    }
    
    setLocalSelectedTypes(newTypes);
    onTypeChange?.(newTypes);
  };

  const handleSizeToggle = (size) => {
    const newSizes = localSelectedSizes.includes(size)
      ? localSelectedSizes.filter(s => s !== size)
      : [...localSelectedSizes, size];
    setLocalSelectedSizes(newSizes);
  };

  const handleApplyFilters = () => {
    onSizeChange?.(localSelectedSizes);
    onTypeChange?.(localSelectedTypes);
    setIsOpen(false);
  };

  const handleClearAll = () => {
    setLocalSelectedSizes([]);
    if (selectedCategory === 'all') {
      setLocalSelectedTypes([]);
    } else {
      const categoryType = productTypes.find(t => 
        t.toLowerCase() === selectedCategory
      );
      setLocalSelectedTypes(categoryType ? [categoryType] : []);
    }
    setLocalSelectedSort('Featured');
    onClearAll?.();
    setIsOpen(false);
  };

  const visibleProductTypes = selectedCategory === 'all'
    ? productTypes
    : productTypes.filter(type => type.toLowerCase() === selectedCategory);

  const getActiveFilters = () => {
    const filters = [];
    
    // Add sort filter if it's not Featured
    if (localSelectedSort !== 'Featured') {
      filters.push({
        type: 'sort',
        label: localSelectedSort
      });
    }
    
    // Add type filters
    if (localSelectedTypes.length > 0) {
      localSelectedTypes.forEach(type => {
        filters.push({
          type: 'type',
          label: type
        });
      });
    }
    
    // Add size filters
    if (localSelectedSizes.length > 0) {
      localSelectedSizes.forEach(size => {
        filters.push({
          type: 'size',
          label: size
        });
      });
    }
    
    return filters;
  };

  const handleRemoveFilter = (filter) => {
    switch (filter.type) {
      case 'sort':
        setLocalSelectedSort('Featured');
        onSortChange?.('Featured');
        break;
      case 'type':
        if (selectedCategory === 'all') {
          const newTypes = localSelectedTypes.filter(t => t !== filter.label);
          setLocalSelectedTypes(newTypes);
          onTypeChange?.(newTypes);
        }
        break;
      case 'size':
        const newSizes = localSelectedSizes.filter(s => s !== filter.label);
        setLocalSelectedSizes(newSizes);
        onSizeChange?.(newSizes);
        break;
      default:
        break;
    }
  };

  const activeFilters = getActiveFilters();

  return (
    <FilterGroup>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <FilterButton>
            <HiAdjustmentsHorizontal />
            Filters
          </FilterButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <FiltersContainer>
            <Header>
              <HeaderTitle>
                <HiAdjustmentsHorizontal />
                FILTERS
              </HeaderTitle>
              <CloseButton onClick={() => setIsOpen(false)}>
                <HiXMark size={20} />
              </CloseButton>
            </Header>

            <Section>
              <SectionHeader onClick={() => setIsSortOpen(!isSortOpen)}>
                <SectionTitle>SORT</SectionTitle>
                <ChevronIcon isOpen={isSortOpen} />
              </SectionHeader>
              <SectionContent isOpen={isSortOpen}>
                {sortOptions.map((option) => (
                  <SortOption 
                    key={option}
                    onClick={() => handleSortSelect(option)}
                  >
                    {localSelectedSort === option && '✓'} {option}
                  </SortOption>
                ))}
              </SectionContent>
            </Section>

            {selectedCategory === 'all' && (
              <Section>
                <SectionHeader onClick={() => setIsTypesOpen(!isTypesOpen)}>
                  <SectionTitle>PRODUCT TYPE</SectionTitle>
                  <ChevronIcon isOpen={isTypesOpen} />
                </SectionHeader>
                <SectionContent isOpen={isTypesOpen}>
                  <ProductTypeGrid>
                    {visibleProductTypes.map((type) => (
                      <CheckboxLabel key={type}>
                        <Checkbox
                          type="checkbox"
                          checked={localSelectedTypes.includes(type)}
                          onChange={() => handleTypeToggle(type)}
                        />
                        {type.toUpperCase()}
                      </CheckboxLabel>
                    ))}
                  </ProductTypeGrid>
                </SectionContent>
              </Section>
            )}

            {sizes.length > 0 && (
              <Section>
                <SectionHeader onClick={() => setIsSizesOpen(!isSizesOpen)}>
                  <SectionTitle>SIZE</SectionTitle>
                  <ChevronIcon isOpen={isSizesOpen} />
                </SectionHeader>
                <SectionContent isOpen={isSizesOpen}>
                  <ProductTypeGrid>
                    {sizes.map((size) => (
                      <CheckboxLabel key={size}>
                        <Checkbox
                          type="checkbox"
                          checked={localSelectedSizes.includes(size)}
                          onChange={() => handleSizeToggle(size)}
                        />
                        {size}
                      </CheckboxLabel>
                    ))}
                  </ProductTypeGrid>
                </SectionContent>
              </Section>
            )}

            <ResultCount>
              {products.length} PRODUCTS
            </ResultCount>

            <Footer>
              <FooterButton onClick={handleClearAll}>
                CLEAR ALL
              </FooterButton>
              <FooterButton variant="dark" onClick={handleApplyFilters}>
                APPLY FILTERS
              </FooterButton>
            </Footer>
          </FiltersContainer>
        </CollapsibleContent>
      </Collapsible>

      {activeFilters.length > 0 && (
        <ActiveFilters>
          {activeFilters.map((filter) => (
            <FilterTag key={`${filter.type}-${filter.label}`}>
              {filter.type === 'sort' ? (
                <>Sort: {filter.label}</>
              ) : filter.type === 'type' ? (
                <>Type: {filter.label}</>
              ) : (
                <>Size: {filter.label}</>
              )}
              <ClearFilterButton
                onClick={() => handleRemoveFilter(filter)}
                aria-label={`Remove ${filter.type} filter: ${filter.label}`}
              >
                <HiXMark size={14} />
              </ClearFilterButton>
            </FilterTag>
          ))}
        </ActiveFilters>
      )}
    </FilterGroup>
  );
};

export default Filters; 