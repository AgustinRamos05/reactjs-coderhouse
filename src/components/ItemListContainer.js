import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'


const ItemListContainer = (props) => {

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

  return(
    <div>
        {load ? 'Producto cargado' : 'Cargando...'}
        <ItemList products={products}/>
    </div>
  )

}

export default ItemListContainer



  // const [counter, setCounter] = useState(0)

  // const handelClick = () => {
  //   setCounter(counter + 1)
  // }

  

  // return (
  //   <div>
  //     {props.greeting}
  //     <p>Contador : {counter}</p>
  //     <button onClick={handelClick}>sumar</button>
  //   </div>
  // )