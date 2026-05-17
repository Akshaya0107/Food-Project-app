// ======================================================
// FILE: context/CartContext.js
// GASTROPULSE CART CONTEXT
// ======================================================

import React, {
  createContext,
  useContext,
  useState,
} from "react";

/* =========================================
   CREATE CONTEXT
========================================= */
export const CartContext =
  createContext();

/* =========================================
   PROVIDER
========================================= */
export const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  /* =========================================
     ADD TO CART
  ========================================= */
  const addToCart = (meal) => {

    setCartItems((prevItems) => {

      // CHECK EXISTING ITEM
      const existingItem =
        prevItems.find(
          (item) =>
            item.foodName ===
            meal.foodName
        );

      // IF ITEM ALREADY EXISTS
      if (existingItem) {

        return prevItems.map((item) =>

          item.foodName ===
          meal.foodName

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item
        );
      }

      // ADD NEW ITEM
      return [
        ...prevItems,
        {
          id: Date.now().toString(),

          foodName:
            meal.foodName ||
            "Healthy Meal",

          restaurant:
            meal.restaurant ||
            "GastroPulse Kitchen",

          image:
            meal.image ||
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",

          price:
            meal.price || 0,

          calories:
            meal.calories ||
            "250 kcal",

          quantity: 1,
        },
      ];
    });
  };

  /* =========================================
     REMOVE FROM CART
  ========================================= */
  const removeFromCart = (
    itemId
  ) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          item.id !== itemId
      )
    );
  };

  /* =========================================
     INCREASE QUANTITY
  ========================================= */
  const increaseQuantity = (
    itemId
  ) => {

    setCartItems((prevItems) =>

      prevItems.map((item) =>

        item.id === itemId

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item
      )
    );
  };

  /* =========================================
     DECREASE QUANTITY
  ========================================= */
  const decreaseQuantity = (
    itemId
  ) => {

    setCartItems((prevItems) =>

      prevItems.map((item) =>

        item.id === itemId

          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }

          : item
      )
    );
  };

  /* =========================================
     CLEAR CART
  ========================================= */
  const clearCart = () => {
    setCartItems([]);
  };

  /* =========================================
     TOTAL PRICE
  ========================================= */
  const totalPrice =
    cartItems.reduce(
      (total, item) =>

        total +
        Number(item.price) *
          item.quantity,

      0
    );

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};

/* =========================================
   CUSTOM HOOK
========================================= */
export const useCart = () => {

  const context =
    useContext(CartContext);

  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }

  return context;
};