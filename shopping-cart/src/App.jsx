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
import NotFound from "./components/NotFound/NotFound"
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  let total = 0;

  function addItems(e) {
    const id = e.target.parentElement.parentElement.id;
    setCartItems(prevState => {
      if (prevState.length > 0) {
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].id == id) {
              let newPrevState = prevState.filter(function (item) {
                if (item.id == id) {
                  return false
                } else {
                  return true
                }
              })
              return [...newPrevState, {id : id, count: prevState[i].count + 1}];
          }
        }

        return [...prevState, {id: id, count: 1}];

      } else {
        return [...prevState, {id: id, count: 1}];
      }
    });
  }


  function removeItems(e) {
    const id = e.target.parentElement.parentElement.parentElement.id;
    setCartItems(prevState => {
      return prevState.filter(item => {
        if (item.id == id) {
          return false;
        } else {
          return true;
        }
      })
    })
  }

  function increaseOrDecreaseItem(e) {
    const increaseOrdecrease = e.target.className;
    const id = e.target.parentElement.parentElement.parentElement.id;
    if (increaseOrdecrease == "increase") {
      setCartItems(prevState => {
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].id == id) {
            let newPrevState = prevState.filter(item => {
              if (item.id == id) {
                return false;
              } else {
                return true;
              }
            })
            return [...newPrevState, {id: id, count: prevState[i].count + 1}]
          } 
        }
      })
    } else if (increaseOrdecrease == "decrease"){
      setCartItems(prevState => {
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].id == id) {
            let newPrevState = prevState.filter(item => {
              if (item.id == id) {
                return false;
              } else {
                return true;
              }
            })
            return [...newPrevState, {id: id, count: prevState[i].count - 1}]
          } 
        }
      }) 
    }
  }

  function calculateTotal() {
    let j = 0;
    let i = 0;
    const cartOnlyProducts = [];
    while (j < cartItems.length) {
      if (i == allProducts.length) {
        i = 0;
        j++;
      } 
  
      if (allProducts[i].id == cartItems[j].id) {
        let allProductAndCartItemsInOneObject = {
          ...allProducts[i],
          count: cartItems[j].count
        }
        cartOnlyProducts.push(allProductAndCartItemsInOneObject);
        i = 0;
        j++;
      } else {
        i++;
      }
    }

    cartOnlyProducts.forEach(item => {
      let itemTotal = item.count * Number(item.price.slice(1));
      total = total + Number(itemTotal)
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
            <Route path="/carts" element={<Carts cartItems={cartItems} removeItems={removeItems} total={total} increaseOrDecreaseItem={increaseOrDecreaseItem}/>} />
          </Route>
          <Route path="/products" element={<SharedProductsLayout />}>
            <Route index element={<Products addItems={addItems} />} />
            <Route path="/products/phone" element={<PhoneProduct addItems={addItems}  />} />
            <Route path="/products/camera" element={<CameraProduct addItems={addItems}  />} />
            <Route path="/products/laptop" element={<LaptopProduct addItems={addItems}  />} />
            <Route path="/products/airpods" element={<AirpodProduct addItems={addItems}  />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}