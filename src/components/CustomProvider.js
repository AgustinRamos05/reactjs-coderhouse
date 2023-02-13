import { createContext, useContext, useState } from "react";
import React from "react";

const context = createContext();
const Provider = context.Provider;

export const useCart = () => {
  const contextValue = useContext(context);
  return contextValue;
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const isInCart = (id) => {
    return console.log(cart.some((e) => e.id === id))
  };

  const addToCart = (product, id, accountant) => {
    if (isInCart(id)) {
      //Enviamos cantidad de un producto que esta en el carrito
       product.quantity = product.quantity + accountant;
    } else {
      const copy = [...cart];
      copy.push(product);
      setCart(copy);
      console.log(cart);
      //Enviando cantidad de un producto el cual agregamos al carrito
      product.quantity = accountant
    }
  };
  const removeFromCart = (id, product) => {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1
      setTotalProducts(totalProducts - 1)
    } else {
      setCart(cart.filter((prod) => prod.id !== id));
      setTotalProducts(totalProducts - 1)
    }
  };
  const emptyCart = () => {
    setCart([]);
    setTotalProducts(0);
  };

  const productsQuantity = (accountant) => {
    if (totalProducts === 0) {
      setTotalProducts(accountant);
    } else {
      setTotalProducts(totalProducts + accountant);
    }
  };

  const contextValue = {
    cart: cart,
    totalProducts: totalProducts,
    setTotalProducts: setTotalProducts,
    isInCart: isInCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    emptyCart: emptyCart,
    productsQuantity: productsQuantity,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
