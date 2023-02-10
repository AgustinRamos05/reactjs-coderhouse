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
  const [totalProduscts, setTotalProducts] = useState(0);
  const [quantity, setQuantity] = useState(0)

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const addToCart = (product, id, accountant) => {
    if (isInCart(id)) {
      //Enviamos cantidad de un producto que esta en el carrito
      setQuantity(quantity + accountant)
      product.quantity = quantity
    } else {
      const copy = [...cart];
      copy.push(product);
      setCart(copy);
      console.log(copy);
      //Enviando cantidad de un producto el cual agregamos al carrito
      setQuantity(accountant)
      product.quantity = quantity
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };
  const emptyCart = () => {
    setCart([]);
  };

  const productsQuantity = (accountant) => {
    if (totalProduscts === 0) {
      setTotalProducts(accountant);
    } else {
      setTotalProducts(totalProduscts + accountant);
    }
  };

  console.log(cart);

  const contextValue = {
    cart: cart,
    totalProducts: totalProduscts,
    quantity: quantity,
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
