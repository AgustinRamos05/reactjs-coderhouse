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

  
  const isInCart = (id) => {
    return cart.some((e) => e.id === id)
  }

  const addToCart = (product, id) => {
    if(isInCart(id)){
    }else{
      const copy = [...cart];
      copy.push(product)
      setCart(copy);
      console.log(copy)
    }
  };
  const removeFromCart = (id) => {
   return cart.filter(prod => prod.id != id)
  };
  const emptyCart = () => {
    setCart([]);
  };

  const productsQuantity = (accountant) =>{
    if(totalProduscts === 0){
      setTotalProducts(accountant);
    }else{
      setTotalProducts(totalProduscts + accountant);
    }
  }
  

  const contextValue = {
    cart: cart,
    totalProducts: totalProduscts,
    setTotalProducts: setTotalProducts,
    isInCart: isInCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    emptyCart: emptyCart,
    productsQuantity: productsQuantity
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
