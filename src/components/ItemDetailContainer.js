import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch("stock.json")
      .then((res) => {
        const product = res.json();
        return product;
      })
      .then((product) => {
        setProducts(product);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const item = products.find((product) => product.id === id);
  console.log(item)

  
  
  return (
    <div>
      {load ? "" : <h3>Cargando...</h3>}
      <ItemDetail product={item}/>
    </div>
  );
};

export default ItemDetailContainer;
