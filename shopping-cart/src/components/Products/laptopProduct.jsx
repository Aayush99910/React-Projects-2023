import { NavLink } from "react-router-dom";
import { laptopProducts } from "../Home/data";
import Card from "./Product-card";

const LaptopProduct = (props) => {
  return (
    <>
      <div className="go-back-text">
          <NavLink to="/products">Go back</NavLink>
        </div>
      <section className="items-container">
        {
          laptopProducts.map(product => {
            return <Card key={product.id} data={product} addItems={props.addItems} />
          })
        }
      </section>
    </>
  )
}

export default LaptopProduct;