import React from "react";
import styled from "styled-components";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineSearch,
} from "react-icons/hi";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: var(--transparent);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const CenterLogo = styled.div`
  flex-shrink: 0; /* Evita que el logo se redimensione */
`;

const Link = styled.a`
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
  font-size: 1rem;
  cursor: pointer;

  &::placeholder {
    font-size: 1.1rem;
    color: var(--white);
  }
`;

const LeftLinks = styled.ul`
  text-wrap: nowrap;
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
  return (
    <Wrapper>
      <LeftLinks>
        <Link href="#">SHOP ALL</Link>{" "}
        {/* Cambiar por un Link de React Router */}
        <Link href="#">MEN'S</Link> {/* Cambiar por un Link de React Router */}
        <Link href="#">WOMEN'S</Link>{" "}
        {/* Cambiar por un Link de React Router */}
        <Link href="#">KIDS</Link> {/* Cambiar por un Link de React Router */}
        <Link href="#">ACCESORIES</Link>{" "}
        {/* Cambiar por un Link de React Router */}
      </LeftLinks>

      <Spacer />
      <CenterLogo>
        <Logo src={LogoImg} alt="TaoHoops logo" />
      </CenterLogo>
      <Spacer />

      <RightLinks>
        <Link className="input-btn">
          <HiOutlineSearch aria-label="Search Icon" title="Search Item"/>
          <Input type="text" placeholder="Buscar" />
        </Link>

        <Link>
          <HiOutlineUser aria-label="Profile Icon" title="Go to profile page"/>
        </Link>
        <Link>
          <HiOutlineShoppingBag aria-label="Cart Icon" title="Go to the cart page"/>
        </Link>
      </RightLinks>
    </Wrapper>
  );
};

export default NavBar;
