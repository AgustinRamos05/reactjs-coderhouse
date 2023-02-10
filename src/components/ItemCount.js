import React, { useState } from 'react'
import { useCart } from './CustomProvider'


const ItemCount = ({stock, onAdd, product, id}) => {

    const [accountant,setAccontant] = useState(1)

    const { addToCart, isInCart, productsQuantity } = useCart();

    const handleAdd = () => {
        if (accountant < stock){
            setAccontant(accountant + 1);
        }   
    }
    const handleSubtract = () => {
        setAccontant(accountant <= 1 ? accountant : accountant - 1);
    }
    const handleConfirm = () => {
        onAdd(accountant);
        productsQuantity(accountant);
        isInCart(id);
        addToCart(product, id, accountant);
        setAccontant(1);
    }

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <p>Cantidad: {accountant}</p>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleConfirm}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
