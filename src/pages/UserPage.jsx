import React from 'react'
import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    padding: 2.5rem 2rem .5rem 2rem;
`

const LoginForm = styled.form`
    background: var(--greyA);
    display: flex;
    flex-direction: column;
    padding: 4rem 8rem;
    color: var(--white);
    border-radius: 8px;

`
const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
`

const Text = styled.p`
    font-size: 1rem;
`

const Input = styled.input`
    width: 100%;
    border: 2px solid var(--white);
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    background: transparent;
    border-radius: 8px;

    &::placeholder{
        color: var(--white);
        font-variation-settings: "wght" 500;
    }
`
const Link = styled.a`
    color: var(--white)
    text-decoration: none;
    margin: 1rem 0 1.2rem 0;
    font-size: 1rem;
    align-self: flex-start;
`

const Button = styled.button`
  background: ${props => props.$primary ? "var(--secondary)" : "var(--greyD)"};
  color: ${props => props.$primary ? "var(--white)" : "var(--secondary)"};

  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 1.4rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  font-variation-settings: "wght" 500;
  cursor: pointer;
`;

const UserPage = () => {
  return (
    <Container>
      <LoginForm>
        <Heading>Login</Heading>
        <Text>Don’t miss the latest drops—log in and stay ahead of the game.</Text>
        <Input type="email" placeholder="Email" required/>
        <Input type="password" placeholder="Password" required/>
        <Link href="#">Forgot your password?</Link>
        <Button $primary={true}>Log In</Button>
        <Button $primary={false}>Sign Up</Button>
      </LoginForm>
    </Container>
  )
}

export default UserPage;
