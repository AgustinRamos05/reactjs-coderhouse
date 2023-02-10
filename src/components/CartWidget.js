import React from 'react'
import { useCart } from './CustomProvider'


const CartWidget = () => {

  const { totalProducts } = useCart();

  return (
    <>
      <span className='material-icons cart-icon'>shopping_cart</span>
      <span className='cart-quantity'> {totalProducts} </span>
    </>  
  )
}

export default CartWidget
