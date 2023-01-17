import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <div key={product.id} className="product">
      <img src={product.image}  alt={product.title} className="product__img"/>
      <h5 className="product__title">{product.title}</h5>
      <p className="product__price">{product.price}</p>
      <Link to={"/item/" + product.id} className="product__btn">ver mas</Link>
    </div>
  );
};

export default Item;
