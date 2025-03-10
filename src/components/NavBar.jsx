import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineSearch,
} from "react-icons/hi";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";
import { useSizeGuide } from "../context/SizeGuideContext";

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.isSizeGuideVisible ? -1 : 999)}; /* Cambia el z-index dinámicamente */
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: ${(props) =>
    !props.isHomepage || props.background ? "var(--secondary)" : "var(--transparent)"};
  border-top-left-radius: ${(props) => (props.background ? 0 : "1rem")};
  border-top-right-radius: ${(props) => (props.background ? 0 : "1rem")};
  transition: background 0.2s linear, z-index 0.2s ease-in-out;
`;

const CenterLogo = styled.div`
  flex-shrink: 0; /* Evita que el logo se redimensione */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  cursor: pointer;

  &.input-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 135px;
    border: 1.5px solid var(--white);
    border-radius: 8px;
    padding-right: 0;
    padding-left: 0.8rem;
  }
`;

const Input = styled.input`
  margin: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  outline: none;
  font-variation-settings: "wght" 500;
  cursor: pointer;
  color: var(--white); // This instruction is crucial to show the white text in other devices, otherwise it'll show it in black
  
  &::placeholder {
    font-size: 1.1rem;
    color: var(--white);
  }
`;

const LeftLinks = styled.ul`
  white-space: nowrap;
  list-style: none;
  display: flex;
  flex: 1;
  padding: 0;
  font-size: 0.8rem;
  font-variation-settings: "wght" 600;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 100%;
`;

const RightLinks = styled(LeftLinks)`
  gap: 0.5rem;
  display: flex;
  flex: 1; /* Take up equal space */
  align-items: center;
  justify-content: flex-end; /* Push content to the right */
  font-size: 1.5rem;
`;

const NavBar = () => {
  const location = useLocation(); // Get the current URL
  const isHomepage = location.pathname === "/"; 
  const [background, setBackground] = useState(false)
  const {isSizeGuideVisible} = useSizeGuide();
  
   useEffect(() => {
    const handleScroll = () => {
      setBackground(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <Wrapper background={background} isHomepage={isHomepage} isSizeGuideVisible={isSizeGuideVisible}>
      <LeftLinks>
        <StyledLink to="/products/all">SHOP ALL</StyledLink>
        <StyledLink to="/products/tees">TEES</StyledLink>
        <StyledLink to="/products/jerseys">JERSEYS</StyledLink>
        <StyledLink to="/products/shorts">SHORTS</StyledLink>
        <StyledLink to="/products/sneakers">SNEAKERS</StyledLink>
        <StyledLink to="/products/accessories">ACCESSORIES</StyledLink>
      </LeftLinks>

      <CenterLogo>
        <StyledLink to="/" onClick={scrollToTop}>
          <Logo src={LogoImg} alt="TaoHoops logo" />
        </StyledLink>
      </CenterLogo>

      <RightLinks>
        <StyledLink to="/" className="input-btn">
          <HiOutlineSearch aria-label="Search Icon" title="Search Item"/>
          <Input type="text" placeholder="Buscar" />
        </StyledLink>

        <StyledLink to="/log-in">
          <HiOutlineUser aria-label="Profile Icon" title="Go to profile page"/>
        </StyledLink>
        <StyledLink to="/">
          <HiOutlineShoppingBag aria-label="Cart Icon" title="Go to the cart page"/>
        </StyledLink>
      </RightLinks>
    </Wrapper>
  );
};

export default NavBar;
