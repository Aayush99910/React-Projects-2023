import Card from "./Cart-card.jsx";
import { phoneProducts } from "../Home/data.js";
import "../Sharedlayout/Sharedlayout.css"

export default function Carts(props) {
  let j = 0;
  let i = 0;
  const cartOnlyProducts = [];
  while (j < props.cartItems.length) {
    if (i >= phoneProducts.length) {
      i = 0;
      j++;
    } 

    if (phoneProducts[i].id == props.cartItems[j]) {
      cartOnlyProducts.push(phoneProducts[i]);
    }

    i++;
  }

  return (
    <section className="items-container">
        {
          cartOnlyProducts.map(product => {
            return (
              <Card key={product.id} data={product} />
            )
          })
        }
    </section>
  )
}