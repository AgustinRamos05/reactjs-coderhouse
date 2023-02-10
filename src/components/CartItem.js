import React, { memo } from "react";
import { useCart } from './CustomProvider'

const CartItem = ({ product, id }) => {

  const { removeFromCArt } = useCart()

  const handleRemove = () => {
    removeFromCArt(id)
  }
  console.log("render cart")

  return (
    <div key={product.id} className="product">
      <img src={product.image} alt={product.title} className="product__img" />
      <h5 className="product__title">{product.title} </h5>
      <p className="product__price">${product.price} usd</p>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default memo(CartItem);
