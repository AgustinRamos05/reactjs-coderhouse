import React from "react";

const ItemDetail = ({ products }) => {
  return (
    <div key={products.id} className="product">
      <img src={products.image} alt={products.title} className="product__img" />
      <h5 className="product__title">{products.title}</h5>
      <p className="product__price">{products.price}</p>
    </div>
  );
};

export default ItemDetail;
