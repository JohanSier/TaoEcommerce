import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for the cart
const initialCartState = {
  items: [], // each item could be an object with id, product details, quantity, etc.
};

// Define action types as constants
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';

// Create a reducer function for the cart
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      // Check if the item already exists
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Increase quantity if already exists
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      // Add new item with quantity (default 1)
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case CLEAR_CART:
      return initialCartState;
    default:
      return state;
  }
}

// Create the context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Helper functions to dispatch actions
  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: UPDATE_ITEM_QUANTITY, payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};