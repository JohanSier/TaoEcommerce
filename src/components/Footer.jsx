import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { HiArrowCircleRight } from 'react-icons/hi'
import { RiInstagramFill, RiTiktokFill, RiFacebookFill, RiTwitterXFill} from "react-icons/ri";
import LogoImg from "../assets/Images/TaoHoops-logo.svg";

const Wrapper = styled.div`
    width: 100%;
    background: var(--white);
    padding: 2rem; 
    padding-top: 5rem;
    margin-bottom: .65rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    `
    
    const Container = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--greyA);
    padding: 3.5rem 4.3rem 2rem 4.3rem; /*(top, right, bottom, left)*/
    border-radius: 1rem;
`

const GroupOne = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: start;
`

const FooterHeading = styled.span`
    max-width: 25rem;
    margin: 0;
    font-size: 2.3rem;
    font-variation-settings: "wght" 600;
    color: var(--white);
`

const Text = styled.p`
    max-width: 23.5rem;
    margin-top: 0.875rem;
    margin-bottom: 1.5rem;
    font-size: .9rem;
    font-variation-settings: "wght" 400;
    color: var(--white);
`

const InputContainer = styled.form`
  width: 15.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--white);
  border-radius: 8px;
  padding: .4rem .5rem;

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
    
    &::placeholder{
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
`


const SiteLinks = styled.div`
    white-space: nowrap;
    flex: 2;
    flex-wrap: wrap;
    display: flex;
    margin-left: 10%;
    gap: 5.6rem;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .6rem;
`
const ColumnTitle = styled.span`
    margin-top: 0; //look if gap does not overrides this style
    margin-bottom: .5rem;
    font-size: 1.2rem;
    font-variation-settings: "wght" 600;
`
const ColumnLink = styled.a`
    font-size: .8rem;
    text-decoration: none;
    color: var(--white);
    font-variation-settings: "wght" 500;
`


const LogoAndSocials = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 1rem;
    padding-bottom: .8rem;
    border-bottom: 1px solid var;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
    width: 7.5rem;
`
const Socials = styled.div`
    display: flex;
    gap: .4rem;
`
const SocialLink = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--white);
`
const CopyRight = styled.span`
    font-size: .8rem;
    color: var(--white);
    font-variation-settings: "wght" 500;
`

const Footer = () => {
  const [email, setEmail] = useState(''); // State to store user input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Email:', email); // Replace this with your API call or logic
    setEmail(''); // Clear the input after submission
  };

  return (
    <Wrapper>
      <Container>
        <GroupOne>
          <FooterHeading>Exclusive Drops VIP Access Your Move</FooterHeading>
          <Text>Join the hooper community for 10% off and stay in the loop with our freshest collections. First to know, first to own. Your court, your style. 🏀💥</Text>
          
          <InputContainer onSubmit={handleSubmit}>
                <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                required 
                />

                <SubmitButton type="submit">
                    <HiArrowCircleRight color="white"/>
                </SubmitButton>
          </InputContainer>
        </GroupOne>

        <Divider/>

        <SiteLinks>
            <Column>
                <ColumnTitle>SHOP</ColumnTitle>
                <ColumnLink href="#" >NEW ARRIVALS</ColumnLink>
                <ColumnLink href="#" >MEN'S</ColumnLink>
                <ColumnLink href="#" >WOMEN'S</ColumnLink>
                <ColumnLink href="#" >KIDS</ColumnLink>
                <ColumnLink href="#" >ACCESORIES</ColumnLink>
            </Column>

            <Column>
                <ColumnTitle>INFO</ColumnTitle>
                <ColumnLink href="#" >CART</ColumnLink>
                <ColumnLink href="#" >SIZE GUIDE</ColumnLink>
                <ColumnLink href="#" >SHIPPING</ColumnLink>
                <ColumnLink href="#" >RETURNS</ColumnLink>
                <ColumnLink href="#" >PRIVACY POLICY</ColumnLink>
                <ColumnLink href="#" >TERMS OF SERVICE</ColumnLink>
            </Column>

            <Column>
                <ColumnTitle>TAOHOOPS</ColumnTitle>
                <ColumnLink href="#" >STORES</ColumnLink>
                <ColumnLink href="#" >ABOUT US</ColumnLink>
                <ColumnLink href="#" >CONTACT US</ColumnLink>
            </Column>
        </SiteLinks>

        <LogoAndSocials>
            <Logo src={LogoImg} alt="TaoHoops Logo" />
            <Socials>
                <SocialLink href="#"><RiInstagramFill/></SocialLink>
                <SocialLink href="#"><RiTiktokFill/></SocialLink>
                <SocialLink href="#"><RiFacebookFill/></SocialLink>
                <SocialLink href="#"><RiTwitterXFill/></SocialLink>
            </Socials>
        </LogoAndSocials>
        <CopyRight>© TaoHoops . All Rights Reserved</CopyRight>
      </Container>
    </Wrapper>
  )
}

export default Footer