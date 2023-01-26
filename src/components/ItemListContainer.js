import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
     fetch("stock.json")
      .then((res) => {
        const product = res.json();
        return product;
      })
      .then((product) => {
        if (category) {
          setProducts(product.filter((prod) => prod.category === category));
        } else {
          setProducts(product);
          setLoad(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
      <ItemList products={products} />
    </div>
  );

  // const iphoneProducts = products.filter((product) => {
  //   return product.category === "iphone";
  // });

  // const ipadProducts = products.filter((product) => {
  //   return product.category === "ipad";
  // });

  // if (id) {
  //   return (
  //     <div>
  //       {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
  //       {id === "ipad" ? (
  //         <ItemList products={ipadProducts} />
  //       ) : (
  //         <ItemList products={iphoneProducts} />
  //       )}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
  //       <ItemList products={products} />
  //     </div>
  //   );
  // }
};

export default ItemListContainer;
