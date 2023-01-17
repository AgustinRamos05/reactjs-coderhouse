import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const [load,setLoad] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
  
    const order = fetch('https://fakestoreapi.com/products')

    .then((res)=>{
      const product = res.json()
      return product
    })
    .then((product)=>{
      setProducts(product)
      setLoad(true);
    })
    .catch((err)=>{
      console.log(err)
    })
    

  },[])
  return (
    <div>
      {load ? "" : <h3>Cargando...</h3>}
      <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer
