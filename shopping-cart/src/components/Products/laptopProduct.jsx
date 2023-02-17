import { laptopProducts } from "../Home/data";
import Card from "./Product-card";

const LaptopProduct = () => {
  return (
    <section className="items-container">
      {
        laptopProducts.map(product => {
           return <Card key={product.id} data={product} />
        })
      }
    </section>
  )
}

export default LaptopProduct;