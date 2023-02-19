import { allProducts } from "../Home/data";
import ProductHeader from "./Products-header";
import Card from "./Product-card";
import "./Products.css"

export default function Products(props) {
  return (
    <div className="product-big-container">
      <ProductHeader />
      <div>
        <h2>All Products</h2>
      </div>
      <section className="items-container">
        {
          allProducts.map(product => {
            return <Card key={product.id} data={product} addItems={props.addItems}/>
          })
        }
      </section>
    </div>
  )
}
