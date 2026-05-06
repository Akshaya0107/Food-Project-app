import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const clearCart = () => {
  setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};