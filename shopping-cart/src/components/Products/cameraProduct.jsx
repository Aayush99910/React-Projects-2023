import { cameraProducts } from "../Home/data";
import Card from "./Product-card";

const CameraProduct = () => {
  return (
    <section className="items-container">
      {
        cameraProducts.map(product => {
           return <Card key={product.id} data={product} />
        })
      }
    </section>
  )
}

export default CameraProduct;