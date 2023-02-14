import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  


  useEffect(() => {
    const productCollection = collection(db, "products");
    const data = id ? query(productCollection, where("category","==",id )) : productCollection
    const firestoreRequest = getDocs(data)
    
    firestoreRequest
        .then((res) => {
          const product = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setProducts(product)
          setLoad(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [id]);

  return (
    <div>
      {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
      <ItemList products={products} key={products.id} />
    </div>
  );
};

export default ItemListContainer;
