import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import CartItem from "./CartItem";
import { useCart } from "./CustomProvider";

const Cart = () => {
  const { cart, setCart, emptyCart, setTotalProducts } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEmptyCart = () => {
    emptyCart();
  };

  const handelChangeName = (e) => {
    setName(e.target.value);
  };
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelClick = () => {
    const order = {
      user: {
        name: name,
        email: email,
        product: cart,
        date: serverTimestamp(),
      },
    };

    const salesCollection = collection(db, "sales");
    const firebaseRequest = addDoc(salesCollection, order);

    firebaseRequest
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setEmail("");
    setCart([]);
    setTotalProducts(0);
  };

  return (
    <div className="cart-content">
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <CartItem product={product} key={product.id} id={product.id} />
          );
        })}
        <button onClick={handleEmptyCart}>Vaciar carrito</button>
      </div>
      <div>
        <input type="text" onChange={handelChangeName} placeholder="Nombre" />
      </div>
      <div>
        <input type="text" onChange={handelChangeEmail} placeholder="Email" />
      </div>
      <button onClick={handelClick}>Confirmar</button>
    </div>
  );
};

export default Cart;
