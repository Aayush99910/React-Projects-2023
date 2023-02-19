import Card from "./Cart-card.jsx";
import { allProducts } from "../Home/data.js";
import "../Sharedlayout/Sharedlayout.css";

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