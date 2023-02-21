import Card from "./Cart-card.jsx";
import { allProducts } from "../Home/data.js";
import "../Sharedlayout/Sharedlayout.css";
import "./Carts.css";
import cart from '../../assets/shoppingCart.png'

export default function Carts(props) {
  let j = 0;
  let i = 0;
  const cartOnlyProducts = [];
  while (j < props.cartItems.length) {
    if (i >= allProducts.length) {
      i = 0;
      j++;
    } 

    if (allProducts[i].id == props.cartItems[j]) {
      cartOnlyProducts.push(allProducts[i]);
    }

    i++;
  }

  return (
    <div>
      {
        cartOnlyProducts.length == 0 ? 
        <div className="cart-image">
          <div>
            <img className="logo-image" src={cart} />
          </div>
          <div>Your Cart Items will appear here.</div>
        </div> :
        <div className="cart-big-container">
          <div className="cart-heading">Your cart items</div>
          <section className="cart-container height">
            <div className="left-container">
              {
                cartOnlyProducts.map(product => {
                  return (
                    <Card key={product.id} data={product}  removeItems={props.removeItems}/>
                  )
                })
              }
            </div>
            <div className="right-container">
              <button className="checkout-button">Continue to Checkout</button>
              <p>Total: ${props.total}</p>
            </div>
          </section> 
        </div>
      }
    </div>
  )
}