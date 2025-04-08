import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  color: var(--secondary);
  margin-bottom: 2rem;
`;

const OrderSummary = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 5px;
`;

const ItemList = styled.div`
  margin-bottom: 1rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

const Total = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
`;

const PaymentButton = styled.button`
  background: var(--secondary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1.1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Checkout = () => {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si el carrito está vacío, redirigir a la página principal
    if (cart.items.length === 0) {
      navigate('/');
    }
  }, [cart.items.length, navigate]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4242/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            thumbnailImage: item.thumbnailImage
          }))
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Checkout session created:', data);
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No URL returned from server');
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      setLoading(false);
    }
  };

  const total = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CheckoutContainer>
      <Title>Checkout</Title>
      
      <OrderSummary>
        <h2>Resumen del Pedido</h2>
        <ItemList>
          {cart.items.map((item) => (
            <Item key={`${item.id}-${item.size}`}>
              <span>{item.title} (Talla: {item.size}) x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </Item>
          ))}
        </ItemList>
        <Total>Total: ${total.toFixed(2)}</Total>
      </OrderSummary>

      <PaymentButton 
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Procesando...' : 'Proceder al Pago'}
      </PaymentButton>
    </CheckoutContainer>
  );
};

export default Checkout; 