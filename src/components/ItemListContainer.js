import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const order = fetch("stock.json")
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

  const iphoneProducts = products.filter((product) => {
    return product.category === "iphone";
  });

  const ipadProducts = products.filter((product) => {
    return product.category === "ipad";
  });

  let { id } = useParams();

  if (id) {
    return (
      <div>
        {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
        {id === "ipad" ? (
          <ItemList products={ipadProducts} />
        ) : (
          <ItemList products={iphoneProducts} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
        <ItemList products={products} />
      </div>
    );
  }
};

export default ItemListContainer;
