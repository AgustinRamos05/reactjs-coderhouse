import React from "react";

const Item = ({product}) => {
  return (
    <div key={product.id}>
      <img src={product.image} />
      <h5>{product.title}</h5>
      <p>{product.price}</p>
    </div>
  );
};

export default Item;
