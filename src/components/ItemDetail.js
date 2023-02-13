import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {

  return (
    <div key={product.id} className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail__img"/>
      <div className="product-detail__container">
        <h5 className="product-detail__title">{product.title}</h5>
        <p className="product-detail__price">${product.price} usd</p>
        <p className="product-detail__description">{product.description}</p>
        <ItemCount
          stock={product.stock}
          product={product}
          id={product.id}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
