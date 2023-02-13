import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "products");
    const reference = doc(productCollection, id);
    const firestoreRequest = getDoc(reference);

    firestoreRequest
      .then((res) => {
        const product = res.data();
        setProducts(product);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {load ? "" : <h3>Cargando...</h3>}
      <ItemDetail product={products} />
    </>
  );
};

export default ItemDetailContainer;
