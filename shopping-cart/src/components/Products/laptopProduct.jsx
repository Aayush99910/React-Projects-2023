import { laptopProducts } from "../Home/data";
import Card from "./Product-card";

const LaptopProduct = (props) => {
  return (
    <section className="items-container">
      {
        laptopProducts.map(product => {
           return <Card key={product.id} data={product} addItems={props.addItems} />
        })
      }
    </section>
  )
}

export default LaptopProduct;