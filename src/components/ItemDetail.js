import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div key={product.id} className="product">
      <img src={product.image} alt={product.title} className="product__img" />
      <h5 className="product__title">{product.title}</h5>
      <p className="product__price">${product.price} usd</p>
      <p className="product__description">{product.description}</p>
    </div>
  );
};

export default ItemDetail;
