import { allProducts } from "../Home/data";
import Card from "./Product-card";
import "./Products.css"

export default function Products() {
  return (
    <div className="product-big-container">
      <div className="home-for-you">
        <h2>All Products</h2>
      </div>
      <section className="items-container">
        {
          allProducts.map(product => {
            return <Card key={product.id} data={product} />
          })
        }
      </section>
    </div>
  )
}