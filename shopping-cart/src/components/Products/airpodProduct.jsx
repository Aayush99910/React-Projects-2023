import { airpodProducts } from "../Home/data";
import Card from "./Product-card";

const AirpodProduct = () => {
  return (
    <section className="items-container">
      {
        airpodProducts.map(product => {
           return <Card key={product.id} data={product} />
        })
      }
    </section>
  )
}

export default AirpodProduct;