import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "products");
    const firestoreRequest = getDocs(productCollection);
     firestoreRequest
     .then((res) =>{
      console.log(res)
     })
     .catch((err) =>{
      console.log(err)
     });

    fetch("/stock.json")
      .then((res) => {
        const product = res.json();
        return product;
      })
      .then((product) => {
        if (id) {
          setProducts(product.filter((prod) => prod.category === id));
          setLoad(true);
        } else {
          setProducts(product);
          setLoad(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
