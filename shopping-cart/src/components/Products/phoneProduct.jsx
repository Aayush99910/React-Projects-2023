import { phoneProducts } from "../Home/data";
import Card from "./Product-card";

const PhoneProduct = () => {
  return (
    <section className="items-container">
      {
        phoneProducts.map(product => {
           return <Card key={product.id} data={product} />
        })
      }
    </section>
  )
}

export default PhoneProduct;