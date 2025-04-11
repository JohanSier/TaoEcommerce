import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineSearch,
  HiMenu,
  HiX,
} from "react-icons/hi";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";
import { useSizeGuide } from "../context/SizeGuideContext";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999; /* Mantener un z-index constante */
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: ${(props) =>
    !props.$isHomepage || props.$background
      ? "var(--secondary)"
      : "var(--transparent)"};
  border-top-left-radius: ${(props) => (props.$background ? 0 : "1rem")};
  border-top-right-radius: ${(props) => (props.$background ? 0 : "1rem")};
  transition: background 0.2s linear;
`;

const CenterLogo = styled.div`
  flex-shrink: 0;
  position: absolute;
  left: 50%;
  margin-top: 5px;
  transform: translateX(-50%);
  width: 140px;
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

    @media (max-width: 850px) {
      width: auto;
      border: none;
      margin-top: -5px;
    }
  }
`;

const CartLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  top:-3px;
`;

const CartItemsCounter = styled.div`
visiblity: hidden;
position: absolute;
width: 14px;
height: 14px;
font-size: 0.6rem;
color: var(--secondary);
background: var(--white);
top: -2px;
right: -4px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
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
  color: var(--white);

  &::placeholder {
    font-size: 1.1rem;
    color: var(--white);
  }

  @media (max-width: 850px) {
    display: none;
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

  @media (max-width: 1250px) {
    display: none;
  }
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

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100vh;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.2rem;
  font-variation-settings: "wght" 600;
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 1250px) {
    display: block;
  }
`;

const NavBar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [background, setBackground] = useState(false);
  const { isSizeGuideVisible } = useSizeGuide();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setBackground(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Wrapper
        $background={background}
        $isHomepage={isHomepage}
        $isSizeGuideVisible={isSizeGuideVisible}
      >
        <BurgerButton onClick={() => setMobileMenuOpen(true)}>
          <HiMenu />
        </BurgerButton>

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
            <HiOutlineSearch aria-label="Search Icon" title="Search Item" />
            <Input type="text" placeholder="Buscar" />
          </StyledLink>

          <StyledLink to="/log-in">
            <HiOutlineUser aria-label="Profile Icon" title="Go to profile page" />
          </StyledLink>

          <CartLink onClick={() => setCartOpen(true)}>
            <HiOutlineShoppingBag aria-label="Cart Icon" title="Go to the cart" />
            {cart.items.length > 0 && (
              <CartItemsCounter>{cart.items.length}</CartItemsCounter>
            )}
          </CartLink>
          {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
        </RightLinks>
      </Wrapper>

      <Overlay $isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <StyledLink to="/" onClick={handleLinkClick}>
            <Logo src={LogoImg} alt="TaoHoops logo" />
          </StyledLink>
          <BurgerButton onClick={() => setMobileMenuOpen(false)}>
            <HiX />
          </BurgerButton>
        </MobileMenuHeader>
        <MobileMenuLinks>
          <MobileMenuLink to="/products/all" onClick={handleLinkClick}>SHOP ALL</MobileMenuLink>
          <MobileMenuLink to="/products/tees" onClick={handleLinkClick}>TEES</MobileMenuLink>
          <MobileMenuLink to="/products/jerseys" onClick={handleLinkClick}>JERSEYS</MobileMenuLink>
          <MobileMenuLink to="/products/shorts" onClick={handleLinkClick}>SHORTS</MobileMenuLink>
          <MobileMenuLink to="/products/sneakers" onClick={handleLinkClick}>SNEAKERS</MobileMenuLink>
          <MobileMenuLink to="/products/accessories" onClick={handleLinkClick}>ACCESSORIES</MobileMenuLink>
        </MobileMenuLinks>
      </MobileMenu>
    </>
  );
};

export default NavBar;
