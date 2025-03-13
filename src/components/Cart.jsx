import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import emptyCartGif from "../assets/Images/emptyCart.gif";
import { HiOutlineX } from "react-icons/hi";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  background: var(--white);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
  z-index: 999;
  overflow-y: scroll;
`;

const CloseButton = styled(HiOutlineX)`
  cursor: pointer;
  align-self: flex-end;
`;

const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProductInfo = styled.div`
  width: 60%;
  display: flex;
  position: relative;
  align-items: center;
  flex: 1;
`;

const ProductImage = styled.img`
  width: 20%;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #333;
  margin-right: 1rem;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductTitle = styled.p`
  width: 100%;
  font-size: 1.1rem;
  margin:0;
`
const Price = styled.p`
  font-size: .8rem;
  margin: 4px 0;
  color: var(--greyA);
  font-variation-settings: "wght" 500;
`
const ProductSizeText = styled.p`
  font-size: 1rem;
  margin: 4px 0;
  color: var(--secondary);
  font-variation-settings: "wght" 400;

  & > span{
    font-size: .9rem;
    margin-left: 4px;
    color: #7a7a7a;
    font-variation-settings: "wght" 600;
  }
`
const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-left: auto;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const EmptyText = styled.h3`
  font-size: 1.2rem;
  font-variation-settings: "wght" 600;
`;
const EmptyButton = styled(Link)`
  text-decoration: none;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: var(--secondary);
  font-size: 1rem;
  padding: 1.6rem;
  font-variation-settings: "wght" 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--white);
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;
const Gif = styled.img`
  width: 30%;
`;

const CheckoutDetails = styled.div`
  width: 100%;
  background: var(--white);
  display: flex;
  flex-direction: column;
  margin-top: auto;
  border-top: 1px solid var(--greyE);
  position: sticky;
  bottom: 0;
`

const TotalFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.2rem;
color: var(--secondary);

`;

const TotalPrice = styled.p`
  font-size: 1rem;
  font-variation-settings: "wght" 600;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 14px;
`

const CheckoutButton = styled(EmptyButton)`
  background: var(--secondary);
  color: var(--white);
  width: 50%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: .9rem;
`;

const ViewCartButton = styled(CheckoutButton)`
  background: var(--complementary);
`

const Cart = ({ onClose }) => {
  const { cart, removeItemFromCart } = useCart();

  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <CloseButton size={32} onClick={onClose} />

      {cart.items.length === 0 ? (
        <EmptyContainer>
          <Gif src={emptyCartGif} alt="Animated Gif of a basketball" />
          <EmptyText>Your Cart is Empty</EmptyText>
          <EmptyButton to="/products/all" onClick={onClose}>Continue Shopping</EmptyButton>
        </EmptyContainer>
      ) : (
        <>
          <h2>Your Cart</h2>
          {cart.items.map((item) => (
            <CartItem key={item.id}>
              <ProductInfo>
                <ProductImage
                  src={
                    item.images
                  }
                  alt={item.title}
                />

                <ProductDetails>
                  <ProductTitle>{item.title}</ProductTitle>
                  <Price>${item.price}</Price>
                  <ProductSizeText>
                    Size: <span>{item.size}</span>
                  </ProductSizeText>
                </ProductDetails>
              </ProductInfo>
              
              <RemoveButton onClick={() => removeItemFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
        </>
      )}
      {cart.items.length === 0 ? null : (
        <CheckoutDetails>
          <TotalFlex>
             <h3>Total:</h3>
             <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
          </TotalFlex>

          <ButtonContainer>
            <ViewCartButton>View Cart</ViewCartButton>
            <CheckoutButton>Go to Checkout</CheckoutButton>
          </ButtonContainer>
        </CheckoutDetails>
      )}
    </CartContainer>
  );
};

export default Cart;
