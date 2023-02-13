import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"element={
            <>
              <h1 className="main__title">Bienvenido a IponeShop</h1>
              <img
                src="/img/592932.jpg"
                className="main__banner"
                alt="Banner Iphone 13"
              />
              <ItemListContainer />
            </>
          }
        />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
