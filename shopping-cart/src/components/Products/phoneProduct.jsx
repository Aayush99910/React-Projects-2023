import { NavLink } from "react-router-dom";
import { phoneProducts } from "../Home/data";
import Card from "./Product-card";

const PhoneProduct = (props) => {
  return (
    <>
      <div className="go-back-text">
        <NavLink to="/products">Go back</NavLink>
      </div>
      <section className="items-container">
        {
          phoneProducts.map(product => {
            return <Card key={product.id} data={product} addItems={props.addItems} />
          })
        }
      </section>
    </>
  )
}

export default PhoneProduct;