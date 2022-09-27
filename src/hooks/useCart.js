import React from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const { favorites, setFavorites } = React.useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
  const totalOldPrice = cartItems.reduce((sum, obj) => (obj.oldPrice > 0 ? obj.oldPrice - obj.price : 0) + sum, 0)

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  return { cartItems, setCartItems, totalPrice, totalOldPrice, favorites, setFavorites, delay }
}