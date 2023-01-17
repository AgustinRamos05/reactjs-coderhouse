import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

const Main = () => {
  return (
    <main className='main'>
      {/* <h1 className='main__title'>Welcome to IponeShop</h1>
      <img src="/img/592932.jpg" className='main__banner' alt="Banner Iphone 13"/> */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/products/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      
    </main>
  )
}

export default Main
