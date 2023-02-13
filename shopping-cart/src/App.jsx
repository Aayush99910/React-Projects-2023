import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Sharedlayout/Sharedlayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Offers from "./components/Offers/Offers";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItems(e) {
    const id = Number(e.target.parentElement.parentElement.id);
    setCartItems(prevState => {
      return [...prevState, id]
    });
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home addItems={addItems} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/carts" element={<Carts cartItems={cartItems} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}