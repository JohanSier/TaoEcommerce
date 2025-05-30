import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import {
  RiInstagramFill,
  RiTiktokFill,
  RiFacebookFill,
  RiTwitterXFill,
} from "react-icons/ri";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  background: var(--white);
  padding: 2rem;
  padding-top: 5rem;
  margin-bottom: 0.65rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media (max-width: 420px) {
    padding: 2rem 1rem 1rem 1rem;
  }
`;

const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; /* Centrar contenido en pantallas pequeñas */
  width: 100%;
  height: 100%;
  background: var(--greyA);
  padding: 3.5rem 4.3rem 2rem 4.3rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 2rem;
  }
`;


const GroupOne = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const FooterHeading = styled.span`
  max-width: 25rem;
  margin: 0;
  font-size: 2.3rem;
  font-variation-settings: "wght" 600;
  color: var(--white);

  @media screen and (max-width: 570px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 350px){
    font-size: 1.2rem;
  }
`;
const Text = styled.p`
  max-width: 23.5rem;
  margin-top: 0.875rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-variation-settings: "wght" 400;
  color: var(--white);

  @media screen and (max-width: 570px){
    font-size: 0.8rem;
  }
`;
const InputContainer = styled.form`
  width: 15.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;

  @media (max-width: 480px) {
    width: 100%; /* Ocupar todo el ancho en móviles */
  }
`;


const Input = styled.input`
  color: var(--white);
  font-variation-settings: "wght" 500;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: inherit;

  &::placeholder {
    font-size: 1rem;
    font-variation-settings: "wght" 500;
    color: var(--greyE);
  }
`;

const SubmitButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 9.3rem;
  background-color: var(--greyE);
  margin-left: 10%;

  @media (max-width: 768px) {
    width: 80%;
    height: 2px;
    margin: 2rem auto;
  }
`;

const SiteLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  gap: 5.6rem;
  margin-left: 10%;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.6rem;

  @media (max-width: 420px) {
    align-items: start;
    white-space: nowrap;
  }
  @media (max-width: 358px) {
    width: 65%;
  }
`;
const ColumnTitle = styled.span`
  margin-top: 0; //look if gap does not overrides this style
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-variation-settings: "wght" 600;
`;
const ColumnLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--white);
  font-variation-settings: "wght" 500;
`;

const LogoLink = styled(Link)`
    cursor: pointer;
`

const LogoAndSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  width: 100%;
  border-bottom: 1px solid var(--white);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Logo = styled.img`
  width: 7.5rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 0.4rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--white);
`;
const CopyRight = styled.span`
  font-size: 0.8rem;
  color: var(--white);
  font-variation-settings: "wght" 500;
`;

const Footer = () => {
  const [email, setEmail] = useState(""); // State to store user input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Email:", email); // Replace this with your API call or logic
    setEmail(""); // Clear the input after submission
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Container>
        <GroupOne>
          <FooterHeading>Exclusive Drops VIP Access Your Move</FooterHeading>
          <Text>
            Join the hooper community for 10% off and stay in the loop with our
            freshest collections. First to know, first to own. Your court, your
            style. 🏀💥
          </Text>

          <InputContainer onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              required
            />

            <SubmitButton type="submit">
              <HiArrowCircleRight color="white" />
            </SubmitButton>
          </InputContainer>
        </GroupOne>

        <Divider />

        <SiteLinks>
          <Column>
            <ColumnTitle>SHOP</ColumnTitle>
            <ColumnLink to="/products/all">SHOP ALL</ColumnLink>
            <ColumnLink to="/products/tees">TEES</ColumnLink>
            <ColumnLink to="/products/jerseys">JERSEYS</ColumnLink>
            <ColumnLink to="/products/shorts">SHORTS</ColumnLink>
            <ColumnLink to="/products/sneakers">SNEAKERS</ColumnLink>
            <ColumnLink to="/products/accessories">ACCESSORIES</ColumnLink>

          </Column>

          <Column>
            <ColumnTitle>INFO</ColumnTitle>
            <ColumnLink to="#">CART</ColumnLink>
            <ColumnLink to="#">SIZE GUIDE</ColumnLink>
            <ColumnLink to="#">SHIPPING</ColumnLink>
            <ColumnLink to="#">RETURNS</ColumnLink>
            <ColumnLink to="#">PRIVACY POLICY</ColumnLink>
            <ColumnLink to="#">TERMS OF SERVICE</ColumnLink>
          </Column>

          <Column>
            <ColumnTitle>TAOHOOPS</ColumnTitle>
            <ColumnLink to="#">STORES</ColumnLink>
            <ColumnLink to="#">ABOUT US</ColumnLink>
            <ColumnLink to="#">CONTACT US</ColumnLink>
          </Column>
        </SiteLinks>

        <LogoAndSocials>
            <LogoLink to="/" onClick={scrollToTop}>
                <Logo src={LogoImg} alt="TaoHoops Logo" />
            </LogoLink>

          <Socials>
            <SocialLink href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill />
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/?lang=en" target="_blank">
              <RiTiktokFill />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/?locale=es_LA" target="_blank">
              <RiFacebookFill />
            </SocialLink>
            <SocialLink href="https://x.com/home" target="_blank">
              <RiTwitterXFill />
            </SocialLink>
          </Socials>
        </LogoAndSocials>
        <CopyRight>© TaoHoops . All Rights Reserved</CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;
