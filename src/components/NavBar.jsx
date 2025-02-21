import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router";

import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineSearch,
} from "react-icons/hi";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: ${(props)=> (!props.isHomepage || props.background ? "var(--secondary)" : "var(--transparent)")};  
  border-top-left-radius: ${(props)=> (props.background ? 0 : "1rem")};
  border-top-right-radius: ${(props)=> (props.background ? 0 : "1rem")};
  transition: background .2s linear;
`;

const Spacer = styled.div`
  flex: 1;
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
  const location = useLocation(); // 🔥 Get the current URL
  const isHomepage = location.pathname === "/"; 
  const [background, setBackground] = useState(false)
  
   // ✅ Corrected Scroll Effect
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
    <Wrapper background={background} isHomepage={isHomepage}>
      <LeftLinks>
        <StyledLink to="/products">SHOP ALL</StyledLink>
        <StyledLink to="/products">MEN'S</StyledLink> 
        <StyledLink to="/products">WOMEN'S</StyledLink>
        <StyledLink to="/products">KIDS</StyledLink>
        <StyledLink to="/products">ACCESORIES</StyledLink>
      </LeftLinks>

      <Spacer />
      <CenterLogo>
        <StyledLink to="/" onClick={scrollToTop}>
          <Logo src={LogoImg} alt="TaoHoops logo" />
        </StyledLink>
      </CenterLogo>
      <Spacer />

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
