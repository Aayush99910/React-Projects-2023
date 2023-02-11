import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Sharedlayout/Sharedlayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Offers from "./components/Offers/Offers";
import Carts from "./components/Carts/Carts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/carts" element={<Carts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}