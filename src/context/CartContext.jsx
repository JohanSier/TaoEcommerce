import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

// Define the initial state for the cart
const initialCartState = {
  items: [], // each item could be an object with id, product details, quantity, etc.
};

// Define action types as constants
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

// Create a reducer function for the cart
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      // Buscar un producto con el mismo ID y la misma talla
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItem) {
        // Si ya existe un producto con la misma talla, solo aumenta la cantidad
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? {
                  ...item,
                  quantity: item.quantity + (action.payload.quantity || 1),
                }
              : item
          ),
        };
      }

      // Si no existe un producto con la misma talla, lo agrega como un nuevo producto
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id && item.size === action.payload.size
            )
        ),
      };

    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
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
    const existingItem = state.items.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );
    
      dispatch({ type: ADD_ITEM, payload: item });
      toast.success(`${item.quantity} ${item.title} ${item.size} has been added to your cart!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
  };

  const removeItemFromCart = (id, size) => {
    dispatch({ type: REMOVE_ITEM, payload: { id, size } });
  };

  const updateItemQuantity = (id, size, quantity) => {
    dispatch({ type: UPDATE_ITEM_QUANTITY, payload: { id, size, quantity } });
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
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
