import { phoneProducts }  from "./data";
import { airpodProducts } from "./data";
import { bestSeller } from "./data";
import Card from "./Home-card";
import { NavLink } from "react-router-dom";

export default function HomeMain (props) {
  let newPhoneProducts = phoneProducts.slice(0, 4);
  let newAirpodProducts = airpodProducts.slice(0, 4);

  return (
    <main className="home-main-container">
      <div className="home-for-you">
        <h2>Phones For You!</h2>
        <NavLink to="/products">See All</NavLink>
      </div>
      <section className="items-container">
        {
          newPhoneProducts.map(product => {
            return (
              <Card key={product.id} data={product} addItems={props.addItems}/>
            )
          })
        }
      </section>
      <div className="home-for-you">
        <h2>Airpods For You!</h2>
        <NavLink to="/products">See All</NavLink>
      </div>
      <section className="items-container">
        {
          newAirpodProducts.map(product => {
            return (
              <Card key={product.id} data={product} addItems={props.addItems}/>
            )
          })
        }
      </section>
      <div className="home-for-you">
        <h2>Best Seller</h2>
        <NavLink to="/products">See All</NavLink>
      </div>
      <section className="items-container">
        {
          bestSeller.map(product => {
            return (
              <Card key={product.id} data={product} />
            )
          })
        }
      </section>
    </main>
  )
}