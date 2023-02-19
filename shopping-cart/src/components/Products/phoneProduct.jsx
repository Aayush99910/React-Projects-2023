import { phoneProducts } from "../Home/data";
import Card from "./Product-card";

const PhoneProduct = (props) => {
  return (
    <section className="items-container">
      {
        phoneProducts.map(product => {
           return <Card key={product.id} data={product} addItems={props.addItems} />
        })
      }
    </section>
  )
}

export default PhoneProduct;