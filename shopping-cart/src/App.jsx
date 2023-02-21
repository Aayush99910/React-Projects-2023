import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Sharedlayout/Sharedlayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SharedProductsLayout from "./components/SharedProductsLayout/SharedProductsLayout";
import Products from "./components/Products/Products";
import { allProducts } from "./components/Home/data";
import PhoneProduct from "./components/Products/phoneProduct";
import CameraProduct from "./components/Products/cameraProduct";
import LaptopProduct from "./components/Products/laptopProduct";
import AirpodProduct from "./components/Products/airpodProduct";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  let [total, setTotal] = useState(0);

  function addItems(e) {
    const id = e.target.parentElement.parentElement.id;
    setCartItems(prevState => {
      return [...prevState, id]
    });
  }

  function removeItems(e) {
    const id = e.target.parentElement.parentElement.parentElement.id;
    setCartItems(prevState => {
      return prevState.map(Id => {
        if (Id == id) {
          // pass
        } else {
          return Id;
        }
      })
    })
  }

  function calculateTotal() {
    let j = 0;
    let i = 0;
    const cartOnlyProducts = [];
    while (j < cartItems.length) {
      if (i >= allProducts.length) {
        i = 0;
        j++;
      } 
  
      if (allProducts[i].id == cartItems[j]) {
        cartOnlyProducts.push(allProducts[i]);
      }
  
      i++;
    }

    cartOnlyProducts.forEach(item => {
      total = total + Number(item.price.slice(1))
    })
  }

  calculateTotal();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home addItems={addItems} />} />
            <Route path="/about" element={<About />} />
            <Route path="/carts" element={<Carts cartItems={cartItems} removeItems={removeItems} total={total}/>} />
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