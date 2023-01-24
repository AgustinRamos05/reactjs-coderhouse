import React from "react";
import Item from "./Item";

const itemList = ({ products }) => {
  
  return (
    <div className="productContainer">
      {products.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </div>
    )

};

export default itemList;
