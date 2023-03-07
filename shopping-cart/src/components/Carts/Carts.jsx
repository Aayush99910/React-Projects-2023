import Card from "./Cart-card.jsx";
import { allProducts, phoneProducts } from "../Home/data.js";
import "../Sharedlayout/Sharedlayout.css";
import "./Carts.css";
import cart from '../../assets/shoppingCart.png'

export default function Carts(props) {
  let cartItems = props.cartItems;
  const cartOnlyProducts = [];

  let j = 0;
  let i = 0;

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
                    <Card key={product.id} data={product} removeItems={props.removeItems} increaseOrDecreaseItem={props.increaseOrDecreaseItem}/>
                  )
                })
              }
            </div>
            <div className="right-container">
              <p>Your total is:<b> ${props.total}</b></p>
              <button className="checkout-button">Continue to Checkout</button>
            </div>
          </section> 
        </div>
      }
    </div>
  )
}