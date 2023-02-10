import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "./CustomProvider";

const Cart = () => {
  const { cart } = useCart();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handelChangeName = (e) =>{
    setName(e.target.value)
  }
  const handelChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handelClick = () =>{
    console.log(name, email)
  }
  

  return (
    <div>
      <div>
        {cart.map((product) => {
          return (
            <CartItem product={product} key={product.id} id={product.id}/>
          );
        })}
      </div>
      <div>
        <input type="text" onChange={handelChangeName} placeholder="Nombre"/>
      </div>
      <div>
        <input type="text" onChange={handelChangeEmail} placeholder="Email"/>
      </div>
      <button onClick={handelClick}>Confirmar</button>
    </div>
  );
};

export default Cart;
