import Card from "./Cart-card.jsx";
import { products } from "../../assets/data";
import "../Sharedlayout/Sharedlayout.css"

export default function Carts(props) {
  let j = 0;
  let i = 0;
  const cartOnlyProducts = [];
  while (j < props.cartItems.length) {
    if (i >= products.length) {
      i = 0;
      j++;
    } 

    if (products[i].id == props.cartItems[j]) {
      cartOnlyProducts.push(products[i]);
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