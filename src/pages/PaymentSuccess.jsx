import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const SuccessContainer = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  color: var(--secondary);
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: var(--secondary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const PaymentSuccess = () => {
  return (
    <SuccessContainer>
      <Title>¡Pago Exitoso!</Title>
      <Message>
        Gracias por tu compra. Tu pedido ha sido procesado correctamente.
        Te enviaremos un correo electrónico con los detalles de tu compra.
      </Message>
      <HomeButton to="/">Volver al Inicio</HomeButton>
    </SuccessContainer>
  );
};

export default PaymentSuccess; 