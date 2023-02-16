import { phoneProducts }  from "./data";
import { airpodProducts } from "./data";
import { laptopProducts } from "./data";
import { cameraProducts } from "./data";
import { bestSeller } from "./data";
import { NavLink } from "react-router-dom";
import Card from "./Home-card";
import HomeForYouCard from "./Home-for-you-card";

export default function HomeMain (props) {
  let newPhoneProducts = phoneProducts.slice(0, 4);
  let newAirpodProducts = airpodProducts.slice(0, 4);
  let newLaptopProducts = laptopProducts.slice(0, 4);
  let newCameraProducts = cameraProducts.slice(0, 4);

  const allProductsDataInArray = [
    {
      id: 0,
      title: "Phones For You!",
      array: [...newPhoneProducts]
    },
    {
      id: 1,
      title: "Airpods For You!",
      array: [...newAirpodProducts]
    },
    {
      id: 2,
      title: "Laptop For You!",
      array: [...newLaptopProducts]
    },
    {
      id: 3,
      title: "Cameras For You!",
      array: [...newCameraProducts]
    },
  ]
  
  return (
    <main className="home-main-container">
      {
        allProductsDataInArray.map(product => {
          return <HomeForYouCard key={product.id} data={product} addItems={props.addItems}/>  
        })
      }
    </main>
  )
}
