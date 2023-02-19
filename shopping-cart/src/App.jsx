import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Sharedlayout/Sharedlayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SharedProductsLayout from "./components/SharedProductsLayout/SharedProductsLayout";
import Products from "./components/Products/Products";
import PhoneProduct from "./components/Products/phoneProduct";
import CameraProduct from "./components/Products/cameraProduct";
import LaptopProduct from "./components/Products/laptopProduct";
import AirpodProduct from "./components/Products/airpodProduct";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItems(e) {
    const id = e.target.parentElement.parentElement.id;
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
            <Route path="/carts" element={<Carts cartItems={cartItems} />} />
          </Route>
          <Route path="/products" element={<SharedProductsLayout />}>
            <Route index element={<Products addItems={addItems} />} />
            <Route path="/products/phone" element={<PhoneProduct addItems={addItems}  />} />
            <Route path="/products/camera" element={<CameraProduct addItems={addItems}  />} />
            <Route path="/products/laptop" element={<LaptopProduct addItems={addItems}  />} />
            <Route path="/products/airpods" element={<AirpodProduct addItems={addItems}  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}