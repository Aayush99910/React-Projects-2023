import { NavLink } from "react-router-dom";
import { cameraProducts } from "../Home/data";
import Card from "./Product-card";

const CameraProduct = (props) => {
  return (
    <>
      <div className="go-back-text">
        <NavLink to="/products">Go back</NavLink>
      </div>
      <section className="items-container">
        {
          cameraProducts.map(product => {
            return <Card key={product.id} data={product} addItems={props.addItems} />
          })
        }
      </section>
    </>
  )
}

export default CameraProduct;