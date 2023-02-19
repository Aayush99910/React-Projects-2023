import { airpodProducts } from "../Home/data";
import Card from "./Product-card";

const AirpodProduct = (props) => {
  return (
    <section className="items-container">
      {
        airpodProducts.map(product => {
           return <Card key={product.id} data={product} addItems={props.addItems} />
        })
      }
    </section>
  )
}

export default AirpodProduct;