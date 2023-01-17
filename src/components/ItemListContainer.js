import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {

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

  console.log(products);

  return(
    <div>
        {load ? <h3>Productos</h3> : <h3>Cargando...</h3>}
        <ItemList products={products}/>
    </div>
  )

}

export default ItemListContainer

